import Head from 'next/head';
import AboutMain from '../components/About/AboutMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderFour from '../components/Layout/Header/HeaderFour/HeaderFour';
import { useEffect, useState } from 'react';

export default function About() {
  const [title, setTitle] = useState('CodeSpace - Trường đào tạo công nghệ và lập trình cho trẻ');
  const [description, setDescription] = useState('');
  useEffect(()=>{
    setTitle(`CodeSpace - Giới thiệu về CodeSpace`);
    setDescription(`CodeSpace Việt Nam - Đội ngũ CodeSpace Việt Nam được vận hành bởi nhóm lập trình viên và chuyên gia nhân sự làm việc trong lĩnh vực công nghệ thông tin. May mắn được làm việc hằng ngày, tiếp cận và cập nhật bởi các công nghệ mới nhất hiện nay, chúng tôi thấy được sức ảnh hưởng và tầm quan trọng của công nghệ đối với đời sống. Chính vì vậy, mang nguyện vọng đưa công nghệ đến gần hơn cho hàng triệu trẻ em Việt Nam, CodeSpace mong muốn đem giáo dục về công nghệ và tư duy lập trình đến với các em.`)
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
      <AboutMain />
      <Footer />
    </>
  )
}
