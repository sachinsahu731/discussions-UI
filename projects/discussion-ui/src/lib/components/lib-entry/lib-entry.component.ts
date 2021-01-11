import { DiscussionService } from './../../services/discussion.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

/* tslint:disable */
import * as _ from 'lodash'
/* tslint:enable */
@Component({
  selector: 'lib-lib-entry',
  templateUrl: './lib-entry.component.html',
  styleUrls: ['./lib-entry.component.css']
})
export class LibEntryComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    private discussionService: DiscussionService,
    private location: Location
  ) { }

  ngOnInit() {  }

  goBack() {
    this.location.back();
  }

}
