import { Component, OnInit } from '@angular/core';
import { Sentence } from './../../class/sentence';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SentenceComponent } from './sentence/sentence.component';
import { User } from '../../class/user';
import { SentenceService } from './../../service/sentence.service';
import { UserService } from './../../service/user.service';
import { TransportService } from './../../service/transport.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  public sentenceList: Sentence[];
  public voteFlag: boolean[];
  public futureFlag: boolean[];

  constructor(public dialog: MatDialog, public userService: UserService, public sentenceService: SentenceService,
    public transportService: TransportService) { }

  ngOnInit() {
    this.sentenceList = [];
    // this.sentenceList.push(new Sentence(0, 'Maschera Veneziana', 'ヴェネツィアンマスク', '暫定内容（あったらいいな！アイデア募集より引用）<br>・会議の内容（種類・目標・人員・時間）を登録する<br>・種類は「相談」「通達」「レビュー」、目標は「合意」「通知」「次週」<br>・メンバー追加では「Must」「Want」で「Must」では理由を書かなければアサインできない<br>・時間は、その議題の目安時間。20%以上延長した場合は次回に回す。<br>・登録時に全人員の工数をどれくらい使用するかが見えるようにする<br>・週次会議であっても登録内容がなかった場合は週次会議を行わない<br>・小日程や中日程の作成は会議と別にする<br>・㊙機能搭載予定', 'assets/36145928.jpg',
    //   ['assets/座席表キャプチャ.PNG', 'assets/back2.jpg', 'assets/36145928.jpg'], 0));
    // this.voteList.push(new Sentence(1, 'チームすあま', '', '・現在Excelで管理しているユニリタの座席表をブラウザ上で管理できるようにする<br>・Excelファイルのダウンロードの手間を省き、ポータルから直接閲覧できるようにする<br>・社員の名前が分かれば最寄りの内線番号が分かるようにする<br>・編集者(総務部)が今までよりも座席の修正、管理がしやすいようなUIを目指す', 'assets/座席表キャプチャ.PNG',
    //   ['assets/座席表キャプチャ.PNG', 'assets/back2.jpg', 'assets/36145928.jpg'], 0));
    // this.voteList.push(new Sentence(2, 'unirico.gr', 'ユニリコ', '仮想通貨ではブロックチェーンと呼ばれる技術が採用されている。<br>しかし、ブロックチェーン自体は仮想通貨に特化したものではないことが判明した。<br>そこで、簡単なコメント投稿アプリを作成し、その過去ログに改ざん防止機能を追加するAPIをブロックチェーンの考え方を利用して実装する。<br><br>http://hiuchida.mydns.jp/', 'assets/ユニリコ.jpg',
    //   ['assets/座席表キャプチャ.PNG', 'assets/back2.jpg', 'assets/ユニリコ.jpg'], 0));
    // this.voteList.push(new Sentence(3, 'みんなの残業減らし隊', '', 'やりたいこと<br>BIツールもどきを作りたい<br>⇒残業時間をグラフィック化<br>・複数の部署とそこに属する人のデータを取り込み、グラフィック化する。<br>・部署ごとの平均、分散を可視化し、「どの部署の残業時間平均が大きいのか」「どの部署の残業時間のバラツキが大きいのか」を数値ではなく目で見て分かるようにする。<br>・あくまで可視化するだけなので、そこからどのように改善していくのか（あるいはそのままなのか）はこれを見た人たち（チーム）で考えてもらう', 'assets/みんなの残業減らしたい.jpg',
    //   ['assets/座席表キャプチャ.PNG', 'assets/back2.jpg', 'assets/みんなの残業減らしたい.jpg'], 0));
    // this.voteFlag = new Array(this.sentenceList.length);
    // this.futureFlag = new Array(this.sentenceList.length);
    // this.checkFlag();
    this.sentenceService.getAll().subscribe(res => {
      console.log(res);

      this.sentenceList = <any>res;
      this.voteFlag = new Array(this.sentenceList.length);
      this.futureFlag = new Array(this.sentenceList.length);
      this.checkFlag();
    });
  }

  checkFlag() {
    this.userService.getByMe().subscribe(user => {
      const buffer = <any>user;
      this.voteFlag = new Array(this.sentenceList.length);
      this.futureFlag = new Array(this.sentenceList.length);
      if (buffer.voteList != null) {
        for (let idx = 0; idx < this.sentenceList.length; idx++) {
          if (buffer.voteList.indexOf(this.sentenceList[idx].name) >= 0) {
            this.voteFlag[idx] = true;
          }
        }
      }

      if (buffer.futureList != null) {
        for (let idx = 0; idx < this.sentenceList.length; idx++) {
          if (buffer.futureList.indexOf(this.sentenceList[idx].name) >= 0) {
            this.futureFlag[idx] = true;
          }
        }
      }

    });
  }

  openDialog(idx: number): void {
    // document.body.style['overflow-y'] = 'hidden';
    let dialogRef = this.dialog.open(SentenceComponent, {
      // width: '100vw',
      // height: '100vh',

      maxWidth: '100vw',
      data: [this.sentenceList[idx], this.voteFlag[idx], this.futureFlag[idx], idx]
    });

    dialogRef.afterClosed().subscribe(result => {
      document.body.style['overflow-y'] = '';
      console.log('The dialog was closed');
      this.checkFlag();
    });
  }

  goodJobChange(idx: number): void {
    this.userService.getByMe().subscribe(user => {
      const buffer = <any>user;
      if (buffer.voteList != null) {
        const listIdx = buffer.voteList.indexOf(this.sentenceList[idx].name);
        if (listIdx != -1) {
          // buffer.voteList.splice(listIdx, 1);
          buffer.voteList = [];
        } else {
          buffer.voteList = [];
          buffer.voteList.push(this.sentenceList[idx].name);
        }
      } else {
        buffer.voteList = [];
        buffer.voteList.push(this.sentenceList[idx].name);
      }

      this.userService.vote(buffer).subscribe(res => {
        this.checkFlag();
      });
    },
      error => {
        console.log(error);
        this.transportService.loginToRoot(true);
      });
  }

  futureChange(idx: number): void {
    this.userService.getByMe().subscribe(user => {
      const buffer = <any>user;
      if (buffer.futureList != null) {
        const listIdx = buffer.futureList.indexOf(this.sentenceList[idx].name);
        if (listIdx != -1) {
          buffer.futureList.splice(listIdx, 1);
        } else {
          buffer.futureList.push(this.sentenceList[idx].name);
        }
      } else {
        buffer.futureList = [];
        buffer.futureList.push(this.sentenceList[idx].name);
      }

      this.userService.vote(buffer).subscribe(res => {
        this.checkFlag();
      });
    },
      error => {
        console.log(error);
        this.transportService.loginToRoot(true);
      });
  }

}
