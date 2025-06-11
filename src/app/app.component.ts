import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonSpinner, IonList, IonItem, IonToggle, IonMenuToggle, IonMenu, IonAvatar, IonLabel, IonIcon, IonFooter, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonTitle, IonToolbar, IonFooter, IonIcon, IonLabel, IonAvatar, IonItem, IonList, IonContent, IonApp, IonRouterOutlet, CommonModule, IonMenu, IonMenuToggle, IonToggle],
})
export class AppComponent {
  showLoader = true;
  constructor() {
    addIcons({ settingsOutline });
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }


}
