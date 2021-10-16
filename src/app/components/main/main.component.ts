import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DailyPatientCount } from 'src/app/Models/daily-patient-count.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor(private service:MainserviceService) { }

  patientCount : number=1;
  currentDailyCount : DailyPatientCount;
  userLoggedIn:boolean = true;
  lastUpdated:any;

  ngOnInit(): void {
    this.loadCurrentPatientNumber();
  }

  increased(){
    if(this.patientCount < 999){        
        this.updateDailyPatientCount(1);
    }

  }

  decreased(){
    if(this.patientCount > 1){       
        this.updateDailyPatientCount(-1);
    }
  }

  loadCurrentPatientNumber(){
    this.service.getCurrentPatientNumber(1).subscribe(
      (res)=>{
        this.currentDailyCount = res as DailyPatientCount;
        this.patientCount = this.currentDailyCount.currentNumber;
        this.loadLastUpdatedDate(this.currentDailyCount.channelledDate);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  updateDailyPatientCount(incrementOrDecrement:number){
    debugger;
    this.currentDailyCount.currentNumber += incrementOrDecrement;
    this.currentDailyCount.channelledDate = new Date();
    this.service.updateDailyPatientCount(this.currentDailyCount,this.currentDailyCount.id).subscribe(
      (res)=>{
           this.patientCount += incrementOrDecrement;
           this.loadLastUpdatedDate(this.currentDailyCount.channelledDate);
      },
      (err)=>{
        console.log("error",err);        
      }
    );
  }

  currentNumberChanged(){
    this.currentDailyCount.currentNumber = this.patientCount;
    this.updateDailyPatientCount(0);
  }


  loadLastUpdatedDate(dateTime : any){
    this.lastUpdated = new Date(dateTime).toLocaleString();
  }

  

}
