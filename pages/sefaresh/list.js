import FooterNotMain from '../../components/layout/footernotmain'
import Navbar from '../../components/layout/navbar/navbar'

import { useRouter } from 'next/router'
import Head from 'next/head'
import { Fragment } from 'react'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

import axios from 'axios'

import Snackbar from 'awesome-snackbar'

import {
  OrderStatusDictionary,
  ServiceKindDictionary,
} from '../../hooks/dictionaries'

function List({ data }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    new Snackbar('لطفاً شکیبا باشید', {
      position: 'bottom-right',
    })

    const id = e.currentTarget.getAttribute('data-value1')
    const code = e.currentTarget.getAttribute('data-value2')

    router.replace(
      {
        pathname: `/sefaresh/${code}`,
        query: { id: id },
      },
      `/sefaresh/${code}`
    )
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - لیست</title>
      </Head>

      <div className="h-screen bg-neutral p-4">
        <Navbar />

        <h3 className=" mt-24 text-neutral-content text-2xl" dir="rtl">
          لیستی از تمامی سفارش‌ها، خدمات و تعمیرات
        </h3>

        {data.length > 0 ? (
          <table className="table table-zebra w-full text-center overflow-scroll overscroll-contain mt-3">
            <thead>
              <tr>
                <th>نوع خدمت</th>
                <th>مبلغ (تومن)</th>
                <th>شماره پیگیری</th>
                <th>وضعیت</th>
                <th>خاتمه یافته</th>
                <th>تاریخ</th>
                <th>ردیف</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <Fragment>
                  <tr
                    className="group hover:scale-105 hover:shadow-xl hover:drop-shadow-xl cursor-pointer"
                    onClick={handleClick}
                    data-value1={item.id}
                    data-value2={item.code}
                  >
                    {item.isService ? (
                      <td className=" group-hover:text-primary-focus">
                        {ServiceKindDictionary[item.serviceKind]}
                      </td>
                    ) : (
                      <td className=" group-hover:text-primary-focus">خرید</td>
                    )}

                    {item.overallPrice ? (
                      <td className=" group-hover:text-primary-focus">
                        {item.overallPrice}
                      </td>
                    ) : (
                      <td className=" group-hover:text-primary-focus">-</td>
                    )}

                    <td dir="rtl" className=" group-hover:text-primary-focus">
                      {item.code}
                    </td>
                    <td className=" group-hover:text-primary-focus">
                      {OrderStatusDictionary[item.orderStatus]}
                    </td>
                    {item.isDone ? (
                      <td className=" group-hover:text-primary-focus">✔</td>
                    ) : (
                      <td className=" group-hover:text-primary-focus">-</td>
                    )}
                    <td className=" group-hover:text-primary-focus">
                      {item.createdAt}
                    </td>
                    <th className=" group-hover:text-primary-focus">
                      {index + 1}
                    </th>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-neutral-content text-2xl text-center m-auto mt-10 content-center justify-center">
            رکوردی یافت نشد
          </p>
        )}
        <FooterNotMain />
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const { data } = await axios.get(`${APP_URL}/api/v1/orders/list/${id}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default List
