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
        <meta property='keywords' content='dạy lập trình cho trẻ em bà rịa vũng tàu, dạy lập trình scratch, dạy lập trình python, dạy lập trình trẻ em'/>
        <meta property='og:title' content='CodeSpace - Trường đào tạo công nghệ và lập trình cho trẻ em'/>
        <meta property='og:image' content='/assets/img/thumbnail.jpg'/>
        <meta property='og:description' content='CodeSpace Việt Nam - Trường đào tạo công nghệ và lập trình cho trẻ em ở Bà Rịa Vũng Tàu chuyên đào tạo lập trình Scratch và Python. Chúng tôi cung cấp các khoá học chất lượng giúp trẻ em phát triển khả năng tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề. Với đội ngũ giảng viên giàu kinh nghiệm, chúng tôi cam kết đem đến cho học viên môi trường học tập năng động và đầy hứng thú. Nếu bạn đang tìm kiếm một trung tâm đào tạo lập trình cho con em, hãy đến với chúng tôi để con em của bạn có thể học tập và trau dồi kỹ năng một cách hiệu quả.'/>
        <meta property='og:site_name' content='CodeSpace'/>
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
