import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram.WebApp;
      WebApp.ready();
      WebApp.expand();
      
      // Подписываемся на изменение темы
      WebApp.onEvent('themeChanged', () => {
        document.documentElement.style.setProperty('--bg-color', WebApp.backgroundColor);
      });
    }
  }, []);

  const handleConnect = () => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram.WebApp;
      WebApp.showPopup({
        title: 'Подключение VPN',
        message: 'Начинаем подключение к VPN серверу...',
        buttons: [{
          type: 'ok',
          text: 'OK'
        }]
      });
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
          background: var(--bg-color);
        }
        button {
          background: var(--button-color);
          color: var(--button-text-color);
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