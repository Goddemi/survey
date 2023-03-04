import Addbar from "./addBar/Addbar";
import Header from "./header/Header";
import Question from "./question/Question";

const SurveyPage = () => {
  return (
    <form className="flex flex-col items-center">
      <Header />
      <Question />
      <Addbar />
    </form>
  );
};

export default SurveyPage;
