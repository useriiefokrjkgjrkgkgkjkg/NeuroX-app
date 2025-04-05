import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NeuroX🚀 VPN</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Быстрое и безопасное подключение к VPN" />
        <script src="https://telegram.org/js/telegram-web-app.js" />
      </Head>

      <Component {...pageProps} />
    </>
  );
} 