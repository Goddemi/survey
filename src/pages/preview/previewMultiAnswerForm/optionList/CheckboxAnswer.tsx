import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect } from "react";
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
  const checkedState = multiAnswerList.filter(
    (answer) => answerId === answer.id
  )[0].checked;

  const handleCheck = () => {
    const newAnswerList = multiAnswerList.map((answer) =>
      answerId === answer.id ? { ...answer, checked: !checkedState } : answer
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  useEffect(() => {
    const initialAnswerList = multiAnswerList.map((answer) => {
      return { ...answer, checked: false };
    });
    questionUpdateHandler({ multiAnswer: initialAnswerList });
  }, []);

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
