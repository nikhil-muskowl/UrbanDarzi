import { Component, OnInit } from '@angular/core';
import { QueryFormService } from '../../service/query-form.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enquiry-confirm',
  templateUrl: './enquiry-confirm.component.html',
  styleUrls: ['./enquiry-confirm.component.css']
})
export class EnquiryConfirmComponent implements OnInit {
  formData;
  enquiryConfirmForm: FormGroup;
  submitted = false;
  fieldRequiredError = 'Please select something so that we have a bettter idea about your style!';
  public resultStatus;
  public resultMessage;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private queryFormService: QueryFormService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.formData = this.queryFormService.getFormData();
  }

  createForm() {
    this.enquiryConfirmForm = this.fb.group({
      enquiry_confirm: [null, Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.enquiryConfirmForm.valid) {

      this.queryFormService.postData().subscribe(
        response => {
          this.resultStatus = response.status;
          this.resultMessage = response.message;
        },
        err => {          
          console.error(err)         
          this.resultStatus = false;
        }
      );

      if (this.enquiryConfirmForm.value.enquiry_confirm == "1") {
        this.router.navigateByUrl('/enquiry-type');
      } else {
        this.router.navigateByUrl('/enquiry-success');
      }          
    }
  }



  onPrevious() {
    this.router.navigateByUrl('/enquiry-option');
  }



}
