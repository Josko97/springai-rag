package com.springai_rag_backend.retrieval;

import com.springai_rag_backend.retrieval.model.RetrievalResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@Slf4j
public class RetrievalService {

    public RetrievalResult retrieve(String query) {
        log.info("Retrieval requested for query: {}", query);

        // TODO: Implement retrieval

        return new RetrievalResult(Collections.emptyList());
    }
}
