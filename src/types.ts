export interface ArticleData {
  name: string;
  title: string;
  sections: Section[];
}
export interface TextData {
  name: string;
  text: string;
}
interface Section {
  name: string;
  paragraphs: string[];
}
