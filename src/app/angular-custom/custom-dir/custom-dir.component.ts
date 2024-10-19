import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-dir',
  templateUrl: './custom-dir.component.html',
  styleUrl: './custom-dir.component.css'
})
export class CustomDirComponent {
  buttonMethod(){
    console.log("button Clicked !!")
  }
  cardMethod(){
    console.log("card Clicked !!")
  }
}
