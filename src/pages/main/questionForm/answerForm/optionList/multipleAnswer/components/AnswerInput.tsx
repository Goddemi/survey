import { useEffect } from "react";
import { UpdateType, AnswerType } from "../../../../../../../type/types";

interface Props {
  answerId: string;
  answerList: AnswerType[];
  answerRef: React.RefObject<HTMLInputElement>;
  questionUpdateHandler: UpdateType;
  addAnswerToList: () => void;
  answerContent: any;
}

const AnswerInput = ({
  answerId,
  answerList,
  answerRef,
  questionUpdateHandler,
  addAnswerToList,
  answerContent,
}: Props) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const newAnswerList = answerList.map((answer) =>
      answerId === answer.id ? { ...answer, content: inputValue } : answer
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!event.currentTarget.value.trim().length) {
        return;
      }
      if (!event.nativeEvent.isComposing) {
        addAnswerToList();
      }
    }
  };

  useEffect(() => {
    if (answerRef.current !== null) answerRef.current.focus();
  }, [answerRef]);

  return (
    <input
      className="w-[700px] p-2 focus:border-b-2 focus:outline-none"
      placeholder="답변 입력"
      onKeyDown={handleKeyPress}
      onChange={handleInput}
      value={answerContent}
      ref={answerRef}
    />
  );
};

export default AnswerInput;
