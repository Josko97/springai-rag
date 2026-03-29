package com.springai_rag_backend.service;

import com.springai_rag_backend.chunking.model.Chunk;
import com.springai_rag_backend.dto.ChatRequest;
import com.springai_rag_backend.dto.ChatResponse;
import com.springai_rag_backend.retrieval.RetrievalService;
import com.springai_rag_backend.retrieval.model.RetrievalResult;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatClient chatClient;
    private final RetrievalService retrievalService;

    public ChatResponse chat(ChatRequest request) {
        String userMessage = request.getMessage();

        RetrievalResult retrievalResult = retrievalService.retrieve(userMessage);
        String context = buildContext(retrievalResult);

        String aiResponse = chatClient.prompt()
                .system(context)
                .user(request.getMessage())
                .call().content();

        return new ChatResponse(aiResponse);
    }

    private String buildContext(RetrievalResult retrievalResult) {
        StringBuilder contextBuilder = new StringBuilder();
        for (Chunk chunk : retrievalResult.getChunks()) {
            contextBuilder.append(chunk.getContent()).append("\n\n");
        }

        return contextBuilder.toString();
    }
}
