import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { createPessoa } from "../../services";
import { WhiteTextField } from "./componentes/TextField";

export function EditContatos() {
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
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Lista de Contatos
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid size={6} mx={6}>
            <WhiteTextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid size={6} mx={6}>
            <WhiteTextField
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={6} mx={6}>
            <WhiteTextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid size={6} mx={6}>
            <WhiteTextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid size={6} mx={6}>
            <WhiteTextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid size={6} mx={6} display="flex" alignItems="center">
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
          <Grid size={6} mx={6}>
            <Button type="submit" variant="contained" fullWidth color="primary">
              Registration
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
