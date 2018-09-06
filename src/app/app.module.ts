import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ContactService } from './services/contact/contact.service';
import { ToastNotificationService } from './services/common/toast-notification.service';
import { NgxSpinnerModule } from 'ngx-spinner';

import { FooterComponent } from './common/footer/footer.component';
import { MenuComponent } from './common/menu/menu.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { MousewheelDirective } from './directives/mousewheel.directive';
import { StoryComponent } from './custom-blocks/story/story.component';
import { FashionEditorialComponent } from './custom-blocks/fashion-editorial/fashion-editorial.component';
import { HowItWorksBlockComponent } from './custom-blocks/how-it-works-block/how-it-works-block.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

import { StoryHeaderComponent } from './common/story-header/story-header.component';
import { HeaderComponent } from './common/header/header.component';

import { QueryFormService } from './query-form/service/query-form.service';
import { QueryFormComponent } from './query-form/query-form.component';

import { BlogsService } from './pages/blogs/service/blogs.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EnquiryTypeComponent } from './query-form/steps/enquiry-type/enquiry-type.component';
import { EnquiryOptionComponent } from './query-form/steps/enquiry-option/enquiry-option.component';
import { EnquirySuccessComponent } from './query-form/steps/enquiry-success/enquiry-success.component';
import { EnquiryConfirmComponent } from './query-form/steps/enquiry-confirm/enquiry-confirm.component';


import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    ContactFormComponent,
    MousewheelDirective,
    StoryComponent,
    FashionEditorialComponent,
    HowItWorksBlockComponent,
    HowItWorksComponent,
    OurStoryComponent,
    HomeComponent,
    BlogsComponent,
    BlogDetailComponent,
    StoryHeaderComponent,
    HeaderComponent,
    QueryFormComponent,
    EnquiryTypeComponent,
    EnquiryOptionComponent,
    EnquirySuccessComponent,
    EnquiryConfirmComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SnotifyModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    SwiperModule
  ],
  providers: [
    ContactService,
    BlogsService,
    QueryFormService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    ToastNotificationService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
