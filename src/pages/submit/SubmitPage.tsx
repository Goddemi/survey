import { useSelector } from "react-redux";
import Header from "../main/components/Header";
import SubmitForm from "./SubmitForm";
import { RootState } from "../../store/store";
import { QuestionType } from "../../type/types";

const SubmitPage = () => {
  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="relative">
        {questionList.map((question: QuestionType) => {
          return <SubmitForm key={question.id} data={question} />;
        })}
      </div>
    </div>
  );
};

export default SubmitPage;
