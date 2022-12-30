import { Fragment } from 'react'

import Head from 'next/head'

import { CLIENT_NAME_FA } from '../../envConfig'

import FooterNotMain from '../../components/layout/footernotmain'
import Navbar from '../../components/layout/navbar/navbar'

import Developing from '../developing'

function AboutUs() {
  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - مجله</title>
      </Head>

      <Developing />

      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
        <Navbar />

        <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
          مجله
        </h3>
        <FooterNotMain />
      </div>
    </Fragment>
  )
}

export default AboutUs
