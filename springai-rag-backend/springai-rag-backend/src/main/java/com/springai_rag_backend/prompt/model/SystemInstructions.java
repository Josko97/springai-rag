package com.springai_rag_backend.prompt.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SystemInstructions {
    private final String instructions;
}
