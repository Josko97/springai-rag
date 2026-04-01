package com.springai_rag_backend.controller;


import com.springai_rag_backend.dto.ChatRequest;
import com.springai_rag_backend.dto.ChatResponse;
import com.springai_rag_backend.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
class ChatController {

    private final ChatService chatService;

    @PostMapping("/chat")
    public ChatResponse chat(@RequestBody ChatRequest request) {
        return chatService.chat(request);
    }

}
