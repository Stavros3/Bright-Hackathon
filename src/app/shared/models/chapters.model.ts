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
    title: "1. Η ΔΗΜΙΟΥΡΓΙΑ ΤΟΥ ΚΟΣΜΟΥ",
    number: 1
  },
  { title: "2. Ο ΗΡΑΚΛΗΣ", clickable: true, number: 2 },
  { title: "3. Ο ΘΗΣΕΑΣ", number: 3 },
  { title: "4. Η ΑΡΓΟΝΑΥΤΙΚΗ ΕΚΣΤΡΑΤΕΙΑ", number: 4 },
  { title: "5. Ο ΤΡΩΙΚΟΣ ΠΟΛΕΜΟΣ", number: 5 },
  { title: "6. ΟΙ ΠΕΡΙΠΕΤΕΙΕΣ ΤΟΥ ΟΔΥΣΣΕΑ", number: 6 },
  {
    header: "Προ-ιστορία",
    title: "7. Η ΕΠΟΧΗ ΤΟΥ ΛΙΘΟΥ",
    number: 7
  },
  { title: "8. Ο ΚΥΚΛΑΔΙΚΟΣ ΠΟΛΙΤΙΣΜΟΣ", number: 8 },
  { title: "9. Ο ΜΙΝΩΙΚΟΣ ΠΟΛΙΤΙΣΜΟΣ", number: 9 },
  { title: "10. Ο ΜΥΚΗΝΑΪΚΟΣ ΠΟΛΙΤΙΣΜΟΣ", number: 10 },
  /* {
    header: "Γλωσσάριο",
    title: "ΓΛΩΣΣΑΡΙΟ"
  } */
];

