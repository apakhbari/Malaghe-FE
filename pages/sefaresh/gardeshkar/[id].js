import { Fragment } from 'react'

import Head from 'next/head'

import Navbar from '../../../components/layout/navbar/navbar'

import CardDescriptionComponent from '../../../components/layout/cardDescription'

import axios from 'axios'
import { CLIENT_NAME_FA, APP_URL } from '../../../envConfig'

import RemoveUndefinedsToPleaseNext from '../../../hooks/removeUndefineds'

import { useRouter } from 'next/router'

import Workflow from '../../../components/layout/sefaresh/workflow'
import Workflow2 from '../../../components/layout/sefaresh/workflow2'

import FooterNotMain from '../../../components/layout/footernotmain'

function SefareshID({ data }) {
  const router = useRouter()

  return (
    <Fragment>
      <Head>
        <title>
          {CLIENT_NAME_FA} - گردش کار {data.code}
        </title>
      </Head>

      <div className=" flex flex-col h-screen items-center justify-center">
        <Navbar />

        <div className="flex flex-col mx-auto">
          <CardDescriptionComponent direction={'rtl'}>
            <h3 dir="rtl" className="text-2xl mb-4 ">
              گردش کار
            </h3>

            <ol className="relative border-l border-accent">
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

export async function getServerSideProps(context) {
  const { id } = context.query

  const { data } = await axios.get(`${APP_URL}/api/v1/orders/workflow/${id}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default SefareshID
