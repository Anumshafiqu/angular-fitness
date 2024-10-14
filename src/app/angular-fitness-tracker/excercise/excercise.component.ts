import { Component , ElementRef, Renderer2 } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { ConfirmationService , MessageService} from 'primeng/api';
declare var bootstrap: any;  // Declare bootstrap for TypeScript to recognize its API

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrl: './excercise.component.css'
})
export class ExcerciseComponent {
  isLoading = true; 
progressPercentage = 0;  
loadingInterval: any;  
isModalOpen = false;  

ngOnInit() {
  this.startLoading();  
}


startLoading() {
  this.loadingInterval = setInterval(() => {
    if (this.progressPercentage < 100) {
      this.progressPercentage += 1;
    } else {
      this.stopLoading();  
    }
  }, 100);  
}


stopLoading() {
  clearInterval(this.loadingInterval);
  this.isLoading = false;
}


pauseLoading() {
  clearInterval(this.loadingInterval);
}


resumeLoading() {
  if (this.progressPercentage < 100 && !this.isModalOpen) {
    this.startLoading();
  }
}


onModalOpen() {
  this.isModalOpen = true;
  this.pauseLoading();
}


onModalClose() {
  this.isModalOpen = false;
  this.resumeLoading();
}


onConfirmStop() {
  this.stopLoading();  // Stop the loading process
  this.router.navigate(['/new-exercise'])
  this.stopLoading();  // Stop the loading process
  this.isModalOpen = false;  // Close the modal
  this.router.navigate(['/new-exercise']);  // Navigate to the new page
}
constructor(private router:Router){

}


}





