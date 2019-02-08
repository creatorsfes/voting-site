import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TransportService {

  // Observable string sources
  private voteButtonToRootSource = new Subject<boolean>();
  private loginToRootSource = new Subject<boolean>();

  // Observable string streams
  voteButtonToRoot$ = this.voteButtonToRootSource.asObservable();
  loginToRoot$ = this.loginToRootSource.asObservable();

  // Service message commands
  voteButtonToRoot(voteButton: boolean) {
    this.voteButtonToRootSource.next(voteButton);
  }

  loginToRoot(loginFlag: boolean) {
    this.loginToRootSource.next(loginFlag);
  }


}
