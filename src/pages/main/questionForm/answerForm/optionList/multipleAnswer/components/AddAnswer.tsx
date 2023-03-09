import { AddIcon } from "../../../../../../../icons/Icons";

const AddAnswer = ({ addAnswerToList }: { addAnswerToList: () => void }) => {
  const addAnswerHandler = () => {
    addAnswerToList();
  };

  return (
    <div className="flex items-center my-2" onClick={addAnswerHandler}>
      <AddIcon />
      <input
        className="w-full p-2 focus:outline-none cursor-pointer disabled:bg-white"
        placeholder="옵션 추가"
      />
    </div>
  );
};

export default AddAnswer;
