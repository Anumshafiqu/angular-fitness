import { Injectable } from '@angular/core';
export interface Exercise {
  date: string;
  name: string;
  duration: number; // Assuming duration is in minutes
  calories: number;
  status: string; // e.g., 'Completed', 'In Progress', etc.
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private selectedCategory: string | null = null;
  private pastExercises: Exercise[] = []; // Store past exercises

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  addExercise(exercise: Exercise) {
    this.pastExercises.push(exercise);
  }

  getPastExercises() {
    return this.pastExercises;
  }

}
