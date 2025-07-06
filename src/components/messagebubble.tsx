import { Check, CheckCheck } from "lucide-react";
import { Message } from "@/types/message"; // lowercase ✅
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const formatTime = (timestamp: any) => {
    const date =
      typeof timestamp?.toDate === "function"
        ? timestamp.toDate()
        : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-4",
        message.isSent ? "items-end" : "items-start"
      )}
    >
      <div
        className={cn(
          "message-bubble",
          message.isSent ? "message-sent" : "message-received"
        )}
      >
        <p className="break-words">{message.content}</p>
      </div>
      <div className="flex items-center mt-1">
        <span className="message-time">{formatTime(message.timestamp)}</span>
        {message.isSent && (
          <div className="delivery-status">
            {message.isDelivered ? (
              <CheckCheck className="w-4 h-4 text-primary" />
            ) : (
              <Check className="w-4 h-4" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
