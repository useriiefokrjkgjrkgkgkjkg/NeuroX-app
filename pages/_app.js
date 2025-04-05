import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NeuroX🚀 VPN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="description" content="Быстрое и безопасное подключение к VPN" />
        <script src="https://telegram.org/js/telegram-web-app.js" />
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          position: fixed;
        }
      `}</style>
    </>
  );
} 