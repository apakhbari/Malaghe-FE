import CardComponent from '../components/layout/card'
import FooterNotMain from '../components/layout/footernotmain'
import Navbar from '../components/layout/navbar/navbar'

import { CLIENT_VERSION } from '../envConfig'

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <CardComponent>
        <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
          درباره ما
        </h3>

        <p className="text-end py-1 text-neutral-content">:آدرس</p>
        <p className="text-end py-1 text-neutral-content">:شماره تماس</p>
        <p className="text-end py-1 text-neutral-content">: ایمیل</p>
        <p className="text-end py-1 text-neutral-content">:کد پستی</p>

        <p className="text-center pt-8 pb-1 text-neutral-content">
          {CLIENT_VERSION} : نسخه
        </p>
        <p className="text-center py-1 text-neutral-content">
          .تمامی حقوق محفوظ است
        </p>
        <p className="text-center py-1 text-neutral-content">
          Copyright © 2022
        </p>
      </CardComponent>
      <FooterNotMain />
    </div>
  )
}

export default AboutUs
