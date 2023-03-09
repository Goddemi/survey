import React from "react";
import { useSelector } from "react-redux";
import Header from "../\bmain/header/Header";
import QuestionForm from "../\bmain/question/QuestionForm";
import { RootState } from "../../store/store";
import { QuestionType } from "../\bmain/question/type/types";

const PreviewPage = () => {
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
      </div>
    </form>
  );
};

export default PreviewPage;
