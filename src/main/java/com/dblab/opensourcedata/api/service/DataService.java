package com.dblab.opensourcedata.api.service;

import com.dblab.opensourcedata.api.dto.DatafileDto;
import com.dblab.opensourcedata.api.entity.Datafile;

import java.util.List;

public interface DataService {

    Datafile findById(Long id);

    List<Datafile> findAll();

    Datafile create(DatafileDto datafileDto);

    Datafile save(Datafile datafile);
}
