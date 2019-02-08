package com.creatorsfes.voteserver.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.creatorsfes.voteserver.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
