import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import Option from "./option/Option";
import { OptionType } from "./option/type/OptionType";
const Question = () => {
  const options = ["단답형", "장문형", "객관식 질문", "체크박스", "드롭다운"];

  const [selectedOption, setSelectedOption] = useState<OptionType>("단답형");

  const optionHandler = (value: OptionType) => {
    setSelectedOption(value);
  };
  return (
    <div className="w-1/2 my-3 min-w-max p-5 bg-white rounded-lg ">
      <div className="flex justify-between">
        <div className="mr-3">
          <input
            className="w-[300px] py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
            placeholder="질문"
          />
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} />}
          autoComplete={true}
          onChange={(event, value) => {
            optionHandler(value);
          }}
        />
      </div>
      <Option selectedOption={selectedOption} />
    </div>
  );
};

export default Question;
