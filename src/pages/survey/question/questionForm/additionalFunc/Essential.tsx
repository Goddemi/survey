import { FormControlLabel, Switch } from "@mui/material";

const Essential = () => {
  return (
    <FormControlLabel
      control={<Switch defaultChecked color="warning" />}
      label="필수"
    />
  );
};

export default Essential;
