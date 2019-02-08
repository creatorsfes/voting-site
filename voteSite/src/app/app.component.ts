import { TransportService } from './service/transport.service';
import { UserService } from './service/user.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppInfoService } from './service/app-info.service';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  public userName: string;
  public homeFlag: boolean;
  public voteFlag: boolean;
  private baseUrl = environment.baseUrl;
  private firstFlag: boolean;

  constructor(
    private appInfoService: AppInfoService,
    private userService: UserService,
    private titleService: Title,
    public dialog: MatDialog,
    public transportService: TransportService,
    location: LocationStrategy) {
    document.title = 'Creators Fes | home'
    this.firstFlag = true;
    location.onPopState(() => {
      console.log('change');
      this.urlConverter();
    });
    this.transportService.voteButtonToRoot$.subscribe(voteButton => {
      this.showVote();
    });
    this.transportService.loginToRoot$.subscribe(loginFlag => {
      this.login();
    });
  }

  public ngOnInit() {
    this.userName = ''
    this.homeFlag = true;
    this.voteFlag = false;
    this.getName();
  }

  public getName() {
    this.userService.getByMe().subscribe(user => {
      localStorage.setItem('userName', user['name']);
      localStorage.setItem('userAddress', user['email']);
      localStorage.setItem('userVoteList', user['voteList']);
      console.log(user);
      this.userName = user['name'];
      this.firstFlag = false;
    },
      error => {
        console.log(error);
        this.firstFlag = false;
        if (this.voteFlag) {
          this.login();
        }
      });
  }

  public ngAfterViewInit() {
    this.urlConverter();
  }

  public login(): void {
    localStorage.setItem('beforeLoginPage', document.location.hash);
    location.href = this.baseUrl + 'oauth2/authorization/google'
  }

  public logout(): void {
    this.appInfoService.sendLogout().subscribe(res => {
      history.pushState('', '', '');
      location.reload();
    }, error => {
      history.pushState('', '', '');
      location.reload();
      console.log(error);
    });
  }

  public showHome(callFalg = true): void {
    this.homeFlag = true;
    this.voteFlag = false;
    document.title = 'Creators Fes | home'
    if (callFalg) {
      history.pushState('', '', '#home&');
    }
  }

  public showVote(callFalg = true): void {
    this.homeFlag = false;
    this.voteFlag = true;
    document.title = 'Creators Fes | 投票'
    if (callFalg) {
      history.pushState('', '', '#vote&');
    }
    if (!this.userName && !this.firstFlag) {
      this.login();
    } else {
      this.getName();
    }
  }

  private urlConverter() {
    if (localStorage.getItem('beforeLoginPage') != null) {
      document.location.hash = localStorage.getItem('beforeLoginPage')
      localStorage.removeItem('beforeLoginPage')
    }
    if (2 < document.location.hash.length) {
      const query = document.location.hash.substring(1);
      const parameters = query.split('&');
      if (parameters[0] == 'home') {
        this.showHome(false);
      } else if (parameters[0] == 'vote') {
        this.showVote(false);
      }
    } else {
      this.showHome(false);
    }
  }

}
