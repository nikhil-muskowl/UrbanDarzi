import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { QueryFormService } from './service/query-form.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {

  public title = 'Hi, let\'s get started?';
  public heading = 'Everyday Bespoke Clothing';

  formData;

  submitted = false;
  isSuccess = false;
  
  queryForm: FormGroup;

  public loading = false;
  public filterData;

  public records;
  public recordsTotal;
  public recordsFiltered;

  result;
  resultStatus;
  resultMessage;
  resultErrorString;
  resultInputError;
  fieldRequiredError = 'Field is required!';

  public options: any[] = [];

  constructor(
    private queryFormService: QueryFormService,
    private fb: FormBuilder,
    private el: ElementRef,
    private router: Router
  ) {
    this.getServerData();
    this.createForm();
  }

  createForm() {
    this.queryForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      contact: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
    });
  }



  onSubmit() {
    this.submitted = true;
    if (this.queryForm.valid) {
      this.queryFormService.setPersonal(this.queryForm.value);
      this.router.navigateByUrl('/enquiry-type');
    }
  }


  public getServerData() {
    this.queryFormService.getTypes(this.filterData).subscribe(
      response => {
        this.loading = false;
        this.records = response.data.records;
        this.recordsTotal = response.data.recordsTotal;
        this.recordsFiltered = response.data.recordsFiltered;
      },
      err => {
        this.loading = false;
      },
    );
  }


  ngOnInit() {
    this.formData = this.queryFormService.getFormData();            
  }

}
