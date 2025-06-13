import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonFooter, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-chapter',
  templateUrl: './video-chapter.component.html',
  styleUrls: ['./video-chapter.component.scss'],
  standalone: true,
  imports: [IonFabList, IonIcon, IonFabButton, IonFab, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonFooter, IonGrid, IonContent, IonTitle, IonButtons, IonToolbar, IonHeader, HeaderComponent, FooterComponent]
})
export class VideoChapterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToSpeedText() {
    this.route.navigate(['chapter/speed-text']);
  }
}
