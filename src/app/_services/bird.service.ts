import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http: HttpClient) {
  }

  public getBirds(): Observable<string[]> {
    return this.http.get<string[]>('/assets/sample-data/birds.json');
  }

}
