import { useSelector } from "react-redux";
import Addbar from "./components/Addbar";
import Header from "./components/Header";
import QuestionForm from "./questionForm/QuestionForm";
import LinkBtn from "../../components/LinkBtn";
import { RootState } from "../../store/store";
import { QuestionType } from "../../type/types";

const SurveyPage = () => {
  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );

  return (
    <form className="flex flex-col items-center ">
      <Header />
      <div className="relative">
        {questionList.map((question: QuestionType) => {
          return <QuestionForm key={question.id} data={question} />;
        })}
        <Addbar />
      </div>
      <LinkBtn to={"/preview"} />
    </form>
  );
};

export default SurveyPage;
