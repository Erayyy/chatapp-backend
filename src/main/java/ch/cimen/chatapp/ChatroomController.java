package ch.cimen.chatapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatroomController {

    private final Logger logger = LoggerFactory.getLogger(ChatroomController.class);

    @MessageMapping("/send/{room}")
    @SendTo("/topic/{room}")
    public Message send(@DestinationVariable String room, Message message) {
        if (message.getName() == null || message.getName().equals("")) return null;
        if (message.getMessage() == null || message.getMessage().equals(""))
                if (message.getImage64() == null) return null;

        return message;
    }
}
