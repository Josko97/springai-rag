package com.springai_rag_backend.prompt;

import com.springai_rag_backend.prompt.model.ChatPrompt;
import com.springai_rag_backend.prompt.model.PromptContext;
import com.springai_rag_backend.prompt.model.SystemInstructions;
import com.springai_rag_backend.retrieval.RetrievalService;
import com.springai_rag_backend.retrieval.model.RetrievalResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PromptOrchestrator {

    private final RetrievalService retrievalService;
    private final ContextBuilder contextBuilder = new ContextBuilder();
    private final SystemPromptLoader systemPromptLoader = new SystemPromptLoader();
    private final GroundingPolicy groundingPolicy = new GroundingPolicy();

    public ChatPrompt build(String question) {

        RetrievalResult retrievalResult = retrievalService.retrieve(question);

        PromptContext promptContext = contextBuilder.build(retrievalResult);

        String rule = groundingPolicy.groundingRules(promptContext);

        SystemInstructions systemInstructions = systemPromptLoader.load();

        return new ChatPrompt(systemInstructions, promptContext, rule);
    }
}
