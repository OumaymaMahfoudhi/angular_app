import { Component, OnInit } from '@angular/core';
import { publication } from '../publication';
import { ActivatedRoute } from '@angular/router';
import { PublicationServiceService } from '../publication-service.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {

    id !: number
    publication !: publication;
    constructor(private route: ActivatedRoute, private PublicationService : PublicationServiceService){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.publication = new publication();
    this.PublicationService.getPublicationById(this.id).subscribe( data => {
      this.publication = data;
    });
  }

}









