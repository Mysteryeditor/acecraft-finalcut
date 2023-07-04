import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/services/notes.service';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private notesServ:NotesService){}

  notesId:number=0
notesData:any=[]

  ngOnInit(): void {
      this.notesId=this.ar.snapshot.params['id'];
this.notesServ.getSingleNote(this.notesId).subscribe((response)=>{
this.notesData=response
console.log(this.notesData);

console.log(this.notesData[0].listPoints)
});
  }




}
