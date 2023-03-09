import { FormControlLabel, Switch } from "@mui/material";

const EssentialBtn = () => {
  return (
    <FormControlLabel
      control={<Switch defaultChecked color="warning" />}
      label="필수"
    />
  );
};

export default EssentialBtn;
