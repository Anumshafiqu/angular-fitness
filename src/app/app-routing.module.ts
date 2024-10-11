import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './angular-fitness-tracker/home/home.component';
import { SignupComponent } from './angular-fitness-tracker/signup/signup.component';
import { LoginComponent } from './angular-fitness-tracker/login/login.component';
import { AboutComponent } from './angular-fitness-tracker/about/about.component';
import { NewExerciseComponent } from './angular-fitness-tracker/new-exercise/new-exercise.component';
import { ExcerciseComponent } from './angular-fitness-tracker/excercise/excercise.component';
import { PastExerciseComponent } from './angular-fitness-tracker/past-exercise/past-exercise.component';

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'about' , component : AboutComponent},
   {path : 'new-exercise' , component : NewExerciseComponent},

  {path : 'excercise' , component : ExcerciseComponent},
  {path : 'past-exercise' , component : PastExerciseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
