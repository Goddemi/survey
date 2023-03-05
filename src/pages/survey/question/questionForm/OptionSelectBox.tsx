import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { OptionType } from "../option/type/optionType";
import { SelectChangeEvent } from "@mui/material/Select";

interface PropsType {
  optionHandler: (value: SelectChangeEvent) => void;
  optionList: string[];
  selectedOption: OptionType;
}

const OptionSelectBox = (props: PropsType) => {
  const { optionHandler, optionList, selectedOption } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">형식</InputLabel>
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
  );
};

export default OptionSelectBox;
