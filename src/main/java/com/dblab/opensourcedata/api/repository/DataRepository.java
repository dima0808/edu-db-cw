package com.dblab.opensourcedata.api.repository;

import com.dblab.opensourcedata.api.entity.Datafile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataRepository extends JpaRepository<Datafile, Long> {

}
