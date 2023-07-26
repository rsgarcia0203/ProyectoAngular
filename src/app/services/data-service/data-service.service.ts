import {
  Firestore,
  CollectionReference,
  DocumentData,
  collection,
  WriteBatch
} from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage'; 
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usersCollection: CollectionReference<DocumentData>;
  private readonly firestorageService: Storage = inject(Storage);
  private readonly firestoreService: Firestore = inject(Firestore);

  constructor() {
    this.usersCollection = collection(this.firestoreService, 'data_context');
  }

  public async cargarJSON() {
    const path:string = 'converted.json';
    const refStorage = ref(this.firestorageService, path);
    const contenido = await getDownloadURL(refStorage);
    const datos = await fetch(contenido).then((response:Response) => response.json());

    const batch = this.firestoreService
  }
}
