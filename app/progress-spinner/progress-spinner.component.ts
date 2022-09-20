import {
  Component,
  Input,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  DoCheck,
} from '@angular/core';
import { ProgressSpinnerMode, ThemePalette } from '@angular/material';
import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { OverlayService } from '../overlay/overlay.service';
import { ProgressStatus } from './progress.status';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent {
  @Input() color?: ThemePalette;
  @Input() diameter?: number = 20;
  @Input() mode?: any='inderminate';
  @Input() strokeWidth?: number;
  @Input() value?: number;
  @Input() backdropEnabled = true;
  @Input() positionGloballyCenter = true;
  @Input() displayProgressSpinner: boolean;
  @Input() overlayProgressStatus: any;
  @Input() overlayMessage: string = 'Loading....';
  @ViewChild('progressSpinnerRef')
  private progressSpinnerRef: TemplateRef<any>;
  private progressSpinnerOverlayConfig: OverlayConfig;
  private overlayRef: OverlayRef;
  constructor(
    private vcRef: ViewContainerRef,
    private overlayService: OverlayService
  ) {}
  ngOnInit() {
    // Config for Overlay Service
    this.progressSpinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled,
    };
    if (this.positionGloballyCenter) {
      this.progressSpinnerOverlayConfig['positionStrategy'] =
        this.overlayService.positionGloballyCenter();
    }
    // Create Overlay for progress spinner
    this.overlayRef = this.overlayService.createOverlay(
      this.progressSpinnerOverlayConfig
    );
  }
  ngDoCheck() {
    if (
      this.overlayProgressStatus !== ProgressStatus.Inactive &&
      this.overlayProgressStatus !== ProgressStatus.InProgress
    ) {
      setTimeout(() => {
        this.overlayProgressStatus = ProgressStatus.Inactive;
      }, 2000);
    }
    // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
    if (
      this.overlayProgressStatus === ProgressStatus.InProgress &&
      !this.overlayRef.hasAttached()
    ) {
      this.overlayService.attachTemplatePortal(
        this.overlayRef,
        this.progressSpinnerRef,
        this.vcRef
      );
    } else if (
      this.overlayProgressStatus === ProgressStatus.Inactive &&
      this.overlayRef.hasAttached()
    ) {
      this.overlayRef.detach();
    }
  }
}
