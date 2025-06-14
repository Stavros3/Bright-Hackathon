import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet, IonContent, IonSpinner, IonList, IonItem, IonToggle, IonMenuToggle, IonMenu, IonAvatar, IonLabel, IonIcon, IonFooter, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline, chevronUpCircle } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonToolbar, IonFooter, IonIcon, IonLabel, IonAvatar, IonItem, IonList, IonContent, IonApp, IonRouterOutlet, CommonModule, IonMenu, IonMenuToggle, IonToggle,
    RouterModule],
})
export class AppComponent {
  showLoader = true;
  constructor() {
    addIcons({ settingsOutline, chevronUpCircle });
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }


}
