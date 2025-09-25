import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBarComponent, SearchResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APPDEV1_MG_SEARCH';
}
