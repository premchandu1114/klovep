export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isSent: boolean;
  isDelivered: boolean;
  isRead?: boolean;
}

export interface User {
  id: string;
  name: string;
  isOnline: boolean;
}
