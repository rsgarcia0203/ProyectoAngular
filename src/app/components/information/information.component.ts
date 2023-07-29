import { Component } from '@angular/core';
import { DataContext } from 'src/app/interfaces/idata-context';
import { DataService } from 'src/app/providers/DataService/data.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  //public data: DataContext[] = new Array<DataContext>();
  public msg:string = 'Cargando datos';
  public data:Array<{name:string, data:number[], years:string[]}> = [];

  constructor(private _ds:DataService) { }
  
  ngOnInit():void {
    this._ds.getData()
        .subscribe(async (response) => {
          let data_array = (response as DataContext[]);
          
          let companies = [...new Set(data_array.flatMap(obj => {
            return obj.company_name;
          }))]
          
          let nueva_informacion = [];
          for (let i = 0; i < companies.length; i++) {
              let datosCompania = data_array
                                      .filter((datos)=> datos.company_name === companies[i])
                                      .map(({ year, X3, X6 }) => ({ year, X3, X6 }));
              let arr_datos = datosCompania.map(obj => { return obj.X3 });
              let arr_anios = datosCompania.map(obj => { return obj.year.toString() });
              nueva_informacion.push({name: companies[i], data: arr_datos, years: arr_anios});
          }
          
          this.data = nueva_informacion;
          this.msg = 'Procesando datos';
        })
  }
}
