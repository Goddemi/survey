import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { OptionType } from "../option/type/optionType";
import { SelectChangeEvent } from "@mui/material/Select";

interface PropsType {
  currentPath: string;
  questionUpdateHandler: any;
  selectedOption: OptionType;
}

const OptionSelectBox = (props: PropsType) => {
  const { currentPath, questionUpdateHandler, selectedOption } = props;
  const optionList = ["short", "long", "multiple", "checkbox", "dropdown"];

  const optionHandler = (event: SelectChangeEvent) => {
    const newOption = event.target.value as OptionType;
    questionUpdateHandler({ option: newOption });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {currentPath === "/preview" ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            disabled
          >
            {optionList.map((ele) => {
              return (
                <MenuItem value={ele} key={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
        ) : (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            onChange={optionHandler}
          >
            {optionList.map((ele) => {
              return (
                <MenuItem value={ele} key={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </FormControl>
    </Box>
  );
};

export default OptionSelectBox;
