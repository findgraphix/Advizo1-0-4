import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([]);

  const commonQuestions = [
    {
      question: "What consulting services do you offer?",
      answer: "We offer strategic business consulting, digital transformation, and operational excellence services to help businesses grow and innovate."
    },
    {
      question: "How can you help my business?",
      answer: "We analyze your business needs, develop customized solutions, and implement strategies to improve efficiency, reduce costs, and drive growth."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across various industries including technology, healthcare, finance, retail, and manufacturing, bringing expertise and insights to each sector."
    }
  ];

  const whatsappNumbers = [
    // {
    //   number: '+919876543210',
    //   label: 'General Inquiries',
    //   message: 'Hello! I would like to know more about your consulting services.'
    // },
    {
      number: '9110096281',
      label: 'Business Support',
      message: 'Hi! I need assistance with my business.'
    }
  ];

  const handleWhatsAppClick = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${number.replace('+', '')}?text=${encodedMessage}`, '_blank');
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setChatHistory(prev => [...prev, { type: 'user', content: message }]);

    let botResponse = "I understand your question. For detailed assistance, I recommend connecting with our team directly.";
    const lowerMessage = message.toLowerCase();
    const matchedQuestion = commonQuestions.find(q =>
      lowerMessage.includes(q.question.toLowerCase()) ||
      lowerMessage.includes(q.answer.toLowerCase())
    );

    if (matchedQuestion) {
      botResponse = matchedQuestion.answer;
    }

    setTimeout(() => {
      setChatHistory(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 500);

    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg p-0 flex items-center justify-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="h-8 w-8"
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold text-green-600 dark:text-green-400 flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-6 w-6 mr-2"
              />
              WhatsApp Assistant
            </SheetTitle>
          </SheetHeader>

          {!showContactOptions ? (
            <div className="mt-6 flex flex-col h-[calc(100vh-12rem)]">
              {chatHistory.length === 0 && (
                <div className="text-sm text-muted-foreground mb-4">
                  <p className="font-medium text-green-600 mb-2">Welcome to Consult Advizo! 💡</p>
                  <p>Boost your business with tailored solutions. Tell us what's your biggest challenge right now?</p>
                </div>
              )}

              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      chat.type === 'user'
                        ? 'bg-green-500 text-white ml-4'
                        : 'bg-gray-100 dark:bg-gray-800 mr-4'
                    }`}>
                      {chat.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <Input
                  placeholder="Type your question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-green-500 hover:bg-green-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-4">
                <Button
                  variant="outline"
                  className="w-full text-green-600 border-green-600 hover:bg-green-50"
                  onClick={() => setShowContactOptions(true)}
                >
                  Connect with Our Team
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="text-sm text-muted-foreground mb-4">
                Choose an option to connect with our team on WhatsApp:
              </div>
              {whatsappNumbers.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => handleWhatsAppClick(item.number, item.message)}
                >
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.number}</p>
                </Card>
              ))}

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setShowContactOptions(false)}
              >
                Back to Assistant
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default WhatsAppChat;
