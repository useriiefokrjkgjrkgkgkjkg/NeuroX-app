import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram.WebApp;
      // Растягиваем на весь экран
      WebApp.expand();
      // Скрываем стандартные кнопки
      WebApp.MainButton.hide();
      WebApp.BackButton.hide();
      // Устанавливаем цвет фона
      WebApp.setBackgroundColor('#161616');
      // Сообщаем что приложение готово
      WebApp.ready();
    }
  }, []);

  const handleConnect = () => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram.WebApp;
      WebApp.showAlert('Подключение...');
    }
  };

  return (
    <div className="container">
      <button onClick={handleConnect}>
        🔒 Подключиться к VPN
      </button>

      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #161616;
          touch-action: none;
          -webkit-user-select: none;
          user-select: none;
        }
        button {
          background: none;
          border: 2px solid #fff;
          color: #fff;
          padding: 15px 30px;
          font-size: 18px;
          border-radius: 10px;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          -webkit-tap-highlight-color: transparent;
        }
        button:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
} 