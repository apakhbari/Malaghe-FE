import { Fragment } from 'react'
import Head from 'next/head'

import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/animation/animation-loading.json'

import { CLIENT_NAME_FA, CLIENT_VERSION } from '../../envConfig'

function LoadingPage() {
  return (
    <Fragment>
      <Head>
        <title>لطفاً شکیبا باشید ...</title>
      </Head>

      <div className="flex flex-col justify-evenly h-screen mx-auto items-center bg-neutral">
        <div
          dir="rtl"
          className="font-bold text-4xl text-center text-neutral-content"
        >
          لطفاً شکیبا باشید ...
        </div>
        <div className=" h-96 w-96">
          <Lottie loop animationData={lottieJson} play />
        </div>
        <div>
          <div
            dir="rtl"
            className="font-bold text-2xl text-center text-neutral-content"
          >
            {CLIENT_NAME_FA}
          </div>
          <div
            dir="rtl"
            className="font-bold text-2xl text-center text-neutral-content"
          >
            نسخه : {CLIENT_VERSION}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LoadingPage
