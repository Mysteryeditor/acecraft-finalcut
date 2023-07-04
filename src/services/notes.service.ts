import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { notes } from 'src/models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  notesUrl='http://localhost:3000/notes'

  getNotes(){
    return this.http.get<notes>(this.notesUrl)
  }


  getSingleNote(id:number){
    const singleNoteUrl=this.notesUrl+'?id='+id;
    return this.http.get<any>(singleNoteUrl)
  }

}
