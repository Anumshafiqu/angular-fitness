import { Component , OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form !: FormGroup;

  constructor(private fb: FormBuilder , private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      birthdate: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  // onSubmit(): void {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }
  loading: boolean = false; 
  onSubmit(): void {
    // Show the loader
    this.loading = true;

    // Simulate a delay to mimic an API call
    setTimeout(() => {
      this.loading = false; // Hide loader when "processing" is done

      // Navigate to the next page (replace '/next-page' with your route)
      this.router.navigate(['/new-exercise']);
    }, 3000); // Simulate 3 seconds delay
  }
}
