import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrl: './excercise.component.css'
})
export class ExcerciseComponent {
  isLoading: boolean = true;
  progressPercentage: number = 0;
  intervalId: any;

  constructor(private router: Router) { }

  ngOnInit() {
    // Start the progress on component load
    this.intervalId = setInterval(() => {
      if (this.progressPercentage < 100) {
        this.progressPercentage += 5; // Adjust increment as needed
      } else {
        clearInterval(this.intervalId);
        this.isLoading = false;
        // Optionally navigate after loading completes
        // this.router.navigate(['/another-page']);
      }
    }, 500); // Update progress every 500ms
  }
  stopLoading() {
    clearInterval(this.intervalId);
    this.isLoading = false;
    this.progressPercentage = 0;
     // Reset progress
     this.router.navigate(['/new-exercise']);
  }
}
