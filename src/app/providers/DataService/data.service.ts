import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataContext } from 'src/app/interfaces/idata-context';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL: string =
    'https://angulardawm-default-rtdb.firebaseio.com/data.json';

  constructor(private http: HttpClient) {}

  //Método con la petición HTTP
  public getData(): Observable<Object> {
    return this.http.get(this.URL)
  }
}
