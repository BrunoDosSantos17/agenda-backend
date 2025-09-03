import { useState, useRef } from "react";
import { createPessoa } from "../../../../../services"; 
import { ChangeEvent } from "react";// ajuste o path conforme sua estrutura

export function useFormContactsService() {
  const initialFormData = {
    id: null,
    name: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    avatar: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [avatar, setAvatarFile] = useState<File | null>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPessoa(formData, avatar as File);

    setFormData(initialFormData);
    setAvatarFile(null);
  };

  return {
    formData,
    avatar,
    handleChange,
    fileInputRef,
    handleUploadClick,
    handleFileChange,
    handleSubmit,
  };
}
