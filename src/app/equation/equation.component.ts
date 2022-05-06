import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  mathForm = new FormGroup({
    a: new FormControl(''),
    b: new FormControl(''),
    answer: new FormControl('')
  })
  
  constructor() { }

  ngOnInit(): void {
  }

}
