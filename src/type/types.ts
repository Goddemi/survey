export type OptionType = string;

export interface QuestionType {
  id: string;
  option: string;
  questionName: string;
  textAnswer: string;
  multiAnswer: AnswerType[];
  essential: boolean;
}
export interface AnswerType {
  id: string;
  content: string;
  checked: boolean;
}

export interface UpdatedElementType {
  [key: string]: string | AnswerType[] | boolean;
}

export type UpdateType = (ele: UpdatedElementType) => void;
