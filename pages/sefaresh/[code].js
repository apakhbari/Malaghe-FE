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

  const orderStatus = {
    1: 'ایجاد شده',
    2: 'در انتظار پرداخت',
    3: 'در حال جابجایی',
    4: 'دریافت‌شده',
    5: 'مرجوع شده',

    6: 'عیب‌یابی',
    7: 'تعمیر',
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - ورود</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
        <Navbar />
        <CardDescriptionComponent>
          <div className="flex flex-col">
            <button type="submit" className="btn btn-secondary  mt-2">
              مشاهده گردش کار
            </button>

            <div className="divider">اطلاعات اولیه</div>

            <div
              className="mt-2 text-2xl font-extrabold text-neutral-content p-4 pb-0 items-center mx-4 border-t-4 border-accent"
              dir="rtl"
            >
              <p>{data.code}</p>

              <p>{orderStatus[data.orderStatus]}</p>

              <p>
                {data.gender === 'زن'
                  ? ' خانم ' + data.userName
                  : ' آقای ' + data.userName}
              </p>

              <p>{data.mobile}</p>
            </div>

            <div className="divider">اطلاعات مشتری</div>

            <div
              className="mt-5 text-xl text-neutral-content p-4 items-center mx-4 border-y-4 border-accent"
              dir="rtl"
            >
              <p>{data.address}</p>
              <p>{data.phone}</p>
              <p>{data.postalCode}</p>
              <p>{data.mobile}</p>
            </div>

            <div className="divider">اطلاعات سفارش</div>

            <div
              className="mt-5 text-xl text-neutral-content p-4 items-center mx-4 border-y-4 border-accent"
              dir="rtl"
            >
              <p>{data.isDone ? 'انجام شده' : 'در حال انجام'}</p>
              <p>{data.createdAt}</p>
              <p>
                {data.isClientSide
                  ? 'در انتظار تعامل کاربر'
                  : 'در انتظار تعامل اپراتور'}
              </p>
              {data.isExpress && <p>'خدمت اکسپرس'</p>}
              <p>{data.isService ? 'تعمیر' : 'خرید از فروشگاه'}</p>
              {data.isService && <p>{data.serviceKind}</p>}
            </div>

            <div className="divider">اطلاعات پرداخت</div>

            <div
              className="mt-5 text-xl text-neutral-content p-4 items-center mx-4 border-y-4 border-accent"
              dir="rtl"
            >
              <p>{data.paymentKind}</p>
              <p>{data.hasPaid}</p>
            </div>
          </div>
        </CardDescriptionComponent>
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
