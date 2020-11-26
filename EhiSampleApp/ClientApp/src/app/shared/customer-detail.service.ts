import { Injectable, Inject } from '@angular/core';
import { CustomerDetail } from './customer-detail.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  formData: CustomerDetail = new CustomerDetail();
 

  list: CustomerDetail[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private rootURL: string) { }

  postCustomerDetail() {
    return this.http.post(`${this.rootURL}api/Contacts`, this.formData);
  }
  putCustomerDetail() {
    return this.http.put(`${this.rootURL}api/Contacts/${this.formData.id}`, this.formData);
  }
  deleteCustomerDetail(id) {
    return this.http.delete(`${this.rootURL}api/Contacts/${id}`);
  }

  refreshList() {
    this.http.get(`${this.rootURL}api/Contacts/`)
      .toPromise()
      .then(res => this.list = res as CustomerDetail[]);
  }
}
