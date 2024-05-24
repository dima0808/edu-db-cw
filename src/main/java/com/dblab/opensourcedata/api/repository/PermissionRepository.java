package com.dblab.opensourcedata.api.repository;

import com.dblab.opensourcedata.api.entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PermissionRepository extends JpaRepository<Permission, Long> {

    Optional<Permission> findByType(String type);
}
