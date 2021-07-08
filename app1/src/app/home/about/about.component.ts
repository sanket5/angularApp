import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards=[
    {
      name:'card1',
      desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum velit natus unde rem voluptatum blanditiis'
    },
    {
      name:'card2',
      desc:' Earum velit natus unde rem voluptatum blanditiis Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }
  ]

}
