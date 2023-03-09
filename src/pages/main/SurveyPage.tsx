import { useSelector } from "react-redux";
import Addbar from "./components/Addbar";
import Header from "./components/Header";
import QuestionForm from "./questionForm/QuestionForm";
import GoToPreviewBtn from "./components/GoToPreviewBtn";
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
        {questionList.map((ele: QuestionType) => {
          return <QuestionForm key={ele.id} id={ele.id} data={ele} />;
        })}
        <Addbar />
      </div>
      <GoToPreviewBtn />
    </form>
  );
};

export default SurveyPage;
