import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonGrid, IonFooter, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonFab, IonFabButton, IonIcon, IonFabList, ModalController, IonLabel } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { Router } from '@angular/router';
import { AiChatComponent } from '../../ai-chat/ai-chat.component';
import { CommonModule } from '@angular/common';
import { SuccessModalComponent } from '../../success-modal/success-modal.component';

@Component({
  selector: 'app-video-chapter',
  templateUrl: './video-chapter.component.html',
  styleUrls: ['./video-chapter.component.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonFabButton, IonFab, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonContent, HeaderComponent, FooterComponent, CommonModule]
})
export class VideoChapterComponent implements OnInit, AfterViewInit {
  hasViewedVideo: boolean = false;
  constructor(
    private route: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.querySelector('video');
    if (video) {
      video.addEventListener('ended', async () => {
        this.hasViewedVideo = true;
        await this.showSuccessModal();
      });
    }
  }

  goToSpeedText() {
    this.route.navigate(['chapter/speed-text']);
  }

  goBack() {
    this.route.navigate(['/home']);
  }

  async openAiChatModal() {
    const modal = await this.modalController.create({
      component: AiChatComponent,
      cssClass: 'ai-chat-modal',
      componentProps: {
        aiPrompt: 'You are history teacher and you know everything about Hercules. You are answering questions based on Hercules only. You are not allowed to answer any other question. If the user asks something else, you should say "Λυπάμαι, δεν μπορώ να βοηθήσω με αυτό." Your aswers should be on Greek only. You speak simple and your targeting is for childrens with ADHD and Dyslexia. Your response should be on html format.',
      }
    });
    await modal.present();
  }

  async showSuccessModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      cssClass: 'success-modal',
      componentProps: {
        number: 50
      },
      backdropDismiss: false
    });
    await modal.present();
    setTimeout(() => {
      modal.dismiss();
    }, 3000);
  }
}
