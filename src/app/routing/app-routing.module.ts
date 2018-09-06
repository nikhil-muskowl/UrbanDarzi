import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { HowItWorksComponent } from '../pages/how-it-works/how-it-works.component';
import { OurStoryComponent } from '../pages/our-story/our-story.component';
import { BlogsComponent } from '../pages/blogs/blogs.component';
import { BlogDetailComponent } from '../pages/blog-detail/blog-detail.component';

import { QueryFormComponent } from '../query-form/query-form.component';
import { EnquiryTypeComponent } from '../query-form/steps/enquiry-type/enquiry-type.component';
import { EnquiryOptionComponent } from '../query-form/steps/enquiry-option/enquiry-option.component';
import { EnquiryConfirmComponent } from '../query-form/steps/enquiry-confirm/enquiry-confirm.component';
import { EnquirySuccessComponent } from '../query-form/steps/enquiry-success/enquiry-success.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'how-we-work',
    component: HowItWorksComponent
  },
  {
    path: 'our-story',
    component: OurStoryComponent
  },
  {
    path: 'social-edit',
    component: BlogsComponent
  },
  {
    path: 'social-edit-detail/:id',
    component: BlogDetailComponent
  },
  {
    path: 'query-form',
    component: QueryFormComponent
  },
  {
    path: 'enquiry-type',
    component: EnquiryTypeComponent
  },
  {
    path: 'enquiry-option',
    component: EnquiryOptionComponent
  },
  {
    path: 'enquiry-confirm',
    component: EnquiryConfirmComponent
  },
  {
    path: 'enquiry-success',
    component: EnquirySuccessComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
