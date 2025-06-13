import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonTitle, IonButtons, IonToolbar, IonHeader, IonMenuButton]
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'Bright';
  constructor() { }

  ngOnInit() {
  }

}
