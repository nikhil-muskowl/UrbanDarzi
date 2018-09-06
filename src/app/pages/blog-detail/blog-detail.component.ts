import { Component,ViewChild,ElementRef, OnInit,HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../pages/blogs/service/blogs.service';
import { TweenLite, TweenMax, Power1 } from "gsap";
import * as ScrollToPlugin from "gsap/ScrollToPlugin";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @ViewChild('myId') myId: ElementRef;
  public loading = false;
  public records;
  public recordsTotal;
  public recordsFiltered;
  public banner;


  constructor(private spinner: NgxSpinnerService,private blogsService: BlogsService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    this.getViewData(id);    
  }

  

  public getViewData(id) {
    this.loading = true;
    this.blogsService.getview(id).subscribe(
      response => {
        this.loading = false;
        this.records = response.data;
        this.banner=response.data.banner;
      },
      err => {
        this.loading = false;
        console.error(err)
      }      
    );
    return id;
  }

  ngOnInit() {
   
  }

  @HostListener('window:scroll', [''])
  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {   
    if (window.pageYOffset > 250) {
      document.getElementById("heading").style.visibility = "visible";
      document.getElementById("heading").style.opacity = "1";
      document.getElementById("blog-banner").style.opacity = "5";
    } else {      
      document.getElementById("heading").style.visibility = "hidden";
      document.getElementById("heading").style.opacity = "0";
      document.getElementById("blog-banner").style.opacity = "1";
    }  
  }

  onClick() {      
    TweenLite.to(window, 2, {
      scrollTo: this.myId.nativeElement,
      ease: Power1.easeOut      
    });
  }

}