import { useSelector } from "react-redux";
import Header from "../main/components/Header";
import QuestionForm from "../main/questionForm/QuestionForm";
import LinkBtn from "../../components/LinkBtn";
import { RootState } from "../../store/store";
import { QuestionType } from "../../type/types";

const PreviewPage = () => {
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
      </div>
      <LinkBtn to={"/preview/submit"} />
    </form>
  );
};

export default PreviewPage;
