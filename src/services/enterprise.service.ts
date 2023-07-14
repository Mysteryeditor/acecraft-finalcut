import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http:HttpClient) { }
 
timeLineUrl=environment.timeLine;


 getTimelineEvents(){
  return this.http.get<any>(this.timeLineUrl)
 }

}

