import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {CouponDialogComponent} from "../coupon-dialog/coupon-dialog.component";

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  constructor(private matDialog: MatDialog) {

  }

  ngOnInit() {
  }

  onOpenDialog() {
    this.matDialog.open(CouponDialogComponent)
  }
}
