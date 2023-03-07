export interface AnswerType {
  id: string;
  content: string;
}
export interface SetAnswerType {
  setAnswerList: React.Dispatch<React.SetStateAction<AnswerType[]>>;
}
