package com.springai_rag_backend.ingestion;

import com.springai_rag_backend.ingestion.db.DatabaseIngestionService;
import com.springai_rag_backend.ingestion.model.IngestedDocument;
import com.springai_rag_backend.ingestion.pdf.PdfIngestionService;
import com.springai_rag_backend.ingestion.wiki.WikiIngestionService;
import com.springai_rag_backend.lifecycle.model.KnowledgeRequest;
import com.springai_rag_backend.lifecycle.model.SourceType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IngestionOrchestrator {

    private final PdfIngestionService  pdfIngestionService;
    private final WikiIngestionService  wikiIngestionService;
    private final DatabaseIngestionService   databaseIngestionService;

    public List<IngestedDocument> ingest(KnowledgeRequest request) throws Exception{
        SourceType source = request.getSourceType();
        if (source.equals(SourceType.PDF)) {
            return pdfIngestionService.ingest(request.getName());
        }
        if (source.equals(SourceType.WIKI)) {
            return wikiIngestionService.ingest(request.getName());
        }
        if (source.equals(SourceType.DATABASE)) {
            return databaseIngestionService.ingest(request.getName());
        }
        return Collections.emptyList();
    }

    public List<IngestedDocument> ingestAll() throws  Exception {
        List<IngestedDocument> docs = new ArrayList<>();
        docs.addAll(pdfIngestionService.ingestPdfs());
        docs.addAll(wikiIngestionService.ingestWikiFiles());
        docs.addAll(databaseIngestionService.ingestDatabaseContent());
        return docs;
    }

}
