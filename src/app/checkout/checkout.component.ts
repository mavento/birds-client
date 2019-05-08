import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  constructor(private matSnackBar: MatSnackBar) {
  }


  onSubmit() {
    this.matSnackBar.open("Order Submited", "Retry", {
      duration: 1000,
    })
  }
}
