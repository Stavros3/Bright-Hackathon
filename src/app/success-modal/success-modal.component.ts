import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  number?: string;

  constructor() { }

  ngOnInit() {
  }

    ionViewDidEnter() {
    const audio = new Audio('assets/bee.m4a');
    audio.play();
  }
}
