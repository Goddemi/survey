import { useSelector } from "react-redux";
import Addbar from "./addBar/Addbar";
import Header from "./header/Header";
import Question from "./question/Question";

import { RootState } from "../../store/store";

const SurveyPage = () => {
  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );

  return (
    <form className="flex flex-col items-center ">
      <Header />
      <div className="relative">
        {" "}
        {questionList.map(() => {
          return <Question />;
        })}
        <Addbar />
      </div>
    </form>
  );
};

export default SurveyPage;
