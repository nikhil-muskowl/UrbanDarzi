import { Component, OnInit } from '@angular/core';

import { QueryFormService } from '../../service/query-form.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enquiry-type',
  templateUrl: './enquiry-type.component.html',
  styleUrls: ['./enquiry-type.component.css']
})
export class EnquiryTypeComponent implements OnInit {
  public loading = false;
  public filterData;
  formData;

  public records;  
  public recordsTotal;
  public recordsFiltered;

  enquiryTypeForm: FormGroup;
  submitted = false;
  isSuccess = false;
  fieldRequiredError = 'Please select something so that we have a bettter idea about your style!';

  constructor(
    private router: Router,
    private fb: FormBuilder,    
    private queryFormService: QueryFormService
  ) {     
    this.getServerData();
    this.createForm();
  }

  ngOnInit() {    
    this.queryFormService.clear_detail();  
    this.formData = this.queryFormService.getFormData();   
  }

  createForm() {
    this.enquiryTypeForm = this.fb.group({
      enquiry_type_id: [0, Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.enquiryTypeForm.valid) {
      this.queryFormService.setTypeId(this.enquiryTypeForm.value);    
      this.router.navigateByUrl('/enquiry-option');       
    }
  }

  public getServerData() {
    this.loading = true;
    this.queryFormService.getTypes(this.filterData).subscribe(
      response => {
        this.loading = false;
        this.records = response.data;
        this.recordsTotal = response.data;
        this.recordsFiltered = response.data;
      },
      err => {
        this.loading = false;
      },
    );
  }

  onPrevious() {
    this.router.navigateByUrl('/query-form');
  }

}
