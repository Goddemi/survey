import ShortAnswer from "./ShortAnswer";
import { OptionType } from "./type/OptionType";

const Option = ({ selectedOption }: { selectedOption: OptionType }) => {
  return (
    <div>
      <ShortAnswer />
    </div>
  );
};

export default Option;
