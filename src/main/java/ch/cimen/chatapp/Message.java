package ch.cimen.chatapp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
@Setter
public class Message {

    private String name;
    private String message;
    private String image64;
    private String id;
}
