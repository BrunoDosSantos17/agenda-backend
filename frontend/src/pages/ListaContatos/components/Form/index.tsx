import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Grid2 as Grid,
} from "@mui/material";
import { useFormContactsService } from "./hook/formContacts";
import { WhiteTextField } from "./componentes/TextField";

type FormContactsProps = {
  active: boolean;
  setActive: (value: boolean) => void;
};

export function FormContacts({ active, setActive }: FormContactsProps) {
  const {
    handleChange,
    handleSubmit,
    formData,
    fileInputRef,
    handleFileChange,
    handleUploadClick,
    avatar,
  } = useFormContactsService();

  return (
    <Dialog
      open={active}
      maxWidth={"sm"}
      style={{ backdropFilter: "blur(4px)" }}
    >
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

            <Grid size={5.25} mx={3}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
              >
                Salvar
              </Button>
            </Grid>
            <Grid size={5.25}>
              <Button 
              variant="contained" 
              fullWidth 
              color="error"
              onClick={() => setActive(false)}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Dialog>
  );
}
