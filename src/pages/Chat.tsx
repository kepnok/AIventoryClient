import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";

interface Message {
  sender: "user" | "assistant";
  text: string;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "assistant", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/ai",
        { prompt: input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const aiMessage = res.data?.content || "No response.";
      setMessages((prev) => [...prev, { sender: "assistant", text: aiMessage }]);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to fetch AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-50 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">AI Chat Assistant</h1>

        <div
          ref={chatRef}
          className="bg-white rounded-lg shadow-sm p-4 mb-4 space-y-4 overflow-y-auto h-[83vh]"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-md max-w-xl ${
                msg.sender === "user"
                  ? "bg-blue-100 text-right ml-auto"
                  : "bg-gray-100 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="text-sm text-gray-500 italic">Assistant is typing...</div>
          )}
        </div>

        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-md text-sm"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button text="Send" variant="primary" size="md" onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
}
