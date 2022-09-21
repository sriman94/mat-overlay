import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatInputModule } from '@angular/material';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { AppOverlayModule } from '../overlay/overlay.module';
export { ProgressSpinnerComponent } from './progress-spinner.component';
@NgModule({
  imports: [
    CommonModule,
    AppOverlayModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [ProgressSpinnerComponent],
  exports: [ProgressSpinnerComponent]
})
export class ProgressSpinnerModule { }