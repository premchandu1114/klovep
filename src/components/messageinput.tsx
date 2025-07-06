import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button"; // make sure the path & file are lowercase
import { Input } from "@/components/ui/input";   // same here
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const MessageInput = () => {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (text.trim() === "") return;

    await addDoc(collection(db, "messages"), {
      content: text, // use "content" to match your Message type
      sender: "you", // optional: replace with actual username
      isSent: true,
      isDelivered: true, // assume delivered for now
      timestamp: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div className="flex p-2 border-t border-border gap-2">
      <Input
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <Button onClick={sendMessage}>
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
};
