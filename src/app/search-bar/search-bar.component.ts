import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  exampleText = ""

  @Output() searchText = new EventEmitter<string>()

  constructor () {}

  updateSearch() {
    this.searchText.emit(this.exampleText)
  }
}
