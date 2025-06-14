/*
* Blue Stories is a collection of mystery stories based on real and specific historical events.
* The purpose is that the user can learn through that game
* The stories are designed to be engaging and educational, providing insights into historical events while challenging the player's critical thinking skills.
* The challenger will be the AI, which will answer only with Yes or No.
*/
/*
* Example: {
*   id: 1,
*   title: "Σχεδόν Άτροτος",
*   fullStory: "Ο Αχιλλέας ήταν ένας από τους πιο διάσημους ήρωες της ελληνικής μυθολογίας. Λέγεται ότι ήταν σχεδόν άτρωτος, εκτός από τη φτέρνα του. Πεθανε από ένα βέλος που τον χτύπησε στη φτέρνα, γεγονός που οδήγησε στη φράση 'Αχίλλειος πτέρνα', που σημαίνει αδύνατο σημείο.",
*   startingHint: ""
* }
*/
export interface BlueStoryInterface {
  id: number;
  title: string;
  fullStory: string;
  startingHint: string;
}


export const blueStories: BlueStoryInterface = 
  {
    id: 1,
    title: "Ενα μωρο γελαει",
    fullStory: "Οταν ο ηρακλης ηταν μωρο επνυξε 2 φιδια που του εστειλε η Ηρα επειδη ζηλευε την αγαπη του Δία για τον Ηρακλη.",
    startingHint: "Ειναι βραδυ. Ενα μωρο γελαει και καταλαβαινουν οτι δεν ειναι απο αυτον τον κοσμο"
  };

