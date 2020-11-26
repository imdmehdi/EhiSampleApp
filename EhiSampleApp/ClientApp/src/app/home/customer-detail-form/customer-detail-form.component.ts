import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../../shared/customer-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-detail-form',
  templateUrl: './customer-detail-form.component.html',
  styles: []
})
export class CustomerDetailFormComponent implements OnInit {

  constructor(public service: CustomerDetailService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      Status: '',
      
    }
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCustomerDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
}
