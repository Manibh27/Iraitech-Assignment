import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-left',
  templateUrl: './bottom-left.component.html',
  styleUrls: ['./bottom-left.component.scss']
})
export class BottomLeftComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
