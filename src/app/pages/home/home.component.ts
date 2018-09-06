import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {

    this.titleService.setTitle('Urban Darzi');

    this.meta.addTag({ name: 'description', content: 'Urban Darzi' });
    this.meta.addTag({ name: 'author', content: 'Urban Darzi' });
    this.meta.addTag({ name: 'keywords', content: 'Urban, Darzi' });
  }

  ngOnInit() {
    console.log(window.innerWidth);
  }

}
