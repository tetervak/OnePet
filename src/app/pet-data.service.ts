import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pet} from "./pet";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) {
  }

  public static imageFolder: string = 'http://localhost:8080/images/pets/';
  private static dataUri: string = 'http://localhost:8080/api/pets'

  getPetById(id: number): Observable<Pet>{
    return this.http.get<Pet>(`${PetDataService.dataUri}/${id}`)
  }
}
