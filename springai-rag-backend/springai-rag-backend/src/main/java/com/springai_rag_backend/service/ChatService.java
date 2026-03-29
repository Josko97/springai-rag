package com.springai_rag_backend.service;

import com.springai_rag_backend.chunking.model.Chunk;
import com.springai_rag_backend.dto.ChatRequest;
import com.springai_rag_backend.dto.ChatResponse;
import com.springai_rag_backend.prompt.PromptOrchestrator;
import com.springai_rag_backend.prompt.model.ChatPrompt;
import com.springai_rag_backend.retrieval.RetrievalService;
import com.springai_rag_backend.retrieval.model.RetrievalResult;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatClient chatClient;

    private final PromptOrchestrator promptOrchestrator;

    public ChatResponse chat(ChatRequest request) {
        String userMessage = request.getMessage();

        ChatPrompt chatPrompt = promptOrchestrator.build(userMessage);

        String llmInput = chatPrompt.getGroundingRule()
                + "\n\n"
                + chatPrompt.getContext().getContextText()
                + "\n\nUser Question:\n"
                + userMessage;

        String aiResponse = chatClient.prompt()
                .system(chatPrompt.getSystemInstructions().getInstructions())
                .user(llmInput)
                .call().content();

        return new ChatResponse(aiResponse);
    }
}
