import { Component, OnInit } from '@angular/core';
import { publication } from '../publication';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationServiceService } from '../publication-service.service';
import { PublicationDetailsComponent } from '../publication-details/publication-details.component';
import { UpdatePublicationComponent } from '../update-publication/update-publication.component';



@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  Publication !: publication[]; 


  constructor(private PublicationService: PublicationServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getpublication();
  }

  private getpublication(){
    this.PublicationService.getPublicationList().subscribe(data => {
      this.Publication = data;
      console.log("data",this.Publication);
   ;

    });
  }


  publicationDetails(id:number){
    this.router.navigate(['publicationDetails', id]);
  }

  UpdatePublication(id: number){
    this.router.navigate(['updatePublication', id]); 
  }

  deletePublication(id: number){
    this.PublicationService.deletePublication(id).subscribe( data => {
      console.log(data);
      this.getpublication();
    })
  }
}







