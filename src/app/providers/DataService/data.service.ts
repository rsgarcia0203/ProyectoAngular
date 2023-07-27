import { Injectable } from '@angular/core';

// Importación de Axios
import { Axios } from 'axios';
import { DataContext } from 'src/app/interfaces/idata-context';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL: string =
    'https://angulardawm-default-rtdb.firebaseio.com/data_context.json';

  constructor(private axios: Axios) {}

  //Método con la petición HTTP
  public async getData(): Promise<DataContext[]> {
    return this.axios
      .get(this.URL)
      .then((response) => response.data as DataContext[])
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
}
