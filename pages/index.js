import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram.WebApp;
      
      // Инициализация и расширение
      WebApp.ready();
      WebApp.expand();
      
      // Включаем полноэкранный режим
      if (WebApp.isVersionAtLeast('6.1')) {
        WebApp.requestViewport({ height: '100%' });
        WebApp.setViewportSettings({ height: '100%' });
      }
      
      WebApp.setBackgroundColor('#161616');
    }
  }, []);

  const handleConnect = () => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram.WebApp;
      WebApp.showAlert('Начинаем подключение к VPN серверу...');
    }
  };

  return (
    <div className="container">
      <button onClick={handleConnect}>
        🔒 Подключиться к VPN
      </button>

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
        button {
          background: #3390ec;
          color: white;
          border: none;
          padding: 15px 30px;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
        }
        button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
} 