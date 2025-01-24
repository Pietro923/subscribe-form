import React from 'react';
import { Send } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Footer from '@/components/footer';

const SubscribeCard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center w-full">
        <Card className="w-full max-w-4xl p-8 rounded-3xl">
          <CardHeader className="flex justify-center pb-2">
            {/* Center Icon */}
            <div className="flex justify-center mb-6">
              <Send className="w-10 h-10 text-black" />
            </div>
          </CardHeader>
          <CardContent className="space-y-7 text-center">
            <h2 className="text-3xl font-bold text-black">SUBSCRIBE</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 border-b-2 border-gray-300 focus:border-yellow-300 transition-colors duration-300 bg-transparent text-black placeholder-gray-500 focus:outline-none"
            />
            <button
              className="w-full py-2 rounded-3xl text-black font-bold hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: '#e6fc14' }}
            >
              SUBSCRIBE
            </button>
          </CardContent>
        </Card>
      </div>

     <Footer/>
    </div>
  );
};

export default SubscribeCard;
