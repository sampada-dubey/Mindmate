package com.mindmate.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.mindmate.model.ChatRequest;


import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")

public class ChatController
{
    @PostMapping("/send-message")
    public ResponseEntity<?> sendMessage(@RequestBody ChatRequest request)
    {
        String userMessage = request.getMessage();

        RestTemplate restTemplate = new RestTemplate();
        String mlUrl = "http://localhost:5000/analyze";

        Map<String, String> payload = new HashMap<>();
        payload.put("message", userMessage);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(payload, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(mlUrl, entity, String.class);
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("ML Service not responding.");
        }
    }
}
