import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'src/app/classes/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent implements OnInit{
  
  livres:Livre[]=[];
  constructor(private livreService:LivreService,private router:Router){

  }
  ngOnInit(): void {
    this.livres =this.livreService.getLivres();
  }

  
}
