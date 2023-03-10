import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { UpdateType, AnswerType } from "../../../../type/types";
interface Props {
  multiAnswerList: AnswerType[];
  questionUpdateHandler: UpdateType;
}

const DropdownAnswer = ({ multiAnswerList, questionUpdateHandler }: Props) => {
  const checkedAnswer = multiAnswerList.find((answer) => answer.checked);
  const checkedState = checkedAnswer ? checkedAnswer.content : "";

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;

    const newAnswerList = multiAnswerList.map((answer) =>
      answer.content === selectedValue
        ? { ...answer, checked: true }
        : { ...answer, checked: false }
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  return (
    <div className="mt-5 ml-3">
      <Box sx={{ minWidth: 200, maxWidth: 220 }}>
        <InputLabel>Select an option</InputLabel>
        <FormControl fullWidth>
          <Select value={checkedState} onChange={handleChange}>
            {multiAnswerList.map((ele) => {
              const { id, content } = ele;
              if (!content) return;
              return (
                <MenuItem key={id} value={content}>
                  {content}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DropdownAnswer;
