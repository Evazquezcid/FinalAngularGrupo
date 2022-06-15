import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  public btnText: string = 'Dark';
  constructor() {}

  ngOnInit(): void {}

  public cambiarColor(): void {
    document.body.classList.toggle('light-theme');
    this.btnText === 'Dark'
      ? (this.btnText = 'Light')
      : (this.btnText = 'Dark');
  }
}
