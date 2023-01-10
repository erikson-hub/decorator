import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-hijo',
  templateUrl: './c-hijo.component.html',
  styleUrls: ['./c-hijo.component.css'],
})
export class CHijoComponent implements OnInit {
  @Input() values: any;
  constructor() {}

  ngOnInit() {
    // Código de inicialización va aquí
  }
}
