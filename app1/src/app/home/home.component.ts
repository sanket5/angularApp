import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectedLink()
  }

  selectedLink(){
    setTimeout(() => {
      const linkList = document.querySelectorAll('.nav__item');
      linkList.forEach(ele=>{
        ele.classList.remove('nav__item__active')
      })
      if(this.router.url.match('about')){
        linkList[1].classList.add('nav__item__active')
      }
      else if(this.router.url.match('team')){
        linkList[2].classList.add('nav__item__active')
      }
      else{
        linkList[0].classList.add('nav__item__active')
  
      }
    },);
  }

}
