import FooterNotMain from '../../components/layout/footernotmain'
import Navbar from '../../components/layout/navbar/navbar'

import { useRouter } from 'next/router'
import Head from 'next/head'
import { Fragment } from 'react'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

import axios from 'axios'

import Snackbar from 'awesome-snackbar'

function List({ data }) {
  const router = useRouter()

  const orderStatus = {
    1: 'ایجاد شده',
    2: 'در انتظار پرداخت',
    3: 'در حال جابجایی',
    4: 'دریافت‌شده',
    5: 'مرجوع شده',

    6: 'عیب‌یابی',
    7: 'تعمیر',
  }

  console.log(data)

  const handleClick = (e) => {
    e.preventDefault()

    new Snackbar('لطفاً شکیبا باشید', {
      position: 'bottom-right',
    })

    const id = e.currentTarget.getAttribute('data-value1')
    const code = e.currentTarget.getAttribute('data-value2')

    router.replace(
      {
        pathname: `/store/${code}`,
        query: { id: id },
      },
      `/store/${code}`
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
                        {item.serviceKind}
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
                      {orderStatus[item.orderStatus]}
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
          <p3
            className="text-neutral-content text-2xl text-center m-auto"
            dir="rtl"
          >
            رکوردی یافت نشد
          </p3>
        )}
        <FooterNotMain />
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  console.log(id)

  const { data } = await axios.get(`${APP_URL}/api/v1/orders/list/${id}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default List
