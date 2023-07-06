import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http:HttpClient) { }
 
timeLineUrl='https://acecraft-json-kx5c.vercel.app/timeline'


 getTimelineEvents(){
  return this.http.get<any>(this.timeLineUrl)
 }

}

