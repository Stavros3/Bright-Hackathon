import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonFooter, IonRow, IonCol } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-video-chapter',
  templateUrl: './video-chapter.component.html',
  styleUrls: ['./video-chapter.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonFooter, IonGrid, IonContent, IonTitle, IonButtons, IonToolbar, IonHeader, HeaderComponent, FooterComponent]
})
export class VideoChapterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
