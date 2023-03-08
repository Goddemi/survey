import LongAnswer from "./optionList/LongAnswer";
import MultipleAnswer from "./optionList/multipleAnswer/MultipleAnswer";
import ShortAnswer from "./optionList/ShortAnswer";
import { OptionType } from "./type/optionType";
import { UpdateType } from "../type/types";

const AnswerForm = ({
  questionUpdateHandler,
  selectedOption,
  questionId,
}: {
  questionUpdateHandler: UpdateType;
  selectedOption: OptionType;
  questionId: string;
}) => {
  return (
    <div>
      {" "}
      {selectedOption === "short" && (
        <ShortAnswer questionUpdateHandler={questionUpdateHandler} />
      )}
      {selectedOption === "long" && (
        <LongAnswer questionUpdateHandler={questionUpdateHandler} />
      )}
      {(selectedOption === "multiple" ||
        selectedOption === "checkbox" ||
        selectedOption === "dropdown") && (
        <MultipleAnswer
          questionId={questionId}
          selectedOption={selectedOption}
          questionUpdateHandler={questionUpdateHandler}
        />
      )}
    </div>
  );
};

export default AnswerForm;
