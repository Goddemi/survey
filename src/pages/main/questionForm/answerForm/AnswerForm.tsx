import TextAnswer from "./optionList/TextAnswer";
import MultipleAnswer from "./optionList/multipleAnswer/MultipleAnswer";
import PreMultipleAnswer from "../../../preview/previewMultiAnswerForm/PreviewMultiAnswer";
import { UpdateType, QuestionType, AnswerType } from "../../../../type/types";
import { useEffect, useState } from "react";

const AnswerForm = ({
  currentPath,
  data,
  questionUpdateHandler,
}: {
  currentPath: string;
  data: QuestionType;
  questionUpdateHandler: UpdateType;
}) => {
  const { option, essential, textAnswer, multiAnswer } = data;

  const textOption = ["short", "long"].includes(option);
  const multiOption = ["multiple", "checkbox", "dropdown"].includes(option);

  const [essentialChecker, setEssentialChecker] = useState(false);

  let checkedAnswer: AnswerType | undefined;
  if (multiOption) {
    checkedAnswer = multiAnswer.find((answer) => answer.checked === true);
  }

  useEffect(() => {
    if (textOption) {
      textAnswer ? setEssentialChecker(true) : setEssentialChecker(false);
    }
    if (multiOption) {
      checkedAnswer ? setEssentialChecker(true) : setEssentialChecker(false);
    }
  }, [textAnswer, checkedAnswer]);

  return (
    <>
      <div className="mt-2 text-sm text-red-500">
        {currentPath === "/preview" &&
          essential &&
          !essentialChecker &&
          "* 필수 입력 사항입니다."}
      </div>

      {textOption && (
        <TextAnswer
          currentPath={currentPath}
          option={option}
          questionUpdateHandler={questionUpdateHandler}
        />
      )}
      {multiOption &&
        (currentPath !== "/preview" ? (
          <MultipleAnswer
            option={option}
            multiAnswerList={multiAnswer}
            questionUpdateHandler={questionUpdateHandler}
          />
        ) : (
          <PreMultipleAnswer
            option={option}
            multiAnswerList={multiAnswer}
            questionUpdateHandler={questionUpdateHandler}
          />
        ))}
    </>
  );
};

export default AnswerForm;
