import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi there! 👋 I am your Pet Care Assistant. I can help you with information about pet adoption, pet care, and more. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simple AI responses based on keywords
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Pet adoption related
    if (lowerMessage.includes('adopt') || lowerMessage.includes('adoption')) {
      return 'We have a wonderful selection of pets available for adoption! You can browse all available pets in the "Adoption" section. Each pet has detailed information including breed, age, and health status.';
    }

    // Pet care related
    if (lowerMessage.includes('care') || lowerMessage.includes('health')) {
      return 'Great question! Taking care of a pet involves proper nutrition, regular exercise, veterinary checkups, and lots of love. For specific advice, I recommend consulting with a veterinarian.';
    }

    // About specific animals
    if (lowerMessage.includes('dog')) {
      return 'Dogs are wonderful companions! They require regular walks, proper training, and socialization. Different breeds have different energy levels and care requirements.';
    }

    if (lowerMessage.includes('cat')) {
      return 'Cats are independent and affectionate pets! They need a safe environment, regular feeding, litter box maintenance, and playtime. Many cats enjoy interactive toys and scratching posts.';
    }

    // Process adoption requests
    if (lowerMessage.includes('request') || lowerMessage.includes('apply')) {
      return 'To apply for adoption, please visit the "Adoption Requests" section where you can submit your application. Our team will review it and connect with you soon!';
    }

    // History/records
    if (lowerMessage.includes('history') || lowerMessage.includes('record')) {
      return 'You can view all adoption history and records in the "History" section of your dashboard. This shows completed adoptions and their details.';
    }

    // Cost/fees
    if (lowerMessage.includes('cost') || lowerMessage.includes('fee') || lowerMessage.includes('price')) {
      return 'For information about adoption fees and costs, please contact our team directly. We ensure all fees cover proper care and health checks for our animals.';
    }

    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! Welcome to our Pet Care platform. How can I assist you today? Feel free to ask about adoption, pet care, or any other questions!';
    }

    // Default response
    return 'Thank you for your question! I\'m here to help with information about pet adoption and care. Could you provide more details about what you\'d like to know?';
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        text: 'Hi there! 👋 I am your Pet Care Assistant. I can help you with information about pet adoption, pet care, and more. How can I help you today?',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <i className="fas fa-robot"></i>
            Pet Care Assistant
          </div>
          <div className="chatbot-controls">
            <button
              className="chatbot-clear-btn"
              onClick={handleClearChat}
              title="Clear chat"
              aria-label="Clear chat"
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`chatbot-message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chatbot-message bot">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            aria-label="Chat message input"
          />
          <button
            type="submit"
            className="chatbot-send-btn"
            disabled={isLoading || !inputValue.trim()}
            aria-label="Send message"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>

      {/* Chat Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
        title="Chat with AI Assistant"
      >
        <i className="fas fa-comments"></i>
        {!isOpen && <span className="notification-badge">Ask me!</span>}
      </button>
    </div>
  );
};

export default ChatBot;
