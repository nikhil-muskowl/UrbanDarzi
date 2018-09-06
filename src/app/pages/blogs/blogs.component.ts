import { Component, OnInit } from '@angular/core';
import { BlogsService } from './service/blogs.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  title = 'Blogs';
  public loading = false;
  public pageStart = 0;
  public pageLength = 5;

  public model: any[] = [];

  public filterData;

  public records;
  public recordsTotal;
  public recordsFiltered;

  constructor(private spinner: NgxSpinnerService, private BbogsService: BlogsService) {

  }

  public getServerData() {
    this.filterData = { 'start': this.pageStart, 'length': this.pageLength };

    this.loading = true;

    this.BbogsService.getdata(this.filterData).subscribe(
      response => {
        this.loading = false;
        this.records = response.data.records;
        this.recordsTotal = response.data.recordsTotal;
        this.recordsFiltered = response.data.recordsFiltered;
        this.binddata();
      },
      err => {
        this.loading = false;
        // console.error(err)
      },
    );
  }

  binddata() {
    for (let index = 0; index < this.records.length; index++) {
      this.model.push({
        id: this.records[index].id,
        name: this.records[index].name,
        title: this.records[index].title,
        description: this.records[index].description,
        short_description: this.records[index].short_description,
        image: this.records[index].image,
        banner: this.records[index].banner,
        created_date: this.records[index].created_date,
        modified_date: this.records[index].modified_date
      });
    }
  }

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  ngOnInit() {    
    this.getServerData();
  }


  onScrollDown() {
    if (this.pageStart < this.recordsFiltered) {
      this.pageStart += this.pageLength;
      this.getServerData();
    }

  }

  onScrollUp() {
    // this.getServerData();
  }



}
