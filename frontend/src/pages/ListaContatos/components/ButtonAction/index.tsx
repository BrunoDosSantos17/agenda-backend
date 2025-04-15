import { Add, Delete, Edit } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

interface Props {
  handleClick: () => void;
}

export default function ButtonAction({handleClick}: Props) {
  return (
    <Box
      sx={{ "& > :not(style)": { m: 1 } }}
      justifyContent="right"
      alignItems="right"
    >
      <Button variant="text"
        onClick={handleClick}
      >
        <Add style={{ color: "E1E1E6" }} />
      </Button>
      <Button variant="text">
        <Edit style={{ color: "E1E1E6" }} />
      </Button>
      <Button variant="text">
        <Delete style={{ color: "E1E1E6" }} />
      </Button>
    </Box>
  );
}
