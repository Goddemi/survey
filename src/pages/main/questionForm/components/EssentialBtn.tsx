import { FormControlLabel, Switch } from "@mui/material";
import { UpdateType } from "../../../../type/types";
interface Props {
  essential: boolean;
  questionUpdateHandler: UpdateType;
}

const EssentialBtn = ({ essential, questionUpdateHandler }: Props) => {
  const essentialHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const essentialState = event.target.checked;
    questionUpdateHandler({ essential: essentialState });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          color="warning"
          onChange={essentialHandler}
          checked={essential}
        />
      }
      label="필수"
    />
  );
};

export default EssentialBtn;
