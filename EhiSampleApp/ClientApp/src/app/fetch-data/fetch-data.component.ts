import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public contactsAll: Contacts[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Contacts[]>(baseUrl + 'api/Contacts').subscribe(result => {
      this.contactsAll = result; console.log(result);
    }, error => console.error(error));
  }
}

interface Contacts {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  status: string;
}
