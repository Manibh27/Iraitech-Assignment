import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.scss']
})
export class TopLeftComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
