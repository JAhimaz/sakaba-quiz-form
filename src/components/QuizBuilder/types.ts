export type QuizExport = {
  title: string;
  quizzes: QuizItem[];
}

export type QuizItem = {
  id: string;
  q: string;
  choices: string[];
  answer: number;
}