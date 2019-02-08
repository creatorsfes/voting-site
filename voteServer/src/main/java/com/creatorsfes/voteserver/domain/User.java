package com.creatorsfes.voteserver.domain;

import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class User {
	
	@Id
    private String id;

    private String name;

    private String email;

	@ElementCollection
    private List<String> voteList;

	@ElementCollection
    private List<String> futureList;

	public User() {
	}

	public User(String name, String email) {
		this.name = name;
		this.email = email;
	}

}
