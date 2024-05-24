package com.dblab.opensourcedata.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DatafileDto {

    private String name;
    private String content;
    private String description;
    private String format;
}
