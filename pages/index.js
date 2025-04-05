import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const WebApp = window.Telegram.WebApp;
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
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #161616;
        }
        button {
          background: none;
          border: 2px solid #fff;
          color: #fff;
          padding: 15px 30px;
          font-size: 18px;
          border-radius: 10px;
          cursor: pointer;
        }
        button:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
} 