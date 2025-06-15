export interface ChapterInterface {
  header?: string;
  title?: string;
  clickable?: boolean;
  number?: number;
};


export const chapters: ChapterInterface[] = [
  {
    header: "Ιστορία Γ' Δημοτικού",
    title: "ΕΙΣΑΓΩΓΗ"
  },
  {
    header: "Η μυθολογία",
    title: "Η ΔΗΜΙΟΥΡΓΙΑ ΤΟΥ ΚΟΣΜΟΥ",
    number: 1
  },
  { title: "Ο ΗΡΑΚΛΗΣ", clickable: true, number: 2 },
  { title: "Ο ΘΗΣΕΑΣ", number: 3 },
  { title: "Η ΑΡΓΟΝΑΥΤΙΚΗ ΕΚΣΤΡΑΤΕΙΑ", number: 4 },
  { title: "Ο ΤΡΩΙΚΟΣ ΠΟΛΕΜΟΣ", number: 5 },
  { title: "ΟΙ ΠΕΡΙΠΕΤΕΙΕΣ ΤΟΥ ΟΔΥΣΣΕΑ", number: 6 },
  {
    header: "Προ-ιστορία",
    title: "Η ΕΠΟΧΗ ΤΟΥ ΛΙΘΟΥ",
    number: 7
  },
  { title: "Ο ΚΥΚΛΑΔΙΚΟΣ ΠΟΛΙΤΙΣΜΟΣ", number: 8 },
  { title: "Ο ΜΙΝΩΙΚΟΣ ΠΟΛΙΤΙΣΜΟΣ", number: 9 },
  { title: "Ο ΜΥΚΗΝΑΪΚΟΣ ΠΟΛΙΤΙΣΜΟΣ", number: 10 },
  /* {
    header: "Γλωσσάριο",
    title: "ΓΛΩΣΣΑΡΙΟ"
  } */
];

