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
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      status: '',
      
    }
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
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
  updateRecord(form: NgForm) {
    this.service.putCustomerDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
