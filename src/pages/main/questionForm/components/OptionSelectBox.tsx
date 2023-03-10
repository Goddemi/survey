import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { OptionType } from "../../../../type/types";

interface PropsType {
  currentPath: string;
  selectedOption: OptionType;
  questionUpdateHandler: any;
}

const OptionSelectBox = (props: PropsType) => {
  const { currentPath, selectedOption, questionUpdateHandler } = props;
  const optionList = ["short", "long", "multiple", "checkbox", "dropdown"];

  const optionHandler = (event: SelectChangeEvent) => {
    const newOption = event.target.value as OptionType;
    questionUpdateHandler({ option: newOption });
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            disabled={currentPath !== "/preview" ? false : true}
            onChange={optionHandler}
          >
            {optionList.map((option) => {
              return (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default OptionSelectBox;
