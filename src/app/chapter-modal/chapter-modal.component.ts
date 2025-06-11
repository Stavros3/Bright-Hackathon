import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonItem, IonHeader, IonLabel, IonList, IonContent, IonTitle, IonToolbar, IonButtons, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-chapter-modal',
  templateUrl: './chapter-modal.component.html',
  styleUrls: ['./chapter-modal.component.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonHeader, IonItem, CommonModule ], // Add any necessary imports here, such as Ionic components
  providers: [ModalController]
})
export class ChapterModalComponent implements OnInit {

  chapters = [
    { title: 'Chapter 1' },
    { title: 'Chapter 2' },
    { title: 'Chapter 3' },
    { title: 'Chapter 4' },
    { title: 'Chapter 5' },
    { title: 'Chapter 6' },
    { title: 'Chapter 7' },
    { title: 'Chapter 8' },
    { title: 'Chapter 9' },
    { title: 'Chapter 10' },
    { title: 'Chapter 11' },
    { title: 'Chapter 12' },
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async onDismiss() {
    await this.modalCtrl.dismiss();
  }

  selectChapter(chapter: { title: string }) {
    console.log('Selected chapter:', chapter.title);
  }
}
