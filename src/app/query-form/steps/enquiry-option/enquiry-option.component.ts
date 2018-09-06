import { Component, OnInit } from '@angular/core';
import { QueryFormService } from '../../service/query-form.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enquiry-option',
  templateUrl: './enquiry-option.component.html',
  styleUrls: ['./enquiry-option.component.css']
})
export class EnquiryOptionComponent implements OnInit {

  public loading = false;
  public filterData;
  public enquiry_type_id: number;
  formData;

  public records;
  public seletedOptions;
  public recordsTotal;
  public recordsFiltered;

  enquiryOptionForm: FormGroup;
  submitted = false;
  isSuccess = false;
  fieldRequiredError = 'Please select something so that we have a bettter idea about your style!';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private queryFormService: QueryFormService
  ) {
    this.formData = this.queryFormService.getFormData();
    this.enquiry_type_id = this.formData.enquiry_type_id;

    if (this.formData.enquiry_detail != null) {
      this.seletedOptions = this.formData.enquiry_detail;
    }

    this.getServerData();
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.enquiryOptionForm = this.fb.group({
      enquiry_option_id: this.fb.array([])
    });

    
  }

  onCheckChange(event) {
    const formArray: FormArray = this.enquiryOptionForm.get('enquiry_option_id') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  check(value) {    
    if (this.formData.enquiry_detail != null && this.formData.enquiry_detail.indexOf(value) !== -1) {         
      return true;
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.enquiryOptionForm.valid) {      
      if(this.enquiryOptionForm.value.enquiry_option_id.length){
        this.queryFormService.setOptions(this.enquiryOptionForm.value);
        this.formData = this.queryFormService.getFormData();
        this.router.navigateByUrl('/enquiry-confirm');
      }      
    }
  }

  public getServerData() {
    this.loading = true;
    this.filterData = { 'enquiry_type_id': this.enquiry_type_id };
    this.queryFormService.getOptions(this.filterData).subscribe(
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
    this.router.navigateByUrl('/enquiry-type');
  }

}
