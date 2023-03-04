import Addbar from "./addBar/Addbar";
import Header from "./header/Header";

const SurveyPage = () => {
  return (
    <form className="flex flex-col items-center">
      <Header />
      <Addbar />
    </form>
  );
};

export default SurveyPage;
