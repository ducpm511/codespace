/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './index.scss';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Raleway:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/> 
        <link rel="stylesheet" href="/assets/css/fontAwesome5Pro.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <meta name="google-site-verification" content="4LRDJjTOt-m4ofwIW3F8mh-OrJEZIf9ucErV_XV4J-4" />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-4BVESVKHV0`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-4BVESVKHV0');
          `,
            }}
          />
      </Head>
      <Provider store={store}>
          <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  )
}

export default MyApp
