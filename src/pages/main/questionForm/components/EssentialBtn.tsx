import { FormControlLabel, Switch } from "@mui/material";
import { UpdateType } from "../../../../type/types";
interface Props {
  questionUpdateHandler: UpdateType;
}

const EssentialBtn = ({ questionUpdateHandler }: Props) => {
  const essentialHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const essentialState = event.target.checked;
    questionUpdateHandler({ essential: essentialState });
  };

  return (
    <FormControlLabel
      control={
        <Switch defaultChecked color="warning" onChange={essentialHandler} />
      }
      label="필수"
    />
  );
};

export default EssentialBtn;

//제출할 때, questionList를 받아와서, essential이 true인 애들을 고른다.
// 걔네들 중 short, long 은 textAnswer이 ""인 경우.
// 나머지는 multiAnswer값에 true가 없는 경우 return 해 버려서 submit이 안되게 한다.
