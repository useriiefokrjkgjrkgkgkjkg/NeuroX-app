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

      // Показываем стикер
      WebApp.showSticker({
        sticker: "CAACAgIAAxkBAAIVVWfw_ZV2RS1YDg-TjEX78ckJUyytAAJFawACqvuJS9YcRfTFBNEvNgQ"
      });
    }
  }, []);

  return (
    <div className="container">
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
      `}</style>
    </div>
  );
} 