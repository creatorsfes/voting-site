package com.creatorsfes.voteserver.domain;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sentence {
	
	@Id
	@GeneratedValue
    private long id;

	private String name;
	private String romaname;
	@Size(max = 2048)
	private String comment;
	@Size(max = 2048)
	private String headerimage;
	
	@ElementCollection
	private List<String> image;
	private Long voteCnt;
	private Long futureCnt;
	
}
