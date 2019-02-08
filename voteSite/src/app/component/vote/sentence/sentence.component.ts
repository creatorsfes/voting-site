import { TransportService } from './../../../service/transport.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Sentence } from '../../../class/sentence';
import { SentenceService } from '../../../service/sentence.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit {

  public selectMainImg: string;
  public sentenceList: Sentence[];
  public selectIdx: number;

  constructor(public dialogRef: MatDialogRef<SentenceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService,
    public sentenceService: SentenceService,
    public transportService: TransportService) { }

  ngOnInit() {
    this.selectMainImg = this.data[0].image[0];
    this.sentenceList = this.data[0];
    this.selectIdx = this.data[3];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectImg(iUrl: string): void {
    this.selectMainImg = iUrl;
  }

  goodJobChange(): void {
    this.userService.getByMe().subscribe(user => {
      const buffer = <any>user;
      if (buffer.voteList != null) {
        const listIdx = buffer.voteList.indexOf(this.data[0].name);
        if (listIdx != -1) {
          // buffer.voteList.splice(listIdx, 1);
          buffer.voteList = []
        } else {
          buffer.voteList = [];
          buffer.voteList.push(this.data[0].name);
        }
      } else {
        buffer.voteList = [];
        buffer.voteList.push(this.data[0].name);
      }

      this.userService.vote(buffer).subscribe(res => {
        this.data[1] = !this.data[1];
      });
    },
      error => {
        console.log(error);
        this.transportService.loginToRoot(true);
      });
  }

  futureChange(): void {
    this.userService.getByMe().subscribe(user => {
      const buffer = <any>user;
      if (buffer.futureList != null) {
        const listIdx = buffer.futureList.indexOf(this.data[0].name);
        if (listIdx != -1) {
          buffer.futureList.splice(listIdx, 1);
        } else {
          buffer.futureList.push(this.data[0].name);
        }
      } else {
        buffer.futureList = [];
        buffer.futureList.push(this.data[0].name);
      }

      this.userService.vote(buffer).subscribe(res => {
        this.data[2] = !this.data[2];
      });
    },
      error => {
        console.log(error);
        this.transportService.loginToRoot(true);
      });
  }


}
