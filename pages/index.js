import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export default function Home() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <div className="container">
      <h1>🌐 NeuroX🚀 VPN</h1>
      <p>Быстрое и безопасное подключение к VPN</p>
      <button onClick={() => WebApp.showAlert('Подключение...')}>
        🔒 Подключиться к VPN
      </button>

      <style jsx>{`
        .container {
          padding: 20px;
          text-align: center;
          background: var(--tg-theme-bg-color);
          color: var(--tg-theme-text-color);
          min-height: 100vh;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 16px;
        }
        p {
          margin-bottom: 24px;
          opacity: 0.8;
        }
        button {
          background: var(--tg-theme-button-color);
          color: var(--tg-theme-button-text-color);
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
} 