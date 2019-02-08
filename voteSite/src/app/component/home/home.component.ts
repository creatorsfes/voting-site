import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../../class/member';
import { TransportService } from './../../service/transport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public transportService: TransportService) { }

  ngOnInit() { }

  public scroll(el) {
    el.scrollIntoView();
  }

  public voteClick() {
    this.transportService.voteButtonToRoot(true);
  }
}
