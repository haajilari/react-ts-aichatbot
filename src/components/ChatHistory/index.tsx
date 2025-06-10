import type { Message } from '@src/types';
import MessageBubble from '../MessageBubble';

interface ChatHistoryProps {
  messages: Message[];
  isTyping: boolean;
}

function ChatHistory({ messages, isTyping }: ChatHistoryProps) {
  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-400 text-sm rounded-lg px-4 py-2 self-start">
              Bot is typing...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatHistory;
