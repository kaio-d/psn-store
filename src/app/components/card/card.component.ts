import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = ""

  @Input()
  gameLabel: string = ""
  constructor() { }

  @Input()
  gameType:string = "DIGITAL PS4";

  @Input()
  gamePrice:string = "R$ 149,99";

  ngOnInit(): void {
  }

}
