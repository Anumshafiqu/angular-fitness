import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './angular-fitness-tracker/home/home.component';
import { SignupComponent } from './angular-fitness-tracker/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginComponent } from './angular-fitness-tracker/login/login.component';
import { AboutComponent } from './angular-fitness-tracker/about/about.component';
import { NewExerciseComponent } from './angular-fitness-tracker/new-exercise/new-exercise.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ExcerciseComponent } from './angular-fitness-tracker/excercise/excercise.component';
import { PastExerciseComponent } from './angular-fitness-tracker/past-exercise/past-exercise.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';

import { InputTextModule } from 'primeng/inputtext'; // <-- For search input
import { ButtonModule } from 'primeng/button'; // <-- For button
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    NewExerciseComponent,
    ExcerciseComponent,
    PastExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    FloatLabelModule,
    CalendarModule,
    CheckboxModule,
    TabMenuModule,
    CardModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ProgressSpinnerModule,
    TableModule,
    TagModule,
    ProgressBarModule,
    IconFieldModule,
    InputIconModule,
    SliderModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    ConfirmPopupModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
