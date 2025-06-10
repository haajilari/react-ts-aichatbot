function MessageInput() {
  return (
    <div className="p-4 bg-gray-800 border-t border-gray-700">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow bg-gray-700 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white font-semibold rounded-full px-5 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50">
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
