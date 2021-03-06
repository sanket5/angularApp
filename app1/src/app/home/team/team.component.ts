import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private userService: UserService) { }
  teams;
  ngOnInit(): void {
    this.getTeam()
  }

  getTeam(){
    this.userService.getTeam().subscribe(data=>{
      this.teams = data.data
      console.log(data);
    }, (error)=>{
        console.log('Databas not found, providig dummy data');
        this.teams=["Tom Hamk","Tom Cruise", "Hritik Roshan", "Amy Adams","Tim Cook", "Abrham Lonchon"]
    }
    )
  
  }
}
