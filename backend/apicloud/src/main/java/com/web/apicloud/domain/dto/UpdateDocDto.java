package com.web.apicloud.domain.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UpdateDocDto {
    private Long docId;

    private String docsName;

    private String serverUrl;

    private String contextUri;

    private String javaVersion;

    private String springVersion;

    private String buildManagement;

    private String groupPackage;

    private String packageName;

    private String packaging;

    private Long groupId;

    private String detail;

}
