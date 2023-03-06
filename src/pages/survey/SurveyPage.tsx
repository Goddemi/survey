import { useSelector } from "react-redux";
import Addbar from "./addBar/Addbar";
import Header from "./header/Header";
import Question from "./question/Question";

import { RootState } from "../../store/store";
import { QuestionType } from "./question/type/questionType";

const SurveyPage = () => {
  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );

  return (
    <form className="flex flex-col items-center ">
      <Header />
      <div className="relative">
        {" "}
        {questionList.map((ele: QuestionType) => {
          return <Question id={ele.id} />;
        })}
        <Addbar />
      </div>
    </form>
  );
};

export default SurveyPage;
