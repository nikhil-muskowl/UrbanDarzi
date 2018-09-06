import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {

    this.titleService.setTitle('Our Story');

    this.meta.addTag({ name: 'description', content: 'Urban Darzi' });
    this.meta.addTag({ name: 'author', content: 'UrbanDarzi' });
    this.meta.addTag({ name: 'keywords', content: 'Urban, Darzi' });
  }

  ngOnInit() {
   
  }

}
