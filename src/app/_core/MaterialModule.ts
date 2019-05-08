import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBar, MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatListModule,
    MatSelectModule
  ],
})
export class MaterialModule {
}
