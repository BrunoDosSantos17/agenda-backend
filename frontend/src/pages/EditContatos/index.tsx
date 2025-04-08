import {
  avatarClasses,
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { WhiteTextField } from "./componentes/TextField"
import { createPessoa } from "../../services";

export function EditContatos() {
  const initialFormData = {
    id: null,
    name: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    avatar: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPessoa(formData)

    console.log("Dados do formulário:", JSON.stringify(formData, null, 2));
    alert("Cadastro realizado com sucesso!");
    setFormData(initialFormData);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Lista de Contatos
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
              required
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
        </Grid>

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary">
            Registration
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
