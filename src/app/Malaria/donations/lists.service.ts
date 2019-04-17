import { Injectable } from '@angular/core';
import { Donations } from './donations.model';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListsService {
  FormData: Donations;
list : Donations[];
readonly rootURL=""
  constructor(private http : HttpClient) { }

  Refreshlist(){
    this.http.get(this.rootURL+'/donations')
    .toPromise().then(res => this.list = res as Donations[])
  }
}
