package com.creatorsfes.voteserver.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.creatorsfes.voteserver.domain.User;
import com.creatorsfes.voteserver.repository.UserRepository;
import com.creatorsfes.voteserver.service.GoogleUserService;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

	@Autowired
	private GoogleUserService googleUserService;

	@Autowired
	private UserRepository uRepository;

	@GetMapping(path = "/me")
	public User googleMe(OAuth2AuthenticationToken authentication) throws Exception {
		String googleId = authentication.getPrincipal().getName();
		User user = googleUserService.getGoogleUser(googleId);
		Optional<User> userOptional = uRepository.findById(user.getId());
		User dbUser = userOptional.orElse(null);
		if (dbUser == null) {
			uRepository.save(user);
		} else {
			user.setVoteList(dbUser.getVoteList());
			user.setFutureList(dbUser.getFutureList());
		}

		return user;
	}

	@PostMapping(path = "/vote")
	public User voteSentence(@RequestBody User voteUser, OAuth2AuthenticationToken authentication) throws Exception {

		Optional<User> opUser = uRepository.findById(voteUser.getId());
		User user = opUser.orElse(null);

		if (user == null) {
			return user;
		}
		user.setVoteList(voteUser.getVoteList());
		user.setFutureList(voteUser.getFutureList());

		uRepository.save(user);
		return user;
	}


	
}
