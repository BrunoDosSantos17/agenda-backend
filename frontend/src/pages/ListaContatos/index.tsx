import {
  Box,
  Container,
  Grid2 as Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ButtonAction from "./components/ButtonAction";
import ListContacts from "./components/ListContacts";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { Contact } from "../../services/type";
import { useState } from "react";


export function ListaContatos() {
  const navigate = useNavigate();

  const [personas, setPersonas] = useState<Contact[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  

  const handleClick = (item: Contact | null) => {
    navigate("/edit", { state: item });
  };

  return (
    <Container>
      <Grid container spacing={2} minHeight={160}>
        <Grid size={6} mx={6} justifyContent="left" alignItems="left">
          <Typography variant="h4">Lista de Contatos</Typography>
        </Grid>
        <Grid size={4} mx={6}>
          <ButtonAction 
            handleClick={() => handleClick(personas[selectedId || 0])}
          />
        </Grid>
        <Grid size={9.5} mx={5}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              fullWidth
              id="input-with-icon-textfield"
              style={{
                borderRadius: 8,
                backgroundColor: "#24243a",
                color: "#E1E1E6"
              }}
              placeholder="Busque por nome ou por dados de contato..."
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search style={{ color: "#E1E1E6" }} />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid size={9.5} mx={6}>
         <ListContacts 
            setPersonas={setPersonas}
            personas={personas}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
         />
        </Grid>
      </Grid>
    </Container>
  );
}
