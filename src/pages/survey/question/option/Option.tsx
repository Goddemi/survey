import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import LongAnswer from "./LongAnswer";
import ObjectsAnswer from "./ObjectsAnswer";
import ShortAnswer from "./ShortAnswer";
import { OptionType } from "./type/OptionType";

const Option = ({ selectedOption }: { selectedOption: OptionType }) => {
  interface QuestionByOptionType {
    [key: string]: React.ReactNode;
  }

  const questionByOption: QuestionByOptionType = {
    단답형: <ShortAnswer />,
    장문형: <LongAnswer />,
    객관식질문: <ObjectsAnswer />,
    체크박스: <Checkbox />,
    드롭다운: <Dropdown />,
  };

  //오브젝트의 키 값으로 접근하는 것이 시간복잡도에 있어서 효율적이라고 생각하여 위와 같이 작성하였습니다.

  return <div> {selectedOption && questionByOption[selectedOption]}</div>;
};

export default Option;
