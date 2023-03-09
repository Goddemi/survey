import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { UpdateType } from "../../\bmain/question/type/types";
import { AnswerType } from "../../\bmain/question/option/type/answerType";

interface Props {
  answerId: string;
  answerList: AnswerType[];
  selectedOption: string;
  questionUpdateHandler: UpdateType;
  answerContent: any;
}

const PreAnswer = ({
  answerId,
  answerList,
  selectedOption,
  questionUpdateHandler,
  answerContent,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const checkedState = answerList.filter((answer) => answerId === answer.id)[0];
  console.log("check", checkedState);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("check", checkedState);
    setChecked(event.target.checked);

    const newAnswerList = answerList.map((answer) =>
      answerId === answer.id ? { ...answer, checked } : answer
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  return (
    <>
      {answerContent !== "" && (
        <div className="flex items-center">
          {selectedOption === "checkbox" && (
            <FormControlLabel
              label={answerContent}
              control={<Checkbox checked={checked} onChange={handleCheck} />}
            />
          )}
          {selectedOption === "dropdown" && <span>-</span>}
        </div>
      )}
    </>
  );
};

export default PreAnswer;

// const checkedElement = event.target.labels[0].innerText;

// setCheckedItems((state) => {
//   if (state.includes(checkedElement)) {
//     const newCheckedItem = state.filter((item) => item !== checkedElement);
//     return newCheckedItem;
//   } else {
//     return [...state, checkedElement];
//   }
// });

// const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setInputValue(event.target.value);
//   const newAnswerList = answerList.map((answer) =>
//     answerId === answer.id ? { ...answer, content: inputValue } : answer
//   );
//   questionUpdateHandler({ multiAnswer: newAnswerList });
// };
