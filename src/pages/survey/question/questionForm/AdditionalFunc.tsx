import { FormControlLabel, Switch } from "@mui/material";
import { CopyIcon, DeleteIcon } from "../../../../icons/Icons";

const AdditionalFunc = () => {
  return (
    <div className="w-full flex justify-end items-center border-t-2 border-solid border-gray-200 mt-10 pt-3">
      <div className="cursor-pointer">
        <CopyIcon />
      </div>
      <div className="mx-4 cursor-pointer">
        {" "}
        <DeleteIcon />
      </div>
      <FormControlLabel
        control={<Switch defaultChecked color="warning" />}
        label="필수"
      />
    </div>
  );
};

export default AdditionalFunc;
