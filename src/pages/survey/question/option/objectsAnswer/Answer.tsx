import { Radio } from "@mui/material";
import { useState } from "react";
import { XIcon } from "../../../../../icons/Icons";

const Answer = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="flex items-center my-2">
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <input
        className="w-full p-2 focus:border-b-2 focus:outline-none"
        placeholder="옵션 입력"
      />
      <span className="mx-2">
        <XIcon />
      </span>
    </div>
  );
};

export default Answer;
