import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact/contact.service';
import { ToastNotificationService } from '../services/common/toast-notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public title = 'Hi, let\'s get started?';
  public heading = 'Everyday Bespoke Clothing';

  public types: any[] = [];
  formData;
  submitted = false;
  isSuccess = false;
  public successMessage = 'Thank you for contacting us. <br> We will call you back shortly!';
  heroForm: FormGroup;

  result;
  resultStatus;
  resultMessage;
  resultErrorString;
  resultInputError;
  fieldRequiredError = 'Field is required!';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toast: ToastNotificationService
  ) {
    this.bindTypes();
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.heroForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      contact: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      contact_type_id: [null, [Validators.required]],
    });
  }

  bindTypes() {

    this.types.push({
      id: '',
      name: 'What do you want to buy?',
    });

    this.contactService.getType().subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.types.push({
            id: response.data[index].id,
            name: response.data[index].name
          });
        }
      },
      err => {
        console.error(err)
      },
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.heroForm.valid) {

      this.contactService.postData(this.heroForm.value).subscribe(
        response => {
          this.resultStatus = response.status;
          this.resultMessage = response.message;

          if (response.status) {
            this.isSuccess = true;
            this.result = response.data;

            this.toast.title = 'Success';
            this.toast.body = this.resultMessage;
            // this.toast.onSuccess();

          } else {
            this.isSuccess = false;
            this.resultErrorString = response.error_string;
            this.resultInputError = response.inputerror;

            this.toast.title = 'Warning';
            this.toast.body = this.resultMessage;
            // this.toast.onWarning();
          }


        },
        err => {
          console.log(this.heroForm.controls);
          console.error(err)
          // this.toast.title = 'Error';
          // this.toast.body = err;
          // this.toast.onError();
          this.resultStatus = false;

        }
      );

    } else {
      this.resultMessage = 'Validation Error!';
      this.resultStatus = false;
      this.toast.title = 'Warning';
      this.toast.body = this.resultMessage;
      // this.toast.onWarning();      
    }

  }


}
