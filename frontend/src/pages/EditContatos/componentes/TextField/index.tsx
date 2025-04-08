import { TextField, TextFieldProps } from "@mui/material";


export const WhiteTextField = (props: TextFieldProps) => (
    <TextField
      {...props}
      sx={{
        ...props.sx,
        input: { color: "white" },
        label: { color: "white" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "white" },
          "&:hover fieldset": { borderColor: "white" },
          "&.Mui-focused fieldset": { borderColor: "white" },
        },
      }}
    />
  );