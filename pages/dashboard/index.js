import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useEffect, useContext, Fragment } from 'react'

import useRequest from '../../hooks/use-request'

import { themeChange } from 'theme-change'
import Stat2 from '../../components/layout/dashboard/stat2'
import IconService from '../../assets/icons/svg/iconservice'
import IconGardeshKar from '../../assets/icons/svg/icongardeshkar'
import IconWallet from '../../assets/icons/svg/iconwallet'
import IconCart from '../../assets/icons/svg/iconcart'
import IconDashboardHome from '../../assets/icons/svg/icondashboardhome'
import IconDashboardMag from '../../assets/icons/svg/icondashboardmag'
import IconDashboardStore from '../../assets/icons/svg/icondashboardstore'
import IconDashboardLogOut from '../../assets/icons/svg/icondashboardlogout'
import NotificationDropDown from '../../components/layout/store/notificationdropdown'

import CartsContext from '../../store/cart-context'
import NavBarTheme from '../../components/layout/navbar/navbarhelper/navbartheme'

import axios from 'axios'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'
import MobileDeveloping from '../../components/layout/mobileDeveloping'

var slugify = require('slugify-persian')

function Dashboard({ data }) {
  const router = useRouter()

  const cartsCtx = useContext(CartsContext)

  console.log(data)
  console.log('accountId:' + `${data.currentUser.id}`)

  const { doRequest } = useRequest({
    url: '/api/v1/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => router.push('/'),
  })

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const onRequestServiceClick = (e) => {
    e.preventDefault()

    router.push(
      {
        pathname: '/sefaresh/new/1',
        query: { accountId: `${data.currentUser.id}` },
      },
      '/sefaresh/new/1'
    )
  }

  const onWorkFlowClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh/gardeshkar')
  }

  const onLogOutClick = (e) => {
    e.preventDefault()

    doRequest()
  }

  const onAccountClick = (e) => {
    e.preventDefault()

    console.log(
      slugify(data.currentUser.fiName + ' ' + data.currentUser.laName)
    )

    router.push(
      {
        pathname: `/dashboard/${slugify(
          data.currentUser.fiName + ' ' + data.currentUser.laName
        )}`,
        query: { id: data.currentUser.id },
      },
      `/dashboard/${slugify(
        data.currentUser.fiName + ' ' + data.currentUser.laName
      )}`
    )
  }

  const onTransactionsClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh/list')
  }
  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - داشبورد</title>
      </Head>

      <div className="md:hidden">
        <MobileDeveloping />
      </div>
      <div className="flex flex-col content-center justify-center h-screen bg-neutral">
        <div className=" bg-neutral flex justify-around border-b border-zinc-800 ">
          <div className="flex">
            <NavBarTheme
              stylingProps1={'w-6 h-6 place-self-center text-neutral-content'}
              stylingProps2={
                'w-4 h-4 mt-1 place-self-center opacity-80 text-neutral-content'
              }
            />

            <NotificationDropDown />
          </div>

          <div className="text-2xl place-self-center hover:cursor-default text-neutral-content">
            داشبورد
          </div>
          <Link
            href="/"
            className="normal-case text-3xl hover:underline underline-offset-2 place-self-center text-neutral-content"
          >
            {CLIENT_NAME_FA}
          </Link>
        </div>
        <div className="grid grid-cols-4 h-full">
          <div className="bg-neutral col-span-3 p-2  ">
            <div className="m-8 bg-base-100 rounded-box p-2 flex flex-col text-center items-center max-w-4xl shadow-md drop-shadow-md">
              <Stat2 />
              <div className="divider">خدمات و تعمیرات</div>

              <div
                className="btn btn-primary btn-outline gap-8 mx-16 mb-2 flex justify-center shadow max-w-lg w-full"
                onClick={onRequestServiceClick}
              >
                درخواست خدمات و تعمیرات
                <IconService stylingProps={'w-6 h-6'} />
              </div>

              <div
                className="btn btn-outline btn-primary gap-8 mx-16 mb-2 flex justify-center shadow max-w-lg w-full"
                onClick={onWorkFlowClick}
              >
                مشاهده گردش کار
                <IconGardeshKar stylingProps={'w-6 h-6'} />
              </div>

              <div className="divider">گزارش‌ها</div>

              <div
                className="btn btn-primary hover:border-slate-400 gap-8 mx-16 mb-2 shadow max-w-lg w-full"
                onClick={onTransactionsClick}
              >
                تاریخچه سفارش‌ها و درخواست‌ها
                <IconWallet stylingProps={'w-6 h-6'} />
              </div>
            </div>
          </div>

          <div className="bg-neutral p-2 flex flex-col text-center pt-8 border-l border-zinc-800 justify-evenly">
            <div>
              <div className=" mx-auto m-1">
                <div className="btn btn-ghost normal-case text-xl btn-active w-4/5 hover:cursor-default disabled text-neutral-content">
                  داشبورد
                  <IconDashboardHome
                    stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                  />
                </div>
              </div>

              <div className=" mx-auto m-1">
                <Link
                  href="/store"
                  className="btn btn-ghost normal-case text-xl w-4/5 text-neutral-content"
                >
                  فروشگاه
                  <IconDashboardStore
                    stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                  />
                </Link>
              </div>

              <div>
                <Link
                  href="/mag"
                  className="btn btn-ghost normal-case text-xl  w-4/5 text-neutral-content"
                >
                  مجله
                  <IconDashboardMag
                    stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                  />
                </Link>
              </div>
              <div className="divider"></div>

              <div>
                <Link
                  href="/dashboard/cart"
                  className="btn btn-ghost normal-case text-xl  w-4/5 text-neutral-content"
                >
                  سبد خرید
                  {cartsCtx.totalCarts > 0 && (
                    <div className="badge badge-secondary ml-2">
                      {cartsCtx.totalCarts}
                    </div>
                  )}
                  <IconCart
                    stylingProps={'w-8 h-8 ml-4 stroke-primary fill-none'}
                  />
                </Link>
              </div>
              <div className="divider"></div>
            </div>

            <div className="bottom-3/4">
              <div
                className=" transition-colors duration-300 w-4/5 border m-4 rounded-box p-2 hover:bg-neutral-focus hover:cursor-pointer flex justify-center mx-auto hover:border-dashed border-primary-focus"
                onClick={onAccountClick}
              >
                <div className="flex flex-col justify-center mr-3">
                  <div
                    className="cursor-pointer content-center justify-center text-neutral-content"
                    dir="rtl"
                  >
                    {data.currentUser.gender === 'زن'
                      ? ' خانم ' + data.currentUser.laName
                      : ' آقای ' + data.currentUser.laName}
                  </div>
                  <div className="text-sm text-neutral-content text-opacity-70">
                    اکانت فعال
                  </div>
                </div>

                <div class="avatar online placeholder cursor-pointer">
                  <div class="bg-primary-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl text-neutral-content">
                      {data.currentUser.fiName + data.currentUser.laName}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="btn btn-outline btn-accent normal-case text-xl  w-4/5 flex mx-auto justify-evenly"
                onClick={onLogOutClick}
              >
                خروج
                <IconDashboardLogOut stylingProps={'w-6 h-6'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get(`${APP_URL}/api/v1/users/currentuser`, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  })
  const data = await res.data

  {
    /* 

  if (!data) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    }
  }

  if (!data.currentUser.id) {
    return {
      redirect: {
        destination: '/auth/sign-in', //`${APP_URL}/dashboard`
        permanent: false,
      },
    }
  }
  */
  }

  return { props: { data } }
}

export default Dashboard
