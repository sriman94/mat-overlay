import { Component, OnInit } from '@angular/core';
import { ProgressStatus } from '../progress-spinner/progress.status';

@Component({
  selector: 'app-progress-spinner-demo',
  templateUrl: './progress-spinner-demo.component.html',
  styleUrls: ['./progress-spinner-demo.component.css'],
})
export class ProgressSpinnerDemoComponent {
  spinnerWithoutBackdrop = false;
  overlayProgressStatus = ProgressStatus.Inactive;
  overlayProgressStatus1 = ProgressStatus.Inactive;
  overlayMessage = 'Loading......';
  // Display progress spinner for 3 secs on click of button
  showProgressSpinner = () => {
    this.overlayProgressStatus = ProgressStatus.InProgress;
    this.overlayMessage = 'Loading...';
    setTimeout(() => {
      this.overlayProgressStatus = ProgressStatus.Success;
      this.overlayMessage = 'Loaded Successfully...';
    }, 2000);
  };
  showSpinnerWithoutBackdrop = () => {
    this.spinnerWithoutBackdrop = true;
    this.overlayProgressStatus1 = ProgressStatus.InProgress;
    this.overlayMessage = 'Loading...';
    setTimeout(() => {
      this.spinnerWithoutBackdrop = false;
      this.overlayProgressStatus1 = ProgressStatus.Failed;
      this.overlayMessage = 'Failed to load...';
    }, 3000);
  };
}
