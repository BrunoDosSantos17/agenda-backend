import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Grid2 as Grid,
} from "@mui/material";
import { useRef, useState } from "react";
import { createPessoa } from "../../../../services";
import { WhiteTextField } from "./componentes/TextField";

export function FormContacts() {
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
  const [avatar, setAvatarFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createPessoa(formData, avatar);

    setFormData(initialFormData);
    setAvatarFile(null);
  };

  return (
    <Dialog open={true} maxWidth={"sm"} style={{ backdropFilter: "blur(4px)" }}>
      <Container style={{ backgroundColor: "#1e1e2f" }}>
        <DialogTitle align="left" style={{ color: "#dcdce6ff" }}>
          Adicionar Novo Contato
        </DialogTitle>
        <Box alignItems={"flex-start"} component="form" onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            minHeight={160}
            paddingBottom={2}
            paddingTop={1}
          >
            <Grid size={12} mx={3}>
              <WhiteTextField
                label="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid size={12} mx={3}>
              <WhiteTextField
                label="Telefone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid size={12} mx={3}>
              <WhiteTextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid size={12} mx={3}>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Button variant="outlined" fullWidth onClick={handleUploadClick}>
                {avatar ? "Imagem selecionada ✅" : "Selecionar imagem"}
              </Button>
            </Grid>

            <Grid size={5} mx={3}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
              >
                Cancelar
              </Button>
            </Grid>
            <Grid size={5} mx={1}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Dialog>
  );
}
