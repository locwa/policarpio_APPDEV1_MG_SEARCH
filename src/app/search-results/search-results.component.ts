import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-search-results',
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  @Input() search = ""
  websites = 
  [
    {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/en-US/",
      description: "Comprehensive documentation for web technologies, including HTML, CSS, JavaScript, and various APIs. A go-to resource for web developers of all skill levels."
    },
    {
      title: "Stack Overflow",
      url: "https://stackoverflow.com/",
      description: "A question and answer site for professional and enthusiast programmers. It is a vast repository of solutions to coding problems and a great place to ask for help."
    },
    {
      title: "GitHub",
      url: "https://github.com/",
      description: "The world's leading software development platform. It provides version control using Git, collaboration tools, and a place to host and share code."
    },
    {
      title: "Smashing Magazine",
      url: "https://www.smashingmagazine.com/",
      description: "An online magazine for professional web designers and developers. It features articles on a wide range of topics, including design trends, coding techniques, and user experience."
    },
    {
      title: "A List Apart",
      url: "https://alistapart.com/",
      description: "A site that explores the design, development, and meaning of web content, with a focus on web standards and best practices. It's a classic resource for insightful articles on web design."
    },
    {
      title: "CSS-Tricks",
      url: "https://css-tricks.com/",
      description: "A website dedicated to all things related to web design and development, with a strong focus on CSS. It provides tutorials, articles, and a comprehensive CSS almanac."
    },
    {
      title: "The Verge",
      url: "https://www.theverge.com/",
      description: "A technology news and media network. It covers a wide range of topics, including gadgets, science, culture, and how technology is shaping our lives."
    },
    {
      title: "TechCrunch",
      url: "https://techcrunch.com/",
      description: "A leading online publisher of technology industry news. It focuses on startups, venture capital funding, and the business side of the tech world."
    }
  ]

  isMatch(item : any){
    return item.title.toLowerCase().match(this.search.toLowerCase());
  }

  noResults = () => {
    return !(this.websites.some(website => this.isMatch(website.title)));
  }

  getSearch(){
    console.log(this.search)
  }
}
