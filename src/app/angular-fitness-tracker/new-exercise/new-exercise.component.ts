import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrl: './new-exercise.component.css'
})
export class NewExerciseComponent {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'Touch Toes', code: 'NY' },
      { name: 'Crunches', code: 'RM' },
      { name: 'Push Ups', code: 'LDN' },
      { name: 'Side Lunges', code: 'IST' },
      { name: 'Plank', code: 'PRS' }
  ];
  }
  constructor(private router: Router) {}

  startTraining() {
    // Navigate to the loading page
    this.router.navigate(['/excercise']); 
  }
}
