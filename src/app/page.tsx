"use client"
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';
import { useLanguageContext } from '@/context/LanguageContext';

const SubscribeCard = () => {
  const { language } = useLanguageContext();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = () => {
    setError('');
    
    // validacion
    if (!email) {
      setError(language === 'es' ? 'Por favor ingresa un correo' : 'Please enter an email');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setError(language === 'es' ? 'Correo electrónico inválido' : 'Invalid email address');
      setStatus('error');
      return;
    }

    // cargando
    setStatus('loading');

    
    setTimeout(() => {
      // exito
      setStatus('success');
      
      // reseteo
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
      }, 3000);
    }, 1500);
  };

  //estados del boton
  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return language === 'es' ? 'Procesando...' : 'Processing...';
      case 'success':
        return language === 'es' ? '¡Suscrito!' : 'Subscribed!';
      default:
        return language === 'es' ? 'SUSCRIBIRSE' : 'SUBSCRIBE';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4">
      {/* Main */}
      <div className="flex-grow flex items-center justify-center w-full">
        <Card className="w-full max-w-4xl p-8 rounded-3xl">
          <CardHeader className="flex justify-center pb-2">
            <div className="flex justify-center mb-6">
              <Send className="w-10 h-10 text-black dark:text-white" />
            </div>
          </CardHeader>
          <CardContent className="space-y-7 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              {language === 'es' ? 'SUSCRIBIRSE' : 'SUBSCRIBE'}
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus('idle');
                setError('');
              }}
              placeholder={language === 'es' ? 'Ingresa tu correo' : 'Enter your email'}
              className={`dark:text-white w-full px-6 py-3 border-b-2 transition-colors duration-300 bg-transparent text-black placeholder-gray-500 focus:outline-none ${
                status === 'error' 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 focus:border-yellow-300'
              }`}
            />
            {error && (
              <div className="text-red-500 flex items-center justify-center gap-2 mt-2">
                <AlertTriangle size={20} />
                <span>{error}</span>
              </div>
            )}
            <Button
              onClick={handleSubscribe}
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-3 rounded-3xl text-black font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                status === 'success' 
                  ? 'bg-green-400 hover:bg-green-500' 
                  : 'hover:scale-105'
              } ${
                status === 'loading' ? 'cursor-wait opacity-70' : ''
              }`}
              style={{ 
                backgroundColor: status === 'success' ? undefined : '#e6fc14',
                transform: status === 'success' ? 'none' : undefined
              }}
            >
              {status === 'success' && <CheckCircle2 />}
              {getButtonContent()}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer/>
    </div>
  );
};

export default SubscribeCard;