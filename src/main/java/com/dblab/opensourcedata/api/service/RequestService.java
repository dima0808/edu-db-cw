package com.dblab.opensourcedata.api.service;

import com.dblab.opensourcedata.api.dto.RequestDto;
import com.dblab.opensourcedata.api.entity.Datafile;
import com.dblab.opensourcedata.api.entity.Request;

import java.util.List;

public interface RequestService {

    List<Request> findAll();

    Request findById(Long requestId);

    Request createRequest(RequestDto requestDto);

    Request editRequest(Long dataId, RequestDto requestDto);

    Datafile approveRequest(Long requestId);

    void denyRequest(Long requestId);
}
