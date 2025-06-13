import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonGrid, IonRow, IonCol, IonText, IonList, IonItem } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../shared/header/header.component";
import { quizzes, QuizInterface } from '../../shared/models/quiz.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-chapter',
  templateUrl: './quiz-chapter.component.html',
  styleUrls: ['./quiz-chapter.component.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonText, IonCol, IonRow, IonButton, IonGrid, IonContent, HeaderComponent, CommonModule],
})
export class QuizChapterComponent implements OnInit {
  quizList: QuizInterface[] = quizzes;
  currentIndex = 0;
  selectedOption: string | null = null;
  showFeedback = false;
  feedbackMessage = '';
  quizCompleted = false;

  constructor() { }

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

  nextQuestion() {
    this.selectedOption = null;
    this.showFeedback = false;
    if (this.currentIndex < this.quizList.length - 1) {
      this.currentIndex++;
    } else {
      this.quizCompleted = true;
    }
  }
}
