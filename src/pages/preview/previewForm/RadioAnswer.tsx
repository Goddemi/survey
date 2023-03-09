import { Checkbox, FormControlLabel } from "@mui/material";
import { UpdateType } from "../../\bmain/question/type/types";
import { AnswerType } from "../../\bmain/question/option/type/answerType";

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
          control={<Checkbox checked={checkedState} onChange={handleCheck} />}
        />
      </div>
    </>
  );
};

export default RadioAnswer;
