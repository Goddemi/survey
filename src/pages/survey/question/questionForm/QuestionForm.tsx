import { Autocomplete, TextField } from "@mui/material";
import { OptionType } from "../option/type/OptionType";

interface PropsType {
  children: React.ReactNode;
  optionHandler: (value: OptionType) => void;
  optionList: string[];
}

const QuestionForm = (props: PropsType) => {
  const { optionHandler, optionList } = props;

  return (
    <div>
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
          options={optionList}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} />}
          autoComplete={true}
          onChange={(event, value) => {
            optionHandler(value);
          }}
        />
      </div>
      {props.children}
    </div>
  );
};

export default QuestionForm;
