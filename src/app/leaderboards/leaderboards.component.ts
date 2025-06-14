import { Component, OnInit } from '@angular/core';
import { IonContent, IonFab, IonFabButton, IonIcon, IonCol, IonRow, IonGrid } from "@ionic/angular/standalone";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonContent, HeaderComponent]
})
export class LeaderboardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
