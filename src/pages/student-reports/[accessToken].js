// pages/report/[accessToken].js
import Head from 'next/head'
import HeaderFour from '../../components/Layout/Header/HeaderFour/HeaderFour'
import Footer from '../../components/Layout/Footer/FooterOne/Footer'
import StudentReportDetailMain from '../../components/StudentReport/StudentReportDetailMain'
import { useEffect, useState } from 'react'

export default function ReportDetailPage() {
  const [title, setTitle] = useState('Báo cáo học tập - CodeSpace')
  const [description, setDescription] = useState('Xem chi tiết kết quả học tập và dự án của học viên tại CodeSpace.')

  useEffect(() => {
    setTitle('Chi tiết báo cáo học tập | CodeSpace')
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
      <StudentReportDetailMain />
      <Footer />
    </>
  )
}
