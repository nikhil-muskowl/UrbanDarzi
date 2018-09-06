import { Injectable } from '@angular/core';
import { ConfigService } from '../../../services/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogsService {

  constructor(private http: HttpClient) { }

  public getdata(data): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let formData: FormData = new FormData();
    formData.append('start', data.start);
    formData.append('length', data.length);

    return this.http.post(ConfigService.BASE_URL + 'blogs/autocomplete',
      formData,
      {
        headers: headers,
      }
    );
  }

  public getview(id: Number): any {
    return this.http.get(ConfigService.BASE_URL + 'blogs/ajax_view/' + id);
  }
}
