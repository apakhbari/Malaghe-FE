import { Fragment } from 'react'

import Head from 'next/head'

import Navbar from '../../components/layout/navbar/navbar'

import CardDescriptionComponent from '../../components/layout/cardDescription'

import axios from 'axios'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

import Snackbar from 'awesome-snackbar'

import { useRouter } from 'next/router'

import { OrderStatusDictionary } from '../../hooks/dictionaries'

const OrderCode = ({ data }) => {
  const router = useRouter()

  const onWorkFlowClick = (e) => {
    e.preventDefault()

    new Snackbar('لطفاً شکیبا باشید', {
      position: 'bottom-right',
    })

    router.replace(
      {
        pathname: `/sefaresh/gardeshkar/${data.code}`,
        query: { id: data.code },
      },
      `/sefaresh/gardeshkar/${data.code}`
    )
  }

  return (
    <Fragment>
      <Head>
        <title>
          {CLIENT_NAME_FA} - سفارش {data.code}
        </title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
        <Navbar />
        <CardDescriptionComponent>
          <div className="flex flex-col">
            <button
              className="flex btn btn-secondary  mt-2 mx-2 text-secondary-content justify-around"
              onClick={onWorkFlowClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-secondary-content"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              مشاهده گردش کار
            </button>

            <div className="divider">اطلاعات اولیه</div>

            <div
              className="text-xl text-neutral-content p-4 pb-0 text-center mx-4"
              dir="rtl"
            >
              <p>{data.code}</p>

              <p>{OrderStatusDictionary[data.orderStatus]}</p>

              <p>
                {data.gender === 'زن'
                  ? ' خانم ' + data.userName
                  : ' آقای ' + data.userName}
              </p>

              <p>{data.mobile}</p>
            </div>

            <div className="divider">اطلاعات مشتری</div>

            <div
              className="text-xl text-neutral-content p-4 text-center mx-4"
              dir="rtl"
            >
              <p>{data.address}</p>
              <p>{data.phone}</p>
              <p>{data.postalCode}</p>
              <p>{data.mobile}</p>
            </div>

            <div className="divider">اطلاعات سفارش</div>

            <div
              className="text-xl text-neutral-content p-4 text-center mx-4"
              dir="rtl"
            >
              <p>{data.isDone ? 'انجام شده' : 'در حال انجام'}</p>
              <p>{data.createdAt}</p>
              <p>
                {data.isClientSide
                  ? 'در انتظار تعامل کاربر'
                  : 'در انتظار تعامل اپراتور'}
              </p>
              {data.isExpress && <p>خدمت اکسپرس</p>}
              <p>{data.isService ? 'تعمیر' : 'خرید از فروشگاه'}</p>
              {data.isService && <p>{data.serviceKind}</p>}
            </div>

            <div className="divider">اطلاعات پرداخت</div>

            <div
              className="text-xl text-neutral-content p-4 text-center mx-4"
              dir="rtl"
            >
              <p>{data.paymentKind}</p>
              <p>{data.hasPaid ? 'پرداخت شده' : 'پرداخت نشده'}</p>
            </div>

            <div className="divider">اطلاعات اجناس</div>

            <div
              className="text-xl text-neutral-content p-4 text-center mx-4"
              dir="rtl"
            >
              {data.products.map((item) => (
                <div>
                  <p>{item.title}</p>
                  <p className="border-b  border-accent">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardDescriptionComponent>
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
