export type OptionType = string;

export interface QuestionType {
  id: string;
  option: string;
  questionName: string;
  textAnswer: string;
  multiAnswer: string[] | any;
}
export interface AnswerType {
  id: string;
  content: string;
  checked: boolean;
}

export interface UpdatedElementType {
  [key: string]: string | AnswerType[];
}

export type UpdateType = (ele: UpdatedElementType) => void;
