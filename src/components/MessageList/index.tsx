import React from "react";
import { ScrollView } from "react-native";
import { Message } from "../Message";
import { styles } from "./styles";

export function MessageList() {
    const message ={
        id: "string",
        text: "string",
        user:{
            name: "Celso Jr",
            avatar_url: 'https://github.com/CELS0.png',
        }
    }
    return (
        <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps='never'
        >
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
        </ScrollView>
    )
}
