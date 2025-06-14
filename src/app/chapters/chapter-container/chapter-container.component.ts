import { Component, OnInit } from '@angular/core';
import { IonContent, IonRouterOutlet, IonGrid, IonCol, IonRow, IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-chapte-container',
  templateUrl: './chapter-container.component.html',
  styleUrls: ['./chapter-container.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonGrid, IonContent, HeaderComponent]
})
export class ChapterContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
