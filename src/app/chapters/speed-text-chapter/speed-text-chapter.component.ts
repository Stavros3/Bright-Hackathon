import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonIcon, IonCardContent, IonInput } from "@ionic/angular/standalone";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speed-text-chapter',
  templateUrl: './speed-text-chapter.component.html',
  styleUrls: ['./speed-text-chapter.component.scss'],
  imports: [
    IonInput, IonCardContent, IonIcon, IonCard, IonButton, IonCol, IonRow, IonGrid, IonContent,
    FooterComponent, HeaderComponent, CommonModule, ReactiveFormsModule
  ]
})
export class SpeedTextChapterComponent implements OnInit {

  paragraph: string = `Ο Ηρακλής ήταν ένας πολύ δυνατός ήρωας της αρχαίας Ελλάδας. Ζούσε σε μια εποχή που οι άνθρωποι φοβόντουσαν τη φύση και είχαν ανάγκη από γενναίους ήρωες να τους βοηθούν.

Ήταν γιος του θεού Δία και της Αλκμήνης, μιας βασιλοπούλας. Από μικρός έδειξε τη μεγάλη του δύναμη. Όταν ήταν μωρό, έπνιξε μόνος του δύο φίδια που έστειλε η θεά Ήρα, επειδή τον ζήλευε και δεν τον ήθελε.

Μεγαλώνοντας, ο Ηρακλής έγινε βασιλιάς στη Θήβα και παντρεύτηκε τη Μεγάρα. Όμως η Ήρα τον τρέλανε και εκείνος, χωρίς να το θέλει, έκανε κακό στην οικογένειά του. Μετάνιωσε και πήγε στο μαντείο των Δελφών για να ζητήσει βοήθεια. Εκεί του είπαν να πάει στις Μυκήνες και να υπηρετήσει για 12 χρόνια τον ξάδερφό του Ευρυσθέα. Αν το έκανε, θα γινόταν αθάνατος και θα ανέβαινε στον Όλυμπο.

Ο Ηρακλής ήταν πανύψηλος, πολύ δυνατός, ατρόμητος και καλόκαρδος. Βοηθούσε πάντα τους ανθρώπους και έμεινε στην ιστορία για τα μεγάλα κατορθώματά του.`;
  words: string[] = [];
  currentWordIndex: number = 0;
  currentWord: string = '';
  isPlaying: boolean = false;
  speechSynthesisUtterance: SpeechSynthesisUtterance | null = null;
  wordForm = new FormGroup({
    word: new FormControl({ value: '', disabled: false })
  });
  selectedVoice: SpeechSynthesisVoice | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.words = this.paragraph.split(/\s+/);
    this.currentWord = this.words[0] || '';
    this.wordForm.get('word')?.setValue(this.currentWord);

    // Load voices and select a Greek voice if available
    window.speechSynthesis.onvoiceschanged = () => {
      this.setVoice();
    };
    this.setVoice();
  }

  setVoice() {
    const voices = window.speechSynthesis.getVoices();
    // Try to find a Greek voice, fallback to default if not found
    this.selectedVoice = voices.find(v => v.lang.startsWith('el')) || voices[0] || null;
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.currentWordIndex = 0;
    this.currentWord = this.words[0] || '';
    this.wordForm.get('word')?.setValue(this.currentWord);
    this.speakParagraph();
  }

  stop() {
    this.isPlaying = false;
    if (this.speechSynthesisUtterance) {
      window.speechSynthesis.cancel();
      this.speechSynthesisUtterance = null;
    }
  }

  speakParagraph() {
    if ('speechSynthesis' in window) {
      this.speechSynthesisUtterance = new SpeechSynthesisUtterance(this.paragraph);
      this.speechSynthesisUtterance.lang = 'el-GR';
      this.speechSynthesisUtterance.rate = 1.1;
      this.speechSynthesisUtterance.volume = 0.6; // Set volume (0.0 to 1.0)
      if (this.selectedVoice) {
        this.speechSynthesisUtterance.voice = this.selectedVoice;
      }
      this.speechSynthesisUtterance.onend = () => this.stop();
      this.speechSynthesisUtterance.onboundary = (event: SpeechSynthesisEvent) => {
        if (!this.isPlaying) return;
        if (event.name === 'word') {
          const charIndex = event.charIndex;
          let acc = 0;
          for (let i = 0; i < this.words.length; i++) {
            acc += this.words[i].length + 1;
            if (charIndex < acc) {
              this.currentWordIndex = i;
              this.currentWord = this.words[i];
              this.wordForm.get('word')?.setValue(this.currentWord);
              break;
            }
          }
        }
      };
      window.speechSynthesis.speak(this.speechSynthesisUtterance);
    }
  }

  goToQuiz() {
    this.stop();
    this.router.navigate( ['chapter/quiz']);
  }
}
