import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.scss'],
  imports: [IonText, IonButton, CommonModule],
  standalone: true
})
export class TrueFalseComponent implements OnInit {
  @Input() questions: { question: string; answer: boolean }[] = [];
  userAnswers: (boolean | null)[] = [];
  showResults = false;
  currentQuestionIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  selectAnswer(answer: boolean) {
    this.userAnswers[this.currentQuestionIndex] = answer;
  }

  submit() {
    this.showResults = true;
  }

  reset() {
    this.userAnswers = [];
    this.showResults = false;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.submit();
    }
  }
}
