import CardDescriptionComponent from '../../../components/layout/cardDescription'

import FooterNotMain from '../../../components/layout/footernotmain'
import Navbar from '../../../components/layout/navbar/navbar'
import Workflow from '../../../components/layout/sefaresh/workflow'
import Workflow2 from '../../../components/layout/sefaresh/workflow2'

import Head from 'next/head'
import { CLIENT_NAME_FA } from '../../../envConfig'
import { Fragment } from 'react'

function workflow1() {
  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - گردش‌کار</title>
      </Head>
      <div className=" flex flex-col h-screen items-center justify-center">
        <Navbar />

        <div className="flex flex-col mx-auto">
          <CardDescriptionComponent direction={'rtl'}>
            <h3 dir="rtl" className="text-2xl mb-4 ">
              گردش کار
            </h3>

            <ol class="relative border-l border-accent">
              <Workflow />
              <Workflow2 />
            </ol>
          </CardDescriptionComponent>
        </div>
        <FooterNotMain />
      </div>
    </Fragment>
  )
}

export default workflow1
