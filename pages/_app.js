import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NeuroX🚀 VPN</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="MobileOptimized" content="176" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="robots" content="noindex,nofollow" />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
        :root {
          --bg-color: var(--tg-theme-bg-color, #fff);
          --text-color: var(--tg-theme-text-color, #000);
          --hint-color: var(--tg-theme-hint-color, #999);
          --link-color: var(--tg-theme-link-color, #2678b6);
          --button-color: var(--tg-theme-button-color, #3390ec);
          --button-text-color: var(--tg-theme-button-text-color, #fff);
          --secondary-bg-color: var(--tg-theme-secondary-bg-color, #f4f4f5);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          font-size: 13px;
          line-height: 16px;
          margin: 0;
          padding: 0;
          color: var(--text-color);
          background-color: var(--bg-color);
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: fixed;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
} 