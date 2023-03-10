import { Checkbox, FormControlLabel } from "@mui/material";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { UpdateType, AnswerType } from "../../../../type/types";
import { useEffect } from "react";
interface Props {
  answerId: string;
  answerContent: any;
  multiAnswerList: AnswerType[];
  questionUpdateHandler: UpdateType;
}

const RadioAnswer = ({
  answerId,
  answerContent,
  multiAnswerList,
  questionUpdateHandler,
}: Props) => {
  const checkedState =
    multiAnswerList.filter((answer) => answerId === answer.id)[0].checked ||
    false;

  const handleCheck = () => {
    const newAnswerList = multiAnswerList.map((answer) =>
      answerId === answer.id
        ? { ...answer, checked: true }
        : { ...answer, checked: false }
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
      )}
    </>
  );
};

export default RadioAnswer;
