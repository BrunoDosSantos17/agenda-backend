import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import defaultAvatar from "../../../../assets/profile-user.svg";
import { listPessoas } from "../../../../services";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Contact } from "../../../../services/type";

interface Props {
  personas: Contact[];
  setPersonas: Dispatch<SetStateAction<Contact[]>>;
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
}

export default function ListContact({ personas, setPersonas, selectedId, setSelectedId }: Props ) {

  const colorMapRef = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    returnListPessoas();
  } );

  const returnListPessoas = async () => {
    const response = await listPessoas();
    setPersonas(response);
  };

  const getPastelColor = (): string => {
    const hue = Math.floor(Math.random() * 360); // 0 - 360
    const saturation = 70;
    const lightness = 80;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const renderedInitials = new Set<string>();

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
      {personas.sort((a, b) => a.name.localeCompare(b.name)).map((item) => {
        const initial = item.name.charAt(0).toUpperCase();
        const isFirstOccurrence = !renderedInitials.has(initial);

        if (isFirstOccurrence) {
          renderedInitials.add(initial);
        
          if (!colorMapRef.current.has(initial)) {
            colorMapRef.current.set(initial, getPastelColor());
          }
        }

        const avatarColor = colorMapRef.current.get(initial)!;

        return (
          <ListItemButton
            key={item.id}
            selected={selectedId === item.id}
            onClick={() => setSelectedId(item.id)}
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: selectedId === item.id ? "#3f3f5e" : "transparent",
              "&:hover": {
                bgcolor: "#4b4b6b",
              },
              color: "inherit",
            }}
          >
            <Box
              sx={{
                width: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isFirstOccurrence ? (
                <Avatar
                  sx={{
                    backgroundColor: avatarColor,
                  }}
                  variant="rounded"
                >
                  <Typography variant="h5">{initial}</Typography>
                </Avatar>
              ) : (
                <Box sx={{ width: 40, height: 40 }} />
              )}
            </Box>

            <ListItemAvatar>
              <Avatar alt={item.name} src={defaultAvatar} />
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography sx={{ color: "#FFFFFF" }}>
                  {item.name} {item.middleName} {item.lastName}
                </Typography>
              }
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
