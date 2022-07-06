package ch.cimen.chatapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatroomController {

    private final Logger logger = LoggerFactory.getLogger(ChatroomController.class);
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    public ChatroomController() {}

    @MessageMapping("/chat")
    public Message send(@DestinationVariable String roomName, Message message) {
        logger.info(message.getName() + ": " + message.getMessage());
        if (message.getMessage() == null || message.getMessage().equals("")) return null;
        if (message.getName() == null || message.getName().equals("")) return null;
        simpMessagingTemplate.convertAndSend("/topic/"+roomName, message);
        return message;
    }
}
