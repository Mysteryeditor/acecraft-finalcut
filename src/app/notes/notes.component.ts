import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/services/notes.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteserv: NotesService, private title: Title) {
    this.title.setTitle('Blogs');
  }

  notes: any

  url: string = 'url'

  ngOnInit(): void {

    this.noteserv.getNotes().subscribe((response) => {
      this.notes = response;
    })

  }


}
