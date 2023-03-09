import { Checkbox, FormControlLabel } from "@mui/material";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { UpdateType, AnswerType } from "../../../../type/types";
interface Props {
  answerId: string;
  answerContent: any;
  answerList: AnswerType[];
  questionUpdateHandler: UpdateType;
}

const RadioAnswer = ({
  answerId,
  answerContent,
  answerList,
  questionUpdateHandler,
}: Props) => {
  const checkedState =
    answerList.filter((answer) => answerId === answer.id)[0].checked || false;

  const handleCheck = () => {
    const newAnswerList = answerList.map((answer) =>
      answerId === answer.id
        ? { ...answer, checked: true }
        : { ...answer, checked: false }
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  return (
    <>
      <div className="flex items-center">
        <FormControlLabel
          label={answerContent}
          control={
            <Checkbox
              checked={checkedState}
              onChange={handleCheck}
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
            />
          }
        />
      </div>
    </>
  );
};

export default RadioAnswer;
