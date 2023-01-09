import { Fragment } from 'react'

import Head from 'next/head'

import Navbar from '../../components/layout/navbar/navbar'

import CardDescriptionComponent from '../../components/layout/cardDescription'

import axios from 'axios'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'

import FooterNotMain from '../../components/layout/footernotmain'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

const OrderCode = ({ data }) => {
  console.log(data)

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - ورود</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
        <Navbar />
        <CardDescriptionComponent></CardDescriptionComponent>
        <FooterNotMain />
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const { data } = await axios.get(`${APP_URL}/api/v1/orders/${id}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default OrderCode
