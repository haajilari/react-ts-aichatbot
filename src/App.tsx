import type { FC } from 'react';
import ChatHistory from './components/ChatHistory';
import MessageInput from './components/MessageInput';
import type { Message } from './types';

const App: FC = () => {
  const sampleMessages: Message[] = [
    { id: '1', text: 'Hello\! How can I help you today?', sender: 'bot' },
    { id: '2', text: 'Hi, I want to learn about React.', sender: 'user' },
    {
      id: '3',
      text: 'Great\! React is a popular JavaScript library for building user interfaces. Where should we start?',
      sender: 'bot',
    },
  ];

  return (
    <div className="bg-gray-900 h-screen flex flex-col font-sans">
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white text-center">AI Chatbot</h1>
      </header>
      <ChatHistory messages={sampleMessages} isTyping={true} />
      <MessageInput />
    </div>
  );
};

export default App;
