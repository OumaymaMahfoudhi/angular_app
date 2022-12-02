import { Component, OnInit } from '@angular/core';

import { publication } from '../publication';
import { PublicationServiceService } from '../publication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  Publication: publication = new publication();
  constructor(private PublicationService: PublicationServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePublication(){
    this.PublicationService.createPublication(this.Publication).subscribe( data =>{
      this.goToPublicationList();
      
    },
    error => console.log(error));
  }

  goToPublicationList(){
    this.router.navigate(['/publication']);
    console.log("data send",this.Publication);
  }

  onSubmit(){
    console.log(this.Publication);
    this.savePublication();
  }


}

