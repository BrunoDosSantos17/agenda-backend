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
import { FormContacts } from "./components/Form";


export function ListaContatos() {

  const [personas, setPersonas] = useState<Contact[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  

  return (
    <Container>
      <Grid container spacing={2} minHeight={160}>
        <Grid size={6} mx={6} justifyContent="left" alignItems="left">
          <Typography variant="h4">Lista de Contatos</Typography>
        </Grid>
        <Grid size={4} mx={6}>
          <ButtonAction 
            handleClick={() => setDialogOpen(true)}
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
          <FormContacts active={dialogOpen} />
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
