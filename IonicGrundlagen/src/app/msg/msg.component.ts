import { Component, OnInit } from '@angular/core';

// EINTRAGEN
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent  implements OnInit {

  //constructor() { }

  // EINTRAGEN
  id: string | null = null;

  // EINTRAGEN, ID
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      //this.id = params.get('id') ?? '';  // Falls 'id' nicht gefunden wird, wird ein leerer String zugewiesen
      console.log('Message ID:', this.id);
    });
  }


}
