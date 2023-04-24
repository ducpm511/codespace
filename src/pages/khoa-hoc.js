import Head from 'next/head';
import CourseMain from '../components/Course/CourseMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import HeaderFour from '../components/Layout/Header/HeaderFour/HeaderFour';
import { useEffect, useState } from 'react';
import courseData from '../data/courseData';

const Course = () => {
  const [title, setTitle] = useState('CodeSpace - Trường đào tạo công nghệ và lập trình cho trẻ');
  const [description, setDescription] = useState('');
  const filters = [
    {
      filterName: 'Ngôn ngữ lập trình',
      facets: [
        {
          facetName: 'Scratch',
          tag: 'scratch'
        },
        {
          facetName: 'Python',
          tag: 'python'
        }
      ]
    },
    {
      filterName: 'Độ tuổi',
      facets: [
        {
          facetName: 'Từ 6 đến 8 tuổi',
          tag: '6-8'
        },
        {
          facetName: 'Từ 8 đến 14 tuổi',
          tag: '8-14'
        },
        {
          facetName: 'Từ 13 đến 18 tuổi',
          tag: '13-18'
        }
      ]
    }
  ]
  const selectedFilters = [];
  const courses = courseData;
  useEffect(()=>{
    setTitle(`CodeSpace - Khoá học lập trình cho trẻ em ở Bà Rịa Vũng Tàu`);
    setDescription(`Chúng tôi cung cấp các khoá học lập trình Scratch và Python cho trẻ em theo mọi lứa tuổi ở Bà Rịa Vũng Tàu. Hãy khám phá các khoá học của chúng tôi và nhanh tay đăng ký để nhận được những ưu đãi hấp dẫn!`);
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
      <CourseMain filters={filters} selectedFilters={selectedFilters} courses={courses} />
      <Footer />
    </>
  )
}

export default Course;