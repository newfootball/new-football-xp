import React from "react";

export default function MessageList() {
  const messages = [
    {
      id: 1,
      name: "marilio5",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "You owe me money! Respond!",
      time: "Just now",
    },
    {
      id: 2,
      name: "lea.98",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "You: I'm afraid he will sue me for that but wh...",
      time: "12 min.",
    },
    {
      id: 3,
      name: "gabriel.g",
      avatar: "/placeholder.svg?height=48&width=48",
      text: "Hello, can you answer? What's wrong with",
      time: "1 d.",
    },
  ];

  return (
    <div className="space-y-4 px-4">
      {messages.map((message) => (
        <div key={message.id} className="flex items-center space-x-3">
          <img
            src={message.avatar}
            alt={message.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{message.name}</h3>
            <p className="text-sm text-gray-500">{message.text}</p>
          </div>
          <span className="text-xs text-gray-400">{message.time}</span>
        </div>
      ))}
    </div>
  );
}
