import { Component, OnInit } from '@angular/core';

import { PublicationServiceService } from '../publication-service.service';
import { publication } from '../publication';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent implements OnInit {

  
  id !: number;
  publication: publication= new publication();
  constructor(private PublicationService: PublicationServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.PublicationService.getPublicationById(this.id).subscribe(data => {
      this.publication = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.PublicationService.updatePublication(this.id, this.publication).subscribe( data =>{
      this.goToPublicationList();
    }, error => console.log("famesh update"));
  }

  goToPublicationList(){
    this.router.navigate(['/publication']);
  }

}




