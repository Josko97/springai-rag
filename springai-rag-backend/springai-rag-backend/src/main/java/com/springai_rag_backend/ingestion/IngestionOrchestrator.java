package com.springai_rag_backend.ingestion;

import com.springai_rag_backend.ingestion.db.DatabaseIngestionService;
import com.springai_rag_backend.ingestion.model.IngestedDocument;
import com.springai_rag_backend.ingestion.pdf.PdfIngestionService;
import com.springai_rag_backend.ingestion.wiki.WikiIngestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IngestionOrchestrator {

    private final PdfIngestionService pdfIngestionService;
    private final WikiIngestionService wikiIngestionService;
    private final DatabaseIngestionService databaseIngestionService;

    public List<IngestedDocument> ingestAll() throws  Exception {
        List<IngestedDocument> docs = new ArrayList<>();
        docs.addAll(pdfIngestionService.ingestPdfs());
        docs.addAll(wikiIngestionService.ingestWikiFiles());
        docs.addAll(databaseIngestionService.ingestDatabaseContent());
        return docs;
    }

}
