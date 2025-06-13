import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-quiz-chapter',
  templateUrl: './quiz-chapter.component.html',
  styleUrls: ['./quiz-chapter.component.scss'],
  imports: [IonCol, IonRow, IonButton, IonGrid, IonContent, HeaderComponent],
})
export class QuizChapterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
