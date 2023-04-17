import Head from 'next/head';
import CourseDetailsMain from '../../components/CourseDetails/CourseDetailsMain';
import Footer from '../../components/Layout/Footer/FooterOne/Footer';
import HeaderFour from '../../components/Layout/Header/HeaderFour/HeaderFour';
import { useEffect, useState } from 'react';
import courseData from '../../data/courseData';

const CourseDetails = ({course}) => {
  const [title, setTitle] = useState('CodeSpace - Trường đào tạo công nghệ và lập trình cho trẻ');
  const [description, setDescription] = useState('');
  useEffect(()=>{
    setTitle(`CodeSpace - Khoá học lập trình ${course.title} cho trẻ em`);
    setDescription(`CodeSpace Việt Nam - ${course.short_description}`);
  }, [])
  console.log(course)
  return (
    <>
      <Head>
      <title>{title}</title>
        <meta property="og:description" content={description}></meta>
        <meta name="description" content={description}></meta>
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>
       
      <HeaderFour />
      <CourseDetailsMain courseData={course} />
      <Footer />
    </>
  )
}
export const getServerSideProps = async context =>{
  // const { req } = context;
  const handle = context.query?.courseHandle?.[0];
  const course = courseData.find((course) =>{
    if(course.handle == handle){
      return course
    }
  })
  return {
    props: {
      course: course
    }
  }
}
export default CourseDetails;

