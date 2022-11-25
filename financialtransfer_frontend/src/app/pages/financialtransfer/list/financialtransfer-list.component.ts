import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-financialtransfer-list',
    templateUrl: './financialtransfer-list.component.html',
    styleUrls: ['./financialtransfer-list.component.scss']
  
  })
  export class FinancialtransferListComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
      ) { }

    ngOnInit(): void {
        
    }
}