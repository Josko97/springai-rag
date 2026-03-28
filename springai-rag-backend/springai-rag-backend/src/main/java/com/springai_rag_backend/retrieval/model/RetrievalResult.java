package com.springai_rag_backend.retrieval.model;

import com.springai_rag_backend.chunking.model.Chunk;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RetrievalResult {

    private List<Chunk> chunks;
}
