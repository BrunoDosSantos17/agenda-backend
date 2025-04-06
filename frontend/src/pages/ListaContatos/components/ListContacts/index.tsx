import {
    Avatar,
    Box,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import defaultAvatar from "../../../../assets/profile-user.svg"
import {listPessoas } from '../../../../services'
import { useEffect, useState } from "react";
import { Contacts } from "../../../../services/type";
    
  export default function ListContacts() {
    const [personas, setPersonas] = useState<Contacts[]>([]);

    const returnListPessoas = async () => {
      const response = await listPessoas()
      setPersonas(response)
    }

    useEffect(() => {
      returnListPessoas()
    }, [])

    const renderedInitials = new Set();
  
    return (
      <List
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 710,
          backgroundColor: "#24243a",
        }}
        subheader={<li />}
      >
        {personas.map((item) => {
          const initial = item.name.charAt(0).toUpperCase();
          const isFirstOccurrence = !renderedInitials.has(initial);
  
          if (isFirstOccurrence) {
            renderedInitials.add(initial);
          }
  
          return (
            <ListItemButton key={item.id} sx={{ display: "flex", alignItems: "center" }}>
              {/* Avatar do agrupador ou espaço vazio para alinhamento */}
              <Box
                sx={{
                  width: 60, // Define uma largura fixa para manter alinhamento
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isFirstOccurrence ? (
                  <Avatar
                    sx={{
                      backgroundColor: `#${Math.floor(
                        Math.random() * 16777215
                      ).toString(16)}`,
                    }}
                    variant="rounded"
                  >
                    <Typography variant="h5">{initial}</Typography>
                  </Avatar>
                ) : (
                  <Box sx={{ width: 40, height: 40 }} /> // Espaço vazio do tamanho do Avatar
                )}
              </Box>
  
              {/* Avatar do contato */}
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={defaultAvatar}
                />
              </ListItemAvatar>
  
              {/* Nome e telefone */}
              <ListItemText
                primary={item.name}
                secondary={
                  <Typography variant="body2" sx={{ color: "#E1E1E6" }}>
                    {item.phone}
                  </Typography>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    );
  }
  