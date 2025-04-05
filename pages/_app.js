import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NeuroX🚀 VPN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="description" content="NeuroX VPN - Secure and fast VPN service" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>

      <Component {...pageProps} />

      <style jsx global>{`
        html, body {
          background: #161616;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: fixed;
          user-select: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
} 