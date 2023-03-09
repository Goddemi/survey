import { useSelector } from "react-redux";
import Addbar from "./addBar/Addbar";
import Header from "./header/Header";
import QuestionForm from "./question/QuestionForm";
import { RootState } from "../../store/store";
import { QuestionType } from "./question/type/types";
import GoToPreview from "./goToPreview/goToPreview";

const SurveyPage = () => {
  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );

  return (
    <form className="flex flex-col items-center ">
      <Header />
      <div className="relative">
        {questionList.map((ele: QuestionType) => {
          return <QuestionForm id={ele.id} data={ele} />;
        })}
        <Addbar />
      </div>
      <GoToPreview />
    </form>
  );
};

export default SurveyPage;
