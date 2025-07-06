import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ChatHeader } from "@/components/chatheader";
import { MessageBubble } from "@/components/messagebubble";
import { MessageInput } from "@/components/messageinput";

export const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-md mx-auto border border-border rounded-lg overflow-hidden shadow-md">
      <ChatHeader user={{ name: "Alex", status: "Online" }} />
      <div className="p-4 h-[400px] overflow-y-auto bg-background text-foreground">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>
      <MessageInput />
    </div>
  );
};
