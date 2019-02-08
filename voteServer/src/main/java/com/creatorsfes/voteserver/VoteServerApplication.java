package com.creatorsfes.voteserver;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.creatorsfes.voteserver.domain.Sentence;
import com.creatorsfes.voteserver.repository.SentenceRepository;

@SpringBootApplication
public class VoteServerApplication implements CommandLineRunner {

	@Autowired
	SentenceRepository sRepository;

	public static void main(String[] args) {
		SpringApplication.run(VoteServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// sRepository.findByName("")
		if (sRepository.findAll().spliterator().getExactSizeIfKnown() < 1) {
			List<String> imageList = new ArrayList<>();
			imageList.add("assets/インデックスページ.png");
			imageList.add("assets/会議登録.png");
			Sentence sentence = new Sentence(0, "Maschera Veneziana", "ヴェネツィアン マスク",
					"・会議の内容（種類・目標・人員・時間）を登録する<br>・種類は「相談」「通達」「レビュー」、目標は「合意」「通知」「次週」<br>・メンバー追加では「Must」「Want」で「Must」では理由を書かなければアサインできない<br>・時間は、その議題の目安時間。20%以上延長した場合は次回に回す。<br>・登録時に全人員の工数をどれくらい使用するかが見えるようにする<br>・週次会議であっても登録内容がなかった場合は週次会議を行わない<br>・小日程や中日程の作成は会議と別にする<br><br>アプリへのリンク:<a href=\"http://maschera-veneziana.ddns.net/\" target=\"_blank\">http://maschera-veneziana.ddns.net/</a>",
					"assets/36145928.jpg", imageList, (long) 0, (long) 0);
			sRepository.save(sentence);
			imageList = new ArrayList<>();
			imageList.add("assets/チームすあまアピール.jpg");
			sentence = new Sentence(0, "チームすあま", "",
					"・現在Excelで管理しているユニリタの座席表をブラウザ上で管理できるようにする<br>・Excelファイルのダウンロードの手間を省き、ポータルから直接閲覧できるようにする<br>・社員の名前が分かれば最寄りの内線番号が分かるようにする<br>・編集者(総務部)が今までよりも座席の修正、管理がしやすいようなUIを目指す<br>",
					"assets/チームすあまチーム画像.jpg", imageList, (long) 0, (long) 0);
			sRepository.save(sentence);
			imageList = new ArrayList<>();
			sentence = new Sentence(0, "unirico.gr", "ユニリコ",
					"仮想通貨ではブロックチェーンと呼ばれる技術が採用されている。<br>しかし、ブロックチェーン自体は仮想通貨に特化したものではないことが判明した。<br>そこで、簡単なコメント投稿アプリを作成し、その過去ログに改ざん防止機能を追加するAPIをブロックチェーンの考え方を利用して実装する。<br><br>アプリへのリンク:<a href=\"http://13.230.35.214/\" target=\"_blank\">http://13.230.35.214/</a>",
					"", imageList, (long) 0, (long) 0);
			sRepository.save(sentence);
			imageList = new ArrayList<>();
			imageList.add("assets/image001.png");
			imageList.add("assets/image002.png");
			sentence = new Sentence(0, "みんなの残業減らし隊", "",
					"BIツールもどきを作ってみようということで、残業時間をグラフィック化するツールを作成しました。<br>現在、以下のような機能を提供しています。<br>・各部署メンバーの残業時間データを取り込み、残業時間をグラフィック化する機能<br>　　・部署ごとの平均、分散を可視化し、「どの部署の残業時間平均が大きいのか」「どの部署の残業時間のバラツキが大きいのか」を数値ではなく目で見て分かるように表示する機能<br>　　・特定の月のみの表示や、四半期ごとの表示などの期間指定表示機能<br><br>本ツールはあくまで可視化するだけなので、そこからどのように改善していくのか（あるいはそのままなのか）はこれを見た人たち（チーム）で考える、という使用方法を想定しています。<br><br>※現在はデモ用のダミーデータを使用して表示しています。<br><br>アプリへのリンク:<a href=\"http://13.230.142.246:8080/\" target=\"_blank\">http://13.230.142.246:8080/</a>",
					"", imageList, (long) 0, (long) 0);
			sRepository.save(sentence);
		}
	}
}
