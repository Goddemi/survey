import { Checkbox, FormControlLabel } from "@mui/material";
import { UpdateType, AnswerType } from "../../../../type/types";

interface Props {
  answerId: string;
  answerContent: any;
  multiAnswerList: AnswerType[];
  questionUpdateHandler: UpdateType;
}

const CheckBoxAnswer = ({
  answerId,
  answerContent,
  multiAnswerList,
  questionUpdateHandler,
}: Props) => {
  const checkedState =
    multiAnswerList.filter((answer) => answerId === answer.id)[0].checked ||
    false;

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswerList = multiAnswerList.map((answer) =>
      answerId === answer.id ? { ...answer, checked: !checkedState } : answer
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  return (
    <>
      {answerContent && (
        <div className="flex items-center">
          <FormControlLabel
            label={answerContent}
            control={<Checkbox checked={checkedState} onChange={handleCheck} />}
          />
        </div>
      )}
    </>
  );
};

export default CheckBoxAnswer;
