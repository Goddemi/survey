import { useState } from "react";
import Option from "./option/Option";
import AdditionalFunc from "./questionForm/\bAdditionalFunc";
import QuestionName from "./questionForm/QuestionName";
import OptionSelectBox from "./questionForm/OptionSelectBox";
import { OptionType } from "./option/type/optionType";
import { SelectChangeEvent } from "@mui/material/Select";

const Question = ({ id }: { id: string }) => {
  const optionList = ["short", "long", "multiple", "checkbox", "dropdown"];

  const [selectedOption, setSelectedOption] = useState<OptionType>("short");

  const optionHandler = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as OptionType);
  };

  return (
    <div className="w-1/2 my-3 min-w-max p-5 bg-white rounded-lg ">
      <div className="flex justify-between items-end">
        <QuestionName />
        <OptionSelectBox
          optionList={optionList}
          optionHandler={optionHandler}
          selectedOption={selectedOption}
        />
      </div>

      <Option selectedOption={selectedOption} />

      <AdditionalFunc id={id} />
    </div>
  );
};

export default Question;
