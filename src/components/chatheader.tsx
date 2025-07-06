import { Circle, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/types/message"; // ✅ lowercase import

interface ChatHeaderProps {
  user: User;
}

export const ChatHeader = ({ user }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border bg-card">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-semibold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          {user.isOnline && (
            <Circle className="absolute -bottom-1 -right-1 w-4 h-4 text-green-500 fill-current" />
          )}
        </div>
        <div>
          <h2 className="font-semibold text-foreground">{user.name}</h2>
          <p className="text-sm text-muted-foreground">
            {user.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="text-muted-foreground">
        <MoreVertical className="w-5 h-5" />
      </Button>
    </div>
  );
};
