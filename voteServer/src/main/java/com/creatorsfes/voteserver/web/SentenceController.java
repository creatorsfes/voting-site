package com.creatorsfes.voteserver.web;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.creatorsfes.voteserver.domain.Sentence;
import com.creatorsfes.voteserver.domain.User;
import com.creatorsfes.voteserver.repository.SentenceRepository;
import com.creatorsfes.voteserver.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/sentence")
public class SentenceController {

	@Autowired
	SentenceRepository sRepository;

	@Autowired
	UserRepository uRepository;

	@GetMapping(path = "/result")
	public List<Sentence> getResult(OAuth2AuthenticationToken authentication) throws Exception {
		Iterable<User> allUser = uRepository.findAll();
		Iterator<User> userIterator = allUser.iterator();
		Iterator<Sentence> allSentence = sRepository.findAll().iterator();
		while (allSentence.hasNext()) {
			long[] bufCnt = { 0, 0 };
			Sentence sentence = allSentence.next();
			String sentenceName = sentence.getName();
			userIterator = allUser.iterator();
			while (userIterator.hasNext()) {
				User userBuf = userIterator.next();
				userBuf.getVoteList().forEach(key -> {
					if (sentenceName.equals(key)) {
						bufCnt[0] += 1;
					}
				});
				userBuf.getFutureList().forEach(key -> {
					if (sentenceName.equals(key)) {
						bufCnt[1] += 1;
					}
				});
			}
			sentence.setVoteCnt(bufCnt[0]);
			sentence.setFutureCnt(bufCnt[1]);
			sRepository.save(sentence);
		}
		allSentence = sRepository.findAll().iterator();
		List<Sentence> reSentences = new ArrayList<>();
		allSentence.forEachRemaining(reSentences::add);
		return reSentences;
	}

	@GetMapping
	public List<Sentence> getSentence(OAuth2AuthenticationToken authentication) throws Exception {
		List<Sentence> reSentences = new ArrayList<>();
		Iterator<Sentence> allSentence = sRepository.findAll().iterator();
		allSentence.forEachRemaining(reSentences::add);
		return reSentences;
	}

	@PostMapping
	public boolean createSentence(Sentence sentence, OAuth2AuthenticationToken authentication) throws Exception {
		sRepository.save(sentence);
		return true;
	}

}
