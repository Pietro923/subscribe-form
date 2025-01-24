import React from 'react';
import { Send } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Footer from '@/components/footer';

const SubscribeCard = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between p-4">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center w-full">
        <Card className="w-full max-w-md">
          <CardHeader className="flex justify-center pb-2">
            {/* Center Icon */}
            <div className="flex justify-center mb-4">
              <Send className="w-10 h-10 text-black" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-black">Subscribe</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="w-full py-2 rounded-md text-black font-bold"
              style={{ backgroundColor: '#e6fc14' }}
            >
              Subscribe
            </button>
          </CardContent>
        </Card>
      </div>

     <Footer/>
    </div>
  );
};

export default SubscribeCard;
