import { AnswerType } from "./../option/type/answerType";
export interface QuestionType {
  id: string;
  option: string;
  questionName: string;
  textAnswer: string;
  multiAnswer: string[] | any;
}
export interface ModifiedAnswerType {
  [key: string]: string | AnswerType[];
}
