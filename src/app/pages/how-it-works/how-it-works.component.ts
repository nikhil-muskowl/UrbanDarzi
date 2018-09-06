import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {

    this.titleService.setTitle('How it works');
   
    this.meta.addTag({ name: 'description', content: 'Urban Darzi' });
    this.meta.addTag({ name: 'author', content: 'Urban Darzi' });
    this.meta.addTag({ name: 'keywords', content: 'Urban, Darzi' });
  }

  ngOnInit() {
  }

}
