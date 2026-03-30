package com.springai_rag_backend.lifecycle.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class KnowledgeRequest {
    private final SourceType sourceType;
    private final String name;
}
