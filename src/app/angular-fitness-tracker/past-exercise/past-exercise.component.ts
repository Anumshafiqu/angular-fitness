import { Component , ViewChild} from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer, Representative } from '../../domain/customer';
import { Table } from 'primeng/table';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';
import { SortEvent } from 'primeng/api';
interface Exercise {
  date: string;
  name: string;
  duration: number;
  calories: number;
  state: string;
}
@Component({
  selector: 'app-past-exercise',
  templateUrl: './past-exercise.component.html',
  styleUrl: './past-exercise.component.css'
})
export class PastExerciseComponent {
  exercises: Exercise[] = [
    { date: '2024/03/14 7:12:02 PM', name: 'Plank', duration: 60, calories: 15, state: 'completed' },
    { date: '2024/03/02 3:44:53 PM', name: 'Push Ups', duration: 4.8, calories: 1.6, state: 'cancelled' },
    { date: '2024/02/20 10:18:58 PM', name: 'Push Ups', duration: 2.4, calories: 0.8, state: 'cancelled' },
    { date: '2024/07/28 1:13:40 AM', name: 'Crunches', duration: 3.9, calories: 1.04, state: 'cancelled' },
    { date: '2023/10/22 5:06:10 PM', name: 'Touch Toes', duration: 7.2, calories: 0.6, state: 'cancelled' },
  ];

  filteredExercises: Exercise[] = [...this.exercises];
  searchValue: string = '';

  filter() {
    const lowerCaseValue = this.searchValue.toLowerCase();
    this.filteredExercises = this.exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(lowerCaseValue) ||
      exercise.state.toLowerCase().includes(lowerCaseValue)
    );
  }
}
