import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  patientCount : number=1;

  ngOnInit(): void {
  }

  increased(){
    if(this.patientCount < 999)
        this.patientCount++;
  }

  decreased(){
    if(this.patientCount > 1)
       this.patientCount--;
  }

}
