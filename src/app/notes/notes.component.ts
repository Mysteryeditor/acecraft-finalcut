import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteserv:NotesService){}

  notes:any

  url:string='url'

ngOnInit(): void {

  this.noteserv.getNotes().subscribe((response)=>{
    this.notes=response;
  })
   
}


}
