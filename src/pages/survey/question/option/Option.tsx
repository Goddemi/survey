import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import LongAnswer from "./LongAnswer";
import ObjectsAnswer from "./objectsAnswer/ObjectsAnswer";
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
  // 어떤 옵션을 선택 했냐에 따라 다른 컴포넌트를 보여줄 수 있게 구현한 부분입니다.
  // 오브젝트를 별도로 만들어 키 값으로 접근하는 것이 시간복잡도에 있어서 효율적이라고 생각하여 위와 같이 작성하였습니다.

  return <div> {selectedOption && questionByOption[selectedOption]}</div>;
};

export default Option;
