import type { Message } from '@src/types';

interface MessageBubbleProps {
  message: Message  ;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';

  // Base classes for all bubbles
  const bubbleClasses = 'max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2';

  // Conditional classes for user vs. bot
  const userBubbleClasses = 'bg-blue-600 text-white self-end';
  const botBubbleClasses = 'bg-gray-700 text-gray-200 self-start';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`${bubbleClasses} ${isUser ? userBubbleClasses : botBubbleClasses}`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default MessageBubble;
