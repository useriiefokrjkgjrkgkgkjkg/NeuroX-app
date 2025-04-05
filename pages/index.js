import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      const WebApp = window.Telegram.WebApp;
      
      // Инициализация
      WebApp.ready();
      WebApp.expand();
      
      // Включаем полноэкранный режим
      if (WebApp.viewport && WebApp.viewport.requestFullscreen && WebApp.viewport.requestFullscreen.isAvailable()) {
        WebApp.viewport.requestFullscreen();
      }
      
      WebApp.setBackgroundColor('#161616');
    }
  }, []);

  return (
    <div className="container">
      <img 
        src="https://raw.githubusercontent.com/TelegramMessenger/telegramkit/main/Assets/Stickers/Regular/CAACAgIAAxkBAAIVVWfw_ZV2RS1YDg-TjEX78ckJUyytAAJFawACqvuJS9YcRfTFBNEvNgQ.webp" 
        alt="Telegram Sticker"
        className="sticker"
      />

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          background: #161616;
          touch-action: none;
        }
        .sticker {
          width: 256px;
          height: 256px;
          object-fit: contain;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
} 