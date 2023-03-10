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
  const { option, essential, textAnswer, multiAnswer, essentialValueChecker } =
    data;

  const textOption = ["short", "long"].includes(option);
  const multiOption = ["multiple", "checkbox", "dropdown"].includes(option);

  let checkedAnswer: AnswerType | undefined;
  if (multiOption) {
    // 체크되어있는 객관식 보기가 있는지 확인
    checkedAnswer = multiAnswer.find((answer) => answer.checked === true);
  }

  useEffect(() => {
    if (textOption) {
      textAnswer
        ? questionUpdateHandler({ essentialValueChecker: true })
        : questionUpdateHandler({ essentialValueChecker: false });
    }
    if (multiOption) {
      checkedAnswer
        ? questionUpdateHandler({ essentialValueChecker: true })
        : questionUpdateHandler({ essentialValueChecker: false });
    }
  }, [textAnswer, checkedAnswer]);

  return (
    <>
      <div className="mt-2 text-sm text-red-500">
        {currentPath === "/preview" &&
          essential &&
          !essentialValueChecker &&
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
