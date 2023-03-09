import LongAnswer from "./optionList/LongAnswer";
import MultipleAnswer from "./optionList/multipleAnswer/MultipleAnswer";
import ShortAnswer from "./optionList/ShortAnswer";
import { OptionType } from "./type/optionType";
import { UpdateType } from "../type/types";
import PreMultipleAnswer from "../../../preview/previewForm/PreviewMultiAnswer";

const AnswerForm = ({
  currentPath,
  questionUpdateHandler,
  selectedOption,
  questionId,
}: {
  currentPath: string;
  questionUpdateHandler: UpdateType;
  selectedOption: OptionType;
  questionId: string;
}) => {
  return (
    <div>
      {selectedOption === "short" && (
        <ShortAnswer questionUpdateHandler={questionUpdateHandler} />
      )}
      {selectedOption === "long" && (
        <LongAnswer questionUpdateHandler={questionUpdateHandler} />
      )}
      {(selectedOption === "multiple" ||
        selectedOption === "checkbox" ||
        selectedOption === "dropdown") &&
        (currentPath === "/" ? (
          <MultipleAnswer
            questionId={questionId}
            selectedOption={selectedOption}
            questionUpdateHandler={questionUpdateHandler}
          />
        ) : (
          <PreMultipleAnswer
            questionId={questionId}
            selectedOption={selectedOption}
            questionUpdateHandler={questionUpdateHandler}
          />
        ))}
    </div>
  );
};

export default AnswerForm;
