import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonSearchbar, ModalController, IonCardSubtitle } from '@ionic/angular/standalone';
import { ChapterModalComponent } from '../chapter-modal/chapter-modal.component';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonLabel, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonRow, IonCol, IonGrid, IonContent, HeaderComponent],
  providers: [ModalController]
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {}

  async openChapterModal() {
    const modal = await this.modalCtrl.create({
      component: ChapterModalComponent, // Replace with your actual modal component
      initialBreakpoint: 1, // Adjust the initial size of the modal
      breakpoints: [0, 0.7, 1], // Define the breakpoints for the modal
    });
    return await modal.present();
  }
}
