import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonIcon, IonCardContent, IonInput, IonFab, IonFabButton, ModalController } from "@ionic/angular/standalone";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AiChatComponent } from 'src/app/ai-chat/ai-chat.component';

@Component({
  selector: 'app-speed-text-chapter',
  templateUrl: './speed-text-chapter.component.html',
  styleUrls: ['./speed-text-chapter.component.scss'],
  imports: [IonFabButton, IonFab,
    IonCardContent, IonIcon, IonCard, IonButton, IonCol, IonRow, IonGrid, IonContent,
    FooterComponent, HeaderComponent, CommonModule, ReactiveFormsModule]
})
export class SpeedTextChapterComponent implements OnInit {

  paragraph: string = `Ο Ηρακλής ήταν ένας πολύ δυνατός ήρωας της αρχαίας Ελλάδας. Ζούσε σε μια εποχή που οι άνθρωποι φοβόντουσαν τη φύση και είχαν ανάγκη από γενναίους ήρωες να τους βοηθούν.

Ήταν γιος του θεού Δία και της Αλκμήνης, μιας βασιλοπούλας. Από μικρός έδειξε τη μεγάλη του δύναμη. Όταν ήταν μωρό, έπνιξε μόνος του δύο φίδια που έστειλε η θεά Ήρα, επειδή τον ζήλευε και δεν τον ήθελε.

Μεγαλώνοντας, ο Ηρακλής έγινε βασιλιάς στη Θήβα και παντρεύτηκε τη Μεγάρα. Όμως η Ήρα τον τρέλανε και εκείνος, χωρίς να το θέλει, έκανε κακό στην οικογένειά του. Μετάνιωσε και πήγε στο μαντείο των Δελφών για να ζητήσει βοήθεια. Εκεί του είπαν να πάει στις Μυκήνες και να υπηρετήσει για 12 χρόνια τον ξάδερφό του Ευρυσθέα. Αν το έκανε, θα γινόταν αθάνατος και θα ανέβαινε στον Όλυμπο.

Ο Ηρακλής ήταν πανύψηλος, πολύ δυνατός, ατρόμητος και καλόκαρδος. Βοηθούσε πάντα τους ανθρώπους και έμεινε στην ιστορία για τα μεγάλα κατορθώματά του.`;
  words: string[] = [];
  currentWordIndex: number = 0;
  currentWords: string = '';
  isPlaying: boolean = false;
  speechSynthesisUtterance: SpeechSynthesisUtterance | null = null;
  selectedVoice: SpeechSynthesisVoice | null = null;
  wordStartIndices: number[] = []; // Store the start index of each word
  sentences: string[] = [];
  sentenceStartIndices: number[] = [];
  currentSentenceIndex: number = 0;
  currentSentence: string = '';

  constructor(
    private router: Router,
    private modalController: ModalController,
    private cdr: ChangeDetectorRef // Add this
  ) { }

  ngOnInit() {
    this.words = this.paragraph.split(/\s+/);
    this.computeWordStartIndices();
    this.currentWordIndex = 0;
    this.currentWords = this.getCurrentWords();
    this.splitSentences();
    this.currentSentenceIndex = 0;
    this.currentSentence = this.sentences[0] || '';

    // Load voices and select a Greek voice if available
    window.speechSynthesis.onvoiceschanged = () => {
      this.setVoice();
    };
    this.setVoice();
  }

  computeWordStartIndices() {
    this.wordStartIndices = [];
    let regex = /\S+/g;
    let match;
    while ((match = regex.exec(this.paragraph)) !== null) {
      this.wordStartIndices.push(match.index);
    }
  }

  getCurrentWords(): string {
    return this.words.slice(this.currentWordIndex, this.currentWordIndex + 4).join(' ');
  }

  setVoice() {
    const voices = window.speechSynthesis.getVoices();
    // Try to find a Greek voice, fallback to default if not found
    this.selectedVoice = voices.find(v => v.lang.startsWith('el')) || voices[0] || null;
  }

  splitSentences() {
    // Split on . ! ; or ; or ; or ; (Greek and Latin), keeping the delimiter
    const regex = /[^.!?;;·]+[.!?;;·]+|[^.!?;;·]+$/g;
    this.sentences = [];
    this.sentenceStartIndices = [];
    let match;
    while ((match = regex.exec(this.paragraph)) !== null) {
      this.sentences.push(match[0].trim());
      this.sentenceStartIndices.push(match.index);
    }
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.currentSentenceIndex = 0;
    this.currentSentence = this.sentences[0] || '';
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
      this.speechSynthesisUtterance.rate = 0.8; // Slow down for sentence display
      this.speechSynthesisUtterance.volume = 0.6;
      if (this.selectedVoice) {
        this.speechSynthesisUtterance.voice = this.selectedVoice;
      }
      this.speechSynthesisUtterance.onend = () => this.stop();
      this.speechSynthesisUtterance.onboundary = (event: SpeechSynthesisEvent) => {
        if (!this.isPlaying) return;
        if (event.name === 'word') {
          // Find the sentence whose start index is closest to (but not greater than) charIndex
          let idx = 0;
          for (let i = 0; i < this.sentenceStartIndices.length; i++) {
            if (this.sentenceStartIndices[i] > event.charIndex) {
              break;
            }
            idx = i;
          }
          if (this.currentSentenceIndex !== idx) {
            this.currentSentenceIndex = idx;
            this.currentSentence = this.sentences[idx] || '';
            this.cdr.detectChanges();
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

    async openAiChatModal() {
      const modal = await this.modalController.create({
        component: AiChatComponent,
        cssClass: 'ai-chat-modal',
        componentProps: {
          aiPrompt: 'You are history teacher and you know everything about Hercules. You are answering questions based on Hercules only. You are not allowed to answer any other question. If the user asks something else, you should say "Λυπάμαι, δεν μπορώ να βοηθήσω με αυτό." Your aswers should be on Greek only. You speak simple and your targeting is for childrens with ADHD and Dyslexia. Your response should be on html format.',
        }
      });
      await modal.present();
    }
}
