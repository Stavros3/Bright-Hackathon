import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonItem, IonHeader, IonLabel, IonList, IonContent, IonTitle, IonToolbar, IonButtons, IonButton, IonListHeader } from "@ionic/angular/standalone";
import { ChapterInterface, chapters as sharedChapters } from '../shared/models/chapters.model';

@Component({
  selector: 'app-chapter-modal',
  templateUrl: './chapter-modal.component.html',
  styleUrls: ['./chapter-modal.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonButton, IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonHeader, IonItem, CommonModule ], // Add any necessary imports here, such as Ionic components
  providers: [ModalController]
})
export class ChapterModalComponent implements OnInit {

  chapters = sharedChapters;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async onDismiss() {
    await this.modalCtrl.dismiss();
  }

  selectChapter(chapter: ChapterInterface) {
    console.log('Selected chapter:', chapter.title);
  }
}
