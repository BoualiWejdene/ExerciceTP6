import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/classes/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-selected-livre',
  templateUrl: './selected-livre.component.html',
  styleUrls: ['./selected-livre.component.css']
})
export class SelectedLivreComponent implements OnInit {
  liv!:Livre | undefined;
  idLivre:number = 0;
 
  constructor(private activatedRoute:ActivatedRoute,private livreService:LivreService,private router:Router){

  }
  ngOnInit(): void {
     this.idLivre = this.activatedRoute.snapshot.params['identif'];
     this.liv = this.livreService.getlivreById(this.idLivre);
  }
  onRevenir(){
    this.router.navigate(['/livres']);
  }

}
