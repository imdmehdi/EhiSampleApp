import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../shared/customer-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(public service: CustomerDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteCustomerDetail(Id)
        .subscribe(res => {
          this.service.refreshList();
        },
          err => { console.log(err); })
    }
  }
}
