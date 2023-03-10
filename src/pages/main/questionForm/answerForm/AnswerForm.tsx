import TextAnswer from "./optionList/TextAnswer";
import MultipleAnswer from "./optionList/multipleAnswer/MultipleAnswer";
import PreMultipleAnswer from "../../../preview/previewMultiAnswerForm/PreviewMultiAnswer";
import { UpdateType, QuestionType } from "../../../../type/types";
import { useState } from "react";

const AnswerForm = ({
  currentPath,
  data,
  questionUpdateHandler,
}: {
  currentPath: string;
  data: QuestionType;
  questionUpdateHandler: UpdateType;
}) => {
  const { id, option, essential, multiAnswer } = data;
  console.log(essential);
  const [essentialSatisfied, setEssentialSatisFied] = useState(false);

  //content가 없다면, 필수입력입니다. 다 false이면,

  return (
    <>
      <div className="mt-2 text-sm text-red-500">
        {essential && !essentialSatisfied && "* 필수 입력 사항입니다."}
      </div>

      {(option === "short" || option === "long") && (
        <TextAnswer
          currentPath={currentPath}
          option={option}
          questionUpdateHandler={questionUpdateHandler}
          setEssentialSatisFied={setEssentialSatisFied}
        />
      )}
      {(option === "multiple" ||
        option === "checkbox" ||
        option === "dropdown") &&
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
