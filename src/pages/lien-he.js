import Head from 'next/head';
import ContactMain from '../components/Contact/ContactMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderFour from '../components/Layout/Header/HeaderFour/HeaderFour';
import { useEffect, useState } from 'react';


export default function Contact() {
  const [title, setTitle] = useState('CodeSpace - Trường đào tạo công nghệ và lập trình cho trẻ');
  const [description, setDescription] = useState('');
  useEffect(()=>{
    setTitle(`CodeSpace - Khoá học lập trình cho trẻ em`);
    setDescription(`Chúng tôi cung cấp các khoá học lập trình Scratch và Python cho trẻ em theo mọi lứa tuổi ở Bà Rịa Vũng Tàu. Hãy khám phá các khoá học của chúng tôi và nhanh tay đăng ký để nhận được những ưu đãi hấp dẫn!`)
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:description" content={description}></meta>
        <meta name="description" content={description}></meta>
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>
       
      <HeaderFour />
      <ContactMain />
      <Footer />
    </>
  )
}
