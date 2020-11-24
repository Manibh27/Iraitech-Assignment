import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mising-number';
  missingNumber: number = 0;
  searchIndex: number = 0;

  /**
   * Finds the missing number.
   * If the entered index is odd, the square of the index is incremented by 1.
   * If the entered index is even, the square of the index is decremented by 1.
   */
  findAnswer = () => {
    if (1 === (this.searchIndex % 2)) {
      this.missingNumber = (this.searchIndex * this.searchIndex) + 1;
    } else {
      this.missingNumber = (this.searchIndex * this.searchIndex) - 1;
    }
  }
}
