package com.creatorsfes.voteserver.repository;

import org.springframework.data.repository.CrudRepository;

import com.creatorsfes.voteserver.domain.Sentence;

public interface SentenceRepository extends CrudRepository<Sentence, String> {
	Sentence findByName(String name);
}
