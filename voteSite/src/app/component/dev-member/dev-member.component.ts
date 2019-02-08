import { Component, OnInit } from '@angular/core';
import { Member } from '../../class/member';

@Component({
  selector: 'app-dev-member',
  templateUrl: './dev-member.component.html',
  styleUrls: ['./dev-member.component.scss']
})
export class DevMemberComponent implements OnInit {

  public memberList: Member[];
  public specialList: Member[];
  constructor() { }

  ngOnInit() {
    this.memberList = [];
    this.memberList.push(new Member(0, '鈴木 佑輔', 'Yusuke Suzuki', '考えたアイデアを形にするイベントがあったら面白そうということで、Creators Fesを企画。同じ若手メンバーで四苦八苦しながら運営中。<br>休日は車いじりや、AIを使った仮想通貨のシストレツールの作成。<br>', 'assets/97760.jpg'));
    this.memberList.push(new Member(1, '埜口 将寛', 'Masahiro Noguchi', '他のIT企業で、普段の業務と関係無いものを（IT、非IT関わらず）作る文化のある会社が結構あることを知り、ユニリタでも何かできないかと思い、今回の企画に至りました。<br>普段は音楽を聴いたりライブを見に行ったり、たまに映画とかも行きます。<br>', 'assets/97761.jpg'));
    this.memberList.push(new Member(2, '村山 善彦', 'Yoshihiko Murayama', '​鈴木の熱意に突き動かされ、Creators Fesの運営ならびに開発に参加。<br>趣味はバイク。ただし梅雨に入るため、別の楽しみとしてNintendo Laboの購入を検討中...。<br>', 'assets/97762.jpg'));
    this.memberList.push(new Member(3, '木内 太郎', 'Taro Kiuchi', '一番の若手だが、アプリ開発のイベントに参加したいと思い、運営として参加。<br>趣味は映画鑑賞。<br>今一番見たい映画は「レディ・プレイヤー1」。​<br>', 'assets/97937.jpg'));
    this.specialList = [];
    this.specialList.push(new Member(0, '打田 宏', 'Hiroshi Uchida', '', ''));
    this.specialList.push(new Member(1, '金子 隆一郎', 'Ryuichiro Kaneko', '', ''));
  }

}
