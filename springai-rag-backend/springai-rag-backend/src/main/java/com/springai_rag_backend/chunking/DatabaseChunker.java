package com.springai_rag_backend.chunking;

import com.springai_rag_backend.chunking.model.Chunk;
import com.springai_rag_backend.ingestion.model.IngestedDocument;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DatabaseChunker {

    public List<Chunk> chunk(IngestedDocument document) {
        return List.of(
                new Chunk(
                        document.getSource(),
                        document.getContent(),
                        document.getMetadata(),
                        0
                ));
    }
}
