import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function EditContatos() {
  const initialFormData = {
    name: "",
    phone: "",
    cpf: "",
    adress: "",
    number: "",
    complements: "",
    zipCode: "",
    district: "",
    city: "",
    state: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let zipCode = e.target.value.replace(/\D/g, "");
    if (zipCode.length > 5) {
      zipCode = zipCode.slice(0, 5) + "-" + zipCode.slice(5, 8);
    }
    setFormData({ ...formData, zipCode });

    if (zipCode.length === 9) {
      try {
        const teste = 1;
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", JSON.stringify(formData, null, 2));
    try {
      const response = {
        data: "oi",
      };
      console.log("Dados enviados com sucesso:", response.data);
      alert("Cadastro realizado com sucesso!");
      setFormData(initialFormData); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert(
        "Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente."
      );
    }
  };

  return (
    <Container>
      <Grid2 container spacing={2} minHeight={160}>
        <Grid2 size={6} mx={6} justifyContent="left" alignItems="left">
          <Typography variant="h4">Lista de Contatos</Typography>
        </Grid2>
        <Box
          sx={{
            width: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid2 onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Telefone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="CPF"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            <TextField
              label="CEP"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleCepChange}
              required
            />
            <TextField
              label="Adress"
              name="adress"
              value={formData.adress}
              onChange={handleChange}
              required
              disabled
            />
            <TextField
              label="Complements"
              name="complement"
              value={formData.complements}
              onChange={handleChange}
            />
            <TextField
              label="Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
            <TextField
              label="District"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              disabled
            />
            <TextField
              label="City"
              name="City"
              value={formData.city}
              onChange={handleChange}
              required
              disabled
            />
            <TextField
              label="State"
              name="State"
              value={formData.state}
              onChange={handleChange}
              required
              disabled
            />
            <Button type="submit" variant="contained" color="primary">
              Registration
            </Button>
          </Grid2>
        </Box>
      </Grid2>
    </Container>
  );
}
