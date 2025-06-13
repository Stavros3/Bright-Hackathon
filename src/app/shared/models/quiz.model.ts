//ηρακλης

export interface QuizInterface {
  id: number;
  question: string;
  options: string[];
  answer: string;
}
export const quizzes: QuizInterface[] = [
  {
    id: 1,
    question: "Ποιος ήταν ο πατέρας του Ηρακλή;",
    options: ["Δίας", "Ποσειδώνας", "Άρης", "Ερμής"],
    answer: "Δίας"
  },
  {
    id: 2,
    question: "Πόσα άθλα έπρεπε να ολοκληρώσει ο Ηρακλής;",
    options: ["10", "12", "8", "15"],
    answer: "12"
  },
  {
    id: 3,
    question: "Ποια ήταν η πρώτη αποστολή του Ηρακλή;",
    options: ["Να σκοτώσει τον Λέοντα της Νεμέας", "Να πιάσει τον Κάπρο της Ερυμάνθου", "Να καθαρίσει τους Σταύλους του Αυγεία", "Να φέρει τα Χρυσά Μήλα των Εσπερίδων"],
    answer: "Να σκοτώσει τον Λέοντα της Νεμέας"
  }
];
