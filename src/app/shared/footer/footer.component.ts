import { Component, Input, OnInit } from '@angular/core';
import { IonFooter, IonToolbar, IonTitle, IonRange } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonFooter]
})
export class FooterComponent implements OnInit {
  @Input() number: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
