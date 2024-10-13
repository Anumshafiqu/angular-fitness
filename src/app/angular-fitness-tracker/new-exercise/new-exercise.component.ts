import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

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
   selectedCategory: string | null = null;
   selectCategory(category: string) {
    this.selectedCategory = category; // Store the selected category
    this.myForm.controls['category'].setValue(category); // Set the form control value
  }

  // selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'Touch Toes', code: 'NY' },
      { name: 'Crunches', code: 'RM' },
      { name: 'Push Ups', code: 'LDN' },
      { name: 'Side Lunges', code: 'IST' },
      { name: 'Plank', code: 'PRS' }
  ];
  }


  selectedCity: any;
    constructor(private router: Router,private formBuilder: FormBuilder) {

      this.myForm = this.formBuilder.group({
        category: ['', Validators.required]
      });
    }

  startTraining() {
    // Navigate to the loading page
    this.router.navigate(['/excercise']); 
  }


  myForm: FormGroup;
  submitted = false;
  categories = ['Touch toes', 'Push ups', 'Crunches', 'side Lunges', 'Plank'];



  // Getter for easy access to form controls
  get formControls() {
    return this.myForm.controls;
  }

  // Form submission
  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;  // Don't proceed if form is invalid
    }

    // If valid, handle the form data
    console.log("Form Submitted Successfully", this.myForm.value);
  }

}
