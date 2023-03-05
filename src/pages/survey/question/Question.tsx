import { useState } from "react";
import Option from "./option/Option";
import AdditionalFunc from "./questionForm/\bAdditionalFunc";
import QuestionTitle from "./questionForm/QuestionTitle";
import OptionSelectBox from "./questionForm/OptionSelectBox";
import { OptionType } from "./option/type/optionType";
import { SelectChangeEvent } from "@mui/material/Select";

const Question = () => {
  const optionList = ["단답형", "장문형", "객관식질문", "체크박스", "드롭다운"];

  const [selectedOption, setSelectedOption] = useState<OptionType>("단답형");

  const optionHandler = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as OptionType);
  };

  return (
    <div className="w-1/2 my-3 min-w-max p-5 bg-white rounded-lg ">
      <div className="flex justify-between items-end">
        <QuestionTitle />
        <OptionSelectBox
          optionList={optionList}
          optionHandler={optionHandler}
          selectedOption={selectedOption}
        />
      </div>

      <Option selectedOption={selectedOption} />

      <AdditionalFunc />
    </div>
  );
};

export default Question;
