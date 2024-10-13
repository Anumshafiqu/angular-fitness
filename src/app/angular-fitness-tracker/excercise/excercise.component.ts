import { Component , ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService , MessageService} from 'primeng/api';
declare var bootstrap: any;  // Declare bootstrap for TypeScript to recognize its API

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrl: './excercise.component.css'
})
export class ExcerciseComponent {
  isLoading: boolean = true;
  progressPercentage: number = 0;
  intervalId: any;

   constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      if (this.progressPercentage < 100) {
        this.progressPercentage += 1;
      } else {
        clearInterval(this.intervalId);
        this.isLoading = false;
      }
    }, 500);
  }
  stopLoading() {
    clearInterval(this.intervalId);
    this.isLoading = false;
    this.progressPercentage = 0;
    this.router.navigate(['/new-exercise']);


  }
  confirmStop() {
    this.isLoading = false;
    const confirmationModal = new (window as any).bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.hide();
    this.isLoading = false;

  }
  restartLoading() {
    this.isLoading = true;
  }
  // navigateBack() {
  //   this.router.navigate(['/new-exercise']);
  // }
  // openModal() {
  //   const confirmationModal = new (window as any).bootstrap.Modal(document.getElementById('confirmationModal'));
  //   confirmationModal.show();
  // }

  // constructor(private router: Router) {}

  // constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  onConfirmStop() {
    // Close the modal programmatically
    const modal = this.el.nativeElement.querySelector('#stopModal');
    this.renderer.removeClass(modal, 'show');
    this.renderer.setStyle(modal, 'display', 'none');
    this.renderer.setStyle(document.body, 'class', '');

    // Navigate to new-exercise page after modal closes
    this.router.navigate(['/new-exercise']);
        // Close the modal using Bootstrap's API
        this.modalInstance.hide();

        // Delay the navigation to ensure modal closes fully
        setTimeout(() => {
          this.router.navigate(['/new-exercise']);
        }, 300);  // Give it some time to hide the modal (300ms)
  }

  modalInstance: any;

  // constructor(private router: Router) {}

  ngAfterViewInit() {
    // Initialize the modal instance from Bootstrap
    const modalElement = document.getElementById('stopModal');
    this.modalInstance = new bootstrap.Modal(modalElement);
  }






}





