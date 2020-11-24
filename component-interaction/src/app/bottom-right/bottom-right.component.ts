import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-right',
  templateUrl: './bottom-right.component.html',
  styleUrls: ['./bottom-right.component.scss']
})
export class BottomRightComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
