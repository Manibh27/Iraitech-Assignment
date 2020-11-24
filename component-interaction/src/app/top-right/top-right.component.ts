import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-right',
  templateUrl: './top-right.component.html',
  styleUrls: ['./top-right.component.scss']
})
export class TopRightComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
