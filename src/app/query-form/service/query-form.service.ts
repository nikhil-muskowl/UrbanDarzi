import { Injectable } from '@angular/core';
import { QyeryFormData, Personal, Details } from '../data/query-form';

import { ConfigService } from '../../services/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QueryFormService {

  private formData: QyeryFormData = new QyeryFormData();

  setTypeId(data: any) {
    this.formData.enquiry_type_id = data.enquiry_type_id;
  }

  clear_detail() {
    this.formData.clear_detail();
  }

  setOptions(data: any) {
    this.formData.enquiry_detail = data.enquiry_option_id;
  }

  setPersonal(data: Personal) {
    this.formData.name = data.name;
    this.formData.email = data.email;
    this.formData.contact = data.contact;
  }

  getFormData(): Personal {
    return this.formData;
  }

  resetFormData(): Personal {
    this.formData.clear();
    return this.formData;
  }

  constructor(private http: HttpClient) { }

  public getTypes(data): any {
    return this.http.get(ConfigService.BASE_URL + 'enquiry_type/autocomplete');
  }

  public getOptions(data): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let queryFormData: FormData = new FormData();
    queryFormData.append('enquiry_type_id', data.enquiry_type_id);

    return this.http.post(ConfigService.BASE_URL + 'enquiry_option/autocomplete',
      queryFormData,
      {
        headers: headers,
      }
    );

  }

  public postData(): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let queryFormData: FormData = new FormData();
    queryFormData.append('name', this.formData.name);
    queryFormData.append('contact', this.formData.contact);
    queryFormData.append('email', this.formData.email);
    queryFormData.append('enquiry_type_id',this.formData.enquiry_type_id.toString());
    queryFormData.append('enquiry_detail', JSON.stringify(this.formData.enquiry_detail));
    
    return this.http.post(ConfigService.BASE_URL + 'enquiry/ajax_post',
    queryFormData,
      {
        headers: headers,
      }
    );
  }
}
