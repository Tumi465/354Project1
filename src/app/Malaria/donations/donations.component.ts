import { Component, OnInit } from '@angular/core';
import { ListsService } from './lists.service';
import { Donations } from './donations.model';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor(private service: ListsService ) { }

  ngOnInit() {
    this.service.Refreshlist();
  }
PopulateForm(Don : Donations){
  this.service.FormData=Don;
}
}
