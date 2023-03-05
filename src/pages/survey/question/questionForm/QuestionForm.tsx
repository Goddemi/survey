import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";

import { OptionType } from "../option/type/OptionType";
import { SelectChangeEvent } from "@mui/material/Select";
import { CopyIcon, DeleteIcon } from "../../../../icons/Icons";

interface PropsType {
  children: React.ReactNode;
  optionHandler: (value: SelectChangeEvent) => void;
  optionList: string[];
  selectedOption: OptionType;
}

const QuestionForm = (props: PropsType) => {
  const { optionHandler, optionList, selectedOption } = props;

  return (
    <div>
      <div className="flex justify-between">
        <div className="mr-3">
          <input
            className="w-[500px] py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
            placeholder="질문"
          />
        </div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedOption}
              label="Age"
              onChange={optionHandler}
            >
              {optionList.map((ele) => {
                return <MenuItem value={ele}>{ele}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
      {props.children}
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
    </div>
  );
};

export default QuestionForm;
