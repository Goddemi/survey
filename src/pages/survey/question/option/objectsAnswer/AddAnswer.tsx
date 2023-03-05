import { Radio } from "@mui/material";

const AddAnswer = () => {
  return (
    <div className="flex items-center my-2">
      <Radio disabled />
      <input
        className="w-full p-2 focus:outline-none cursor-pointer disabled:bg-white"
        placeholder="옵션 추가"
        disabled
      />
    </div>
  );
};

export default AddAnswer;
