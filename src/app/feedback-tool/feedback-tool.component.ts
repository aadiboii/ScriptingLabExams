import { Component, OnInit } from '@angular/core';
import { FeedbackDataService } from '../feedback-data.service';

@Component({
  selector: 'app-feedback-tool',
  templateUrl: './feedback-tool.component.html',
  styleUrls: ['./feedback-tool.component.css']
})
export class FeedbackToolComponent implements OnInit {
  newreg : string;
  newteacher :string;
  novelty: number;
  feasibilty: number;
  pres: number;
  report: number;
  viva: number;

  newscore :number;
  constructor(
    private fbService: FeedbackDataService // inject service
  ) { }

  ngOnInit( ): void {}

  add() {
    console.log(this.newreg, this.newteacher, (this.novelty+this.feasibilty+this.pres+this.report+this.viva) );
    this.fbService.submit(this.newreg, this.newteacher,(this.novelty+this.feasibilty+this.pres+this.report+this.viva)  )
  }

}
