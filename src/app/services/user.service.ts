import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, Registration } from '../models/User.model';

const baseUrl = `${environment.url}`;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postregistrationdata(formdata:Registration):Observable<Registration>{
    return this.http.post<Registration>(`${baseUrl}/Registration/upsert`,formdata);
  }
  login(formData:Login){
    return this.http.post(`${baseUrl}/User/login`,formData);
  }

}
