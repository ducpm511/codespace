import Head from 'next/head';
import HomeMain from '../components/Home/HomeMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import Header from '../components/Layout/Header/HeaderOne/Header';
import Script from 'next/script'
import { useEffect, useState } from 'react';


export default function Home() {
  const [title, setTitle] = useState('CodeSpace - Trường đào tạo công nghệ và lập trình cho trẻ');
  const [description, setDescription] = useState('');
  useEffect(()=>{
    setTitle(`CodeSpace - Trường đào tạo công nghệ và lập trình cho trẻ`);
    setDescription(`CodeSpace Việt Nam - Trường đào tạo công nghệ và lập trình cho trẻ em ở Việt Nam chuyên đào tạo lập trình Scratch và Python. Chúng tôi cung cấp các khoá học chất lượng giúp trẻ em phát triển khả năng tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề. Với đội ngũ giảng viên giàu kinh nghiệm, chúng tôi cam kết đem đến cho học viên môi trường học tập ănng động và đầy hứng thú. Nếu bạn đang tìm kiếm một trung tâm đào tạo lập trình cho con em, hãy đến với chúng tôi để con em của bạn có thể học tập và trau dồi kỹ năng một cách hiệu quả. `)
  }, [])
  return (
    <>
      <Head>
        
        
        <title>{title}</title>
        <meta property="og:description" content={description}></meta>
        <meta name="description" content={description}></meta>
        <link rel="icon" href="/assets/img/favicon.png" />
        
      </Head>
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4BVESVKHV0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
   
             gtag('config', 'G-4BVESVKHV0');
          `}
        </Script>
       
       <Header />
      <HomeMain />
      <Footer />
    </>
  )
}
