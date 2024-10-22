import { Component, OnInit } from '@angular/core';

// EINTRAGEN
import { FormsModule } from '@angular/forms'; // FormsModule importieren


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent  implements OnInit {

  constructor() { }

  // EIGENSCHAFTEN
  vorname: string = '';
  nachname: string = '';
  email: string = '';
  nachricht: string = '';

  ngOnInit() {
    console.log('InfoComponent wurde initialisiert');
  }

  //onSubmit() {
  onSubmit(event: Event) { // Event empfangen

    // Verhindere das Standard-Submit-Verhalten (also das Neuladen der Seite)
    event.preventDefault();

    const form = document.forms.namedItem('anfrage');
    
    if (form) {
      this.vorname = (form.elements.namedItem('vorname') as HTMLInputElement).value;
      this.nachname = (form.elements.namedItem('nachname') as HTMLInputElement).value;
      this.email = (form.elements.namedItem('email') as HTMLInputElement).value;
      this.nachricht = (form.elements.namedItem('nachricht') as HTMLTextAreaElement).value;
    }

    console.log('Formular abgeschickt');
    console.log('Vorname:', this.vorname);
    console.log('Nachname:', this.nachname);
    console.log('Email:', this.email);
    console.log('Nachricht:', this.nachricht);

    // Hier kannst du weitere Logik implementieren, z.B. das Senden der Nachricht an einen Server
  }


}
