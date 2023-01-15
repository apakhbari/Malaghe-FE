import CardDescriptionComponent from '../components/layout/cardDescription'
import FooterNotMain from '../components/layout/footernotmain'
import Navbar from '../components/layout/navbar/navbar'

import { CLIENT_VERSION, CLIENT_NAME_FA } from '../envConfig'
import Head from 'next/head'
import { Fragment } from 'react'

function AboutUs() {
  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - درباره ما</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
        <Navbar />
        <CardDescriptionComponent>
          <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
            درباره ما
          </h3>

          <p className="text-center py-1 text-neutral-content" dir="rtl">
            آدرس: شهرک صنعتی کاوه. پاکدشت، جاده خاوران، عباس‌آباد علاقبند
          </p>
          <p className="text-center py-1 text-neutral-content">
            ۰۹۹۳۸۵۱۳۷۲۴ :شماره تماس
          </p>
          <p className="text-center py-1 text-neutral-content">
            krachianamin@gmail.com : ایمیل
          </p>
          <p className="text-center py-1 text-neutral-content">
            ۱۸۴۶۱۴۶۹۵۸ :کد پستی
          </p>

          <p className="text-center pt-8 pb-1 text-neutral-content">
            {CLIENT_VERSION} : نسخه
          </p>
          <p className="text-center py-1 text-neutral-content">
            .تمامی حقوق محفوظ است
          </p>
          <p className="text-center py-1 text-neutral-content">
            Copyright © 2022
          </p>
        </CardDescriptionComponent>
        <FooterNotMain />
      </div>
    </Fragment>
  )
}

export default AboutUs
