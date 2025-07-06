import { chatinterface } from "@/components/chatinterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
      
      {/* Your 2-person chat interface */}
      <ChatInterface />
    </div>
  );
};

export default Index;
