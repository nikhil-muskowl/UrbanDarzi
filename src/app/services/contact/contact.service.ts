import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  public getType(): any {
    return this.http.get(ConfigService.BASE_URL + 'contact_type/autocomplete');
  }

  public postData(data): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let formData: FormData = new FormData();
    formData.append('contact_type_id', data.contact_type_id);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);    

    return this.http.post(ConfigService.BASE_URL + 'contact/ajax_post',
      formData,
      {
        headers: headers,
      }
    );
  }
}
