import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonCard, IonIcon, IonCardContent } from "@ionic/angular/standalone";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-speed-text-chapter',
  templateUrl: './speed-text-chapter.component.html',
  styleUrls: ['./speed-text-chapter.component.scss'],
  imports: [IonCardContent, IonIcon, IonCard, IonButton, IonCol, IonRow, IonGrid, IonContent, FooterComponent, HeaderComponent],
})
export class SpeedTextChapterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
