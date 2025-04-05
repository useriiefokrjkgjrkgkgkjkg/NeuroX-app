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
      <div className="sticker-container">
        <img 
          src="https://imgur.com/TtccKxQ.png"
          alt="Sticker"
          className="sticker"
        />
      </div>

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
        .sticker-container {
          width: 256px;
          height: 256px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sticker {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
} 