import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit {

  constructor(private tokenService:TokenService) { 
    console.log(tokenService.getToken());
  }

  ngOnInit() {
  }

}
