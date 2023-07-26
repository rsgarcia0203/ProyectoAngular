import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoAngular';

  private firestore: Firestore = inject(Firestore);
  public items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'data_context')
    //const aCollection = this.firestore.collection('users');
    this.items$ = collectionData(aCollection);
  }
}
