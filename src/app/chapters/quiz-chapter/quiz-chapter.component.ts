import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonGrid, IonRow, IonCol, IonText, IonList, IonItem, ModalController, IonFab, IonFabButton, IonIcon } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../shared/header/header.component";
import { quizzes, QuizInterface } from '../../shared/models/quiz.model';
import { CommonModule } from '@angular/common';
import { AiChatComponent } from 'src/app/ai-chat/ai-chat.component';
import { FooterComponent } from "../../shared/footer/footer.component";
import { SuccessModalComponent } from '../../success-modal/success-modal.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz-chapter',
  templateUrl: './quiz-chapter.component.html',
  styleUrls: ['./quiz-chapter.component.scss'],
  standalone: true,
  imports: [IonIcon, IonFabButton, IonFab, IonText, IonCol, IonRow, IonButton, IonGrid, IonContent, HeaderComponent, CommonModule, FooterComponent, RouterModule, IonItem],
})
export class QuizChapterComponent implements OnInit {
  quizList: QuizInterface[] = quizzes;
  currentIndex = 0;
  selectedOption: string | null = null;
  showFeedback = false;
  feedbackMessage = '';
  quizCompleted = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  get currentQuiz(): QuizInterface {
    return this.quizList[this.currentIndex];
  }

  selectOption(option: string) {
    this.selectedOption = option;
    if (option === this.currentQuiz.answer) {
      this.showFeedback = false;
      this.nextQuestion();
    } else {
      this.feedbackMessage = 'Χμμ, Προσπαθησε ξανά';
      this.showFeedback = true;
    }
  }

  async nextQuestion() {
    this.selectedOption = null;
    this.showFeedback = false;
    if (this.currentIndex < this.quizList.length - 1) {
      this.currentIndex++;
    } else {
      this.quizCompleted = true;
      await this.showSuccessModal();
    }
  }

  async showSuccessModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      cssClass: 'success-modal',
      componentProps: {
        number: 80
      },
      backdropDismiss: false
    });
    await modal.present();
    setTimeout(() => {
      modal.dismiss();
    }, 3000);
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

  goBack() {
    // Go back to speed-text chapter
    window.history.length > 1
      ? window.history.back()
      : location.assign('/chapter/speed-text');
  }
}
