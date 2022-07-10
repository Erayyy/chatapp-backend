package ch.cimen.chatapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatroomController {

    private final Logger logger = LoggerFactory.getLogger(ChatroomController.class);
    private SimpMessagingTemplate template;

    @MessageMapping("/send/{room}")
    @SendTo("/topic/{room}")
    public Message send(@DestinationVariable String room, Message message) {
        logger.info(message.getName() + ": " + message.getMessage());
        logger.info("Sent to "+room);
        if (message.getMessage() == null || message.getMessage().equals("")) return null;
        if (message.getName() == null || message.getName().equals("")) return null;
        return message;
    }
}
