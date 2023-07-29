import { Component } from '@angular/core';
import { DataContext } from 'src/app/interfaces/idata-context';
import { DataService } from 'src/app/providers/DataService/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public aliveCompanies:number = 0;
  public failedCompanies:number = 0;

  constructor(private _ds:DataService) { }
  
  ngOnInit():void {
    this._ds.getData()
        .subscribe((response) => {
          let data_array = (response as DataContext[]);
          
          let companies = [...new Set(
                                  data_array.flatMap(obj => { return obj.company_name; })
                          )]
          
          let nueva_informacion = [];
          for (let i = 0; i < companies.length; i++) {
              let datosCompania = data_array
                                      .filter((datos)=> datos.company_name === companies[i])
                                      .map(( {status_label} ) => ( status_label ));
              nueva_informacion.push({name: companies[i], status: datosCompania[0]});
          }

          this.aliveCompanies = nueva_informacion.filter((datos) => datos.status === "alive").length;
          this.failedCompanies = nueva_informacion.filter((datos) => datos.status === "failed").length;
        })
  }
}
