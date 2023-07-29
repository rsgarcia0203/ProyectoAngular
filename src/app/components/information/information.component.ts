import { Component } from '@angular/core';
import { DataContext } from 'src/app/interfaces/idata-context';
import { DataService } from 'src/app/providers/DataService/data.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  public data: DataContext[] = new Array<DataContext>();

  constructor(private _ds:DataService) { }
  
  ngOnInit():void {
    this._ds.getData()
        .subscribe((response) => {
          this.data = (response as DataContext[]);
        })
  }
}
