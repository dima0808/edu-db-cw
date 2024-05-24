package com.dblab.opensourcedata.api.dto;

import com.dblab.opensourcedata.api.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SignUpDto {

    private String username;
    private String email;
    private String password;

    private Set<Role> roles;
}