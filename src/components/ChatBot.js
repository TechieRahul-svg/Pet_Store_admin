<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatBot.css';
>>>>>>> 0ed70e0f007f3c3788304c8a51869c012c88de2e

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
<<<<<<< HEAD
      text: 'Hi! 👋 Welcome to VetDoctor! I can help you navigate the app. Ask me about: updating slots, viewing appointments, work history, or any questions about our services!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const knowledgeBase = {
    updateSlot: {
      keywords: ['update slot', 'manage slot', 'change slot', 'set availability', 'edit time', 'modify timing'],
      response: '🔄 To update your daily slots: 1️⃣ Click on "My Availability" in the sidebar, 2️⃣ You\'ll see all your time slots (9 AM - 8 PM), 3️⃣ Click the toggle button next to each time to enable/disable, 4️⃣ Adjust capacity numbers as needed, 5️⃣ Changes are saved instantly! Your availability updates in real-time.'
    },
    viewAppointments: {
      keywords: ['view appointment', 'see booking', 'check request', 'upcoming appointment', 'booked slots'],
      response: '📋 To view all your appointments: 1️⃣ Click on "Appoint Requests" in the sidebar, 2️⃣ You\'ll see a list of all booking orders from pet owners, 3️⃣ Each shows pet name, owner, time, and status, 4️⃣ Active booking count displays at the top, 5️⃣ Scroll to see all requests! You can also track real-time bookings.'
    },
    checkHistory: {
      keywords: ['check history', 'work history', 'past appointment', 'previous visit', 'records'],
      response: '📊 To check your work history: 1️⃣ Click on "Work History" in the sidebar, 2️⃣ You\'ll see all your completed appointments and sessions, 3️⃣ View dates, times, and pet details, 4️⃣ Use this to track your work performance and patient records! History updates automatically after each appointment.'
    },
    logout: {
      keywords: ['logout', 'sign out', 'exit', 'leave', 'close account'],
      response: '🚪 To logout: 1️⃣ Click the "Logout" button in the sidebar at the bottom, 2️⃣ You\'ll be redirected to the login page, 3️⃣ Your session ends securely. You can login again anytime with your credentials!'
    },
    profile: {
      keywords: ['profile', 'my profile', 'account', 'doctor info', 'name', 'view profile'],
      response: '👤 Your profile is displayed in the header at the top of the dashboard. You can see: Doctor name, Profile icon, Active booking count, and booked count. Click on your profile to access more details!'
    },
    features: {
      keywords: ['features', 'what can', 'capability', 'services', 'offer'],
      response: 'We offer: 📅 Easy appointment booking, ⏰ Flexible time slot management, 📊 Appointment tracking with real-time updates, 🔐 Secure doctor login, 📋 Work history tracking, and 🎯 Active booking counter. Manage everything from one dashboard!'
    },
    booking: {
      keywords: ['book', 'appointment', 'how to', 'schedule', 'reserve', 'pet owner booking'],
      response: 'Pet owners can book appointments by: 1️⃣ Selecting your profile, 2️⃣ Choosing an available time slot (green slots = available), 3️⃣ Entering pet details, 4️⃣ Confirming the booking. You\'ll instantly see it in your "Appoint Requests" section!'
    },
    pricing: {
      keywords: ['price', 'cost', 'fee', 'payment', 'amount', 'affordable', 'expensive'],
      response: 'Pricing varies by service: Consultation $50, Basic Check-up $75, Vaccination $40, Dental Care $65, Surgery $200+, Emergency $150. Senior pet discounts available! Contact support for package deals.'
    },
    contact: {
      keywords: ['contact', 'phone', 'email', 'address', 'reach', 'support', 'call', 'message'],
      response: 'Contact Us: 📞 +1-800-VET-CARE (838-2273), 📧 support@vetdoctor.com, 📍 123 Pet St, Animal City, AC 12345. WhatsApp: +1-800-VET-CARE. Response time: <2 hours!'
    },
    hours: {
      keywords: ['hours', 'open', 'closed', 'timing', 'when', 'available', 'time', 'operating'],
      response: '⏰ Operating Hours: Monday - Saturday: 9:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM. Emergency services available 24/7! Late-night appointments available on request.'
    },
    emergency: {
      keywords: ['emergency', 'urgent', 'help', 'critical', 'asap', 'accident', 'injured', 'dying'],
      response: '🚨 EMERGENCY? Call our 24/7 hotline: +1-800-VET-EMERGENCY (838-3734). Describe your pet\'s condition briefly. Average response time: 5 minutes! Our emergency team is always ready.'
    },
    doctors: {
      keywords: ['doctor', 'veterinarian', 'vet', 'specialist', 'team', 'experience', 'qualifications'],
      response: '👨‍⚕️ Our experienced veterinarians specialize in: Small animals, Exotic pets, Dental care, Surgery, Cardiology, and Orthopedics. All licensed, certified, and compassionate. Book your preferred doctor anytime!'
    },
    pets: {
      keywords: ['pet', 'dog', 'cat', 'animal', 'breed', 'species', 'exotic'],
      response: '🐾 We treat all pet types: Dogs, Cats, Rabbits, Guinea Pigs, Birds, Reptiles, and more! Each visit includes: Physical examination, Health assessment, Treatment plan, and Follow-up care. Your pet\'s health is our priority!'
    },
    vaccination: {
      keywords: ['vaccine', 'vaccination', 'immunization', 'shot', 'rabies', 'distemper'],
      response: '💉 Vaccination Services: Rabies ($25), DHPP ($35), Feline distemper ($30), Leukemia ($30), Bordetella ($20). Annual check-ups recommended. Schedule your pet\'s vaccinations today for complete protection!'
    },
    records: {
      keywords: ['record', 'history', 'medical', 'report', 'test', 'prescription'],
      response: '📋 Your medical records are securely stored. Access vaccination history, test results, prescriptions, and visit notes anytime in your "Work History" section. Share records with other vets if needed!'
    },
    cancellation: {
      keywords: ['cancel', 'reschedule', 'change', 'modify', 'postpone'],
      response: '📅 Pet owners can reschedule or cancel up to 24 hours before their appointment. They\'ll see a "Cancel/Reschedule" button in their booking confirmation. Free rescheduling available!'
    },
    payment: {
      keywords: ['pay', 'payment', 'credit', 'debit', 'insurance', 'card', 'method'],
      response: '💳 Payment Methods: Credit/Debit cards, Digital wallets, Bank transfers, and pet insurance accepted. Installment plans available for treatments over $500. All payments are secure and encrypted!'
    },
    about: {
      keywords: ['about', 'vetdoctor', 'mission', 'vision', 'company', 'founded', 'history'],
      response: '🏥 VETDOCTOR Mission: Providing compassionate, affordable, and accessible veterinary care to all pets. Founded in 2020, we\'ve served 50000+ happy pet parents and counting! Your pet deserves the best! ❤️'
    },
    reviews: {
      keywords: ['review', 'rating', 'feedback', 'testimonial', 'experience', 'satisfied'],
      response: '⭐ Our Ratings: 4.9/5 stars from 2500+ reviews! Pet parents love our care, punctuality, and friendly staff. Read more on our website or share your experience after your visit!'
    },
    membership: {
      keywords: ['membership', 'plan', 'subscription', 'annual', 'package', 'benefit', 'save'],
      response: '👑 Premium Membership Benefits: 20% discount on all services, Priority appointments, Free annual check-up, Free dental cleaning, Priority emergency care. Only $99/year!'
    },
    help: {
      keywords: ['help', 'assist', 'guide', 'tutorial', 'how', 'support', 'problem'],
      response: '🆘 Need Help? I\'m here 24/7! You can ask about: Updating slots, Viewing appointments, Checking history, Logging out, Your profile, Booking, Pricing, Hours, Emergency care, Doctors, and more. What can I help with?'
    },
    default: 'Thanks for your question! 😊 You can ask about: Updating your slots, Viewing appointments, Work history, Profile, Logging out, Booking, Pricing, Hours, Emergency care, Pet care, Payments, and more about VetDoctor. What would you like to know?'
  };

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (key === 'default') continue;
      if (value.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return value.response;
      }
    }
    
    return knowledgeBase.default.response;
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
=======
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
>>>>>>> 0ed70e0f007f3c3788304c8a51869c012c88de2e

    // Add user message
    const userMessage = {
      id: messages.length + 1,
<<<<<<< HEAD
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const response = findResponse(input);
      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
=======
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
>>>>>>> 0ed70e0f007f3c3788304c8a51869c012c88de2e
  };

  return (
    <div className="chatbot-container">
<<<<<<< HEAD
      {/* FAB Button */}
      <button
        className="chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <h3>VetDoctor Assistant</h3>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`chatbot-message ${msg.sender}`}
              >
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
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
          </div>

          {/* Input */}
          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about updating slots, appointments, pricing..."
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}
=======
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
>>>>>>> 0ed70e0f007f3c3788304c8a51869c012c88de2e
    </div>
  );
};

export default ChatBot;
