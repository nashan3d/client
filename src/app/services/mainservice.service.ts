import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DailyPatientCount } from '../Models/daily-patient-count.model';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http:HttpClient) { }

  readonly baseUrl:string = "https://localhost:5001/api"
  readonly patientCountControllerName: string = "patientcount";


  getCurrentPatientNumber(dispensaryId : number){
    return this.http.get(`${this.baseUrl}/${this.patientCountControllerName}/${dispensaryId}`);
  }

  updateDailyPatientCount(dailyPatientCount : DailyPatientCount,id:number){
    return this.http.put(`${this.baseUrl}/${this.patientCountControllerName}/${id}`,dailyPatientCount);
  }
}
