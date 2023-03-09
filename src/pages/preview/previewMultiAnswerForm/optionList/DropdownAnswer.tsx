import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { UpdateType, AnswerType } from "../../../../type/types";
interface Props {
  answerList: AnswerType[];
  questionUpdateHandler: UpdateType;
}

const DropdownAnswer = ({ answerList, questionUpdateHandler }: Props) => {
  const checkedAnswer = answerList.find((answer) => answer.checked);
  const checkedState = checkedAnswer ? checkedAnswer.content : "";

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;

    const newAnswerList = answerList.map((answer) =>
      answer.content === selectedValue
        ? { ...answer, checked: true }
        : { ...answer, checked: false }
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  return (
    <div className="mt-5 ml-3">
      <Box sx={{ minWidth: 200 }}>
        <InputLabel>Select an option</InputLabel>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={checkedState}
            onChange={handleChange}
          >
            {answerList.map((ele) => {
              const { id, content } = ele;
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
