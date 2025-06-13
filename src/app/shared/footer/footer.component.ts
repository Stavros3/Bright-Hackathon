import { Component, OnInit } from '@angular/core';
import { IonFooter, IonToolbar, IonTitle, IonRange } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonRange, IonTitle, IonToolbar, IonFooter, ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
