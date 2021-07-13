import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnInit  {
  img:string;
  @Input() article;
  @Output() selectedArticle: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  } 
}
