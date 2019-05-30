import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http: HttpClient) {
  }

  public getBirds(): Observable<any> {
    return this.http.get<string []>('/api/bird/list');

  }

}
