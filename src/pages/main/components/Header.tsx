import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../store/store";
import {
  setSurveyDescription,
  setSurveyTitle,
} from "../../../store/surveyHeader/surveyHeader";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useDispatch();
  const headerData = useSelector((state: RootState) => state.surveyHeader);
  const { title, description } = headerData;

  const surveyTitleHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSurveyTitle(event.target.value));
  };

  const surveyDescriptionHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSurveyDescription(event.target.value));
  };
  return (
    <div className="w-[900px] min-w-max my-5 bg-white rounded-lg ">
      <div className="bg-orange-500 rounded-t-lg h-2"></div>
      <div className="p-6">
        <input
          className="w-full py-2 text-3xl border-b border-gray-300 focus:outline-none focus:border-orange-500"
          placeholder="제목 없는 설문지"
          value={title}
          disabled={currentPath !== "/preview" ? false : true}
          onChange={surveyTitleHander}
        />
        <input
          className="w-full my-5 py-1 border-b border-gray-300 focus:outline-none focus:border-orange-500"
          placeholder="설문지 설명"
          value={description}
          disabled={currentPath !== "/preview" ? false : true}
          onChange={surveyDescriptionHandler}
        />
      </div>
    </div>
  );
};

export default Header;
