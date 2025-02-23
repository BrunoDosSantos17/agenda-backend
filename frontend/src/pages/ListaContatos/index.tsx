import {
  Box,
  Container,
  Grid2 as Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ButtonAction from "./components/ButtonAction";
import { Search } from "@mui/icons-material";

export function ListaContatos() {
  return (
    <Container>
      <Grid container spacing={2} minHeight={160}>
        <Grid size={6} mx={6} justifyContent="left" alignItems="left">
          <Typography variant="h4">Lista de Contatos</Typography>
        </Grid>
        <Grid size={4} mx={6}>
          <ButtonAction />
        </Grid>
        <Grid size={9.5} mx={5}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              fullWidth
              id="input-with-icon-textfield"
              style={{
                borderRadius: 8,
                backgroundColor: "#24243a",
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
      </Grid>
    </Container>
  );
}
