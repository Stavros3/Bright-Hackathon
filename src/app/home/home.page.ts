import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonSearchbar, ModalController, IonCardSubtitle } from '@ionic/angular/standalone';
import { ChapterModalComponent } from '../chapter-modal/chapter-modal.component';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonSearchbar, IonLabel, IonItem, IonList, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonRow, IonCol, IonGrid, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, HeaderComponent],
  providers: [ModalController]
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {}

  async openChapterModal() {
    const modal = await this.modalCtrl.create({
      component: ChapterModalComponent, // Replace with your actual modal component
    });
    return await modal.present();
  }
}
