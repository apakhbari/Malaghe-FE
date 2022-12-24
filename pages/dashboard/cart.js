import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { useEffect, useState, useContext, Fragment } from 'react'

import { themeChange } from 'theme-change'

import buildClient from '../../api/build-client'

import axios from 'axios'

import useRequest from '../../hooks/use-request'

import IconDashboardHome from '../../assets/icons/svg/icondashboardhome'
import IconDashboardMag from '../../assets/icons/svg/icondashboardmag'
import IconDashboardStore from '../../assets/icons/svg/icondashboardstore'
import ThemeDropDown from '../../components/layout/dashboard/themedropdown'
import IconDashboardLogOut from '../../assets/icons/svg/icondashboardlogout'
import IconCart from '../../assets/icons/svg/iconcart'

import IconEditingAccount from '../../assets/icons/svg/iconeditingaccount'
import IconDoneEditingAccount from '../../assets/icons/svg/icondoneedittingaccount'
import IconGeoLocation from '../../assets/icons/svg/icongeolocation'
import CartDropDown from '../../components/layout/navbar/navbarhelper/cartdropdown'
import NotificationDropDown from '../../components/layout/store/notificationdropdown'

import tighe from '../../assets/images/store/tighe.jpg'

import BuildClient from '../../api/build-client'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'
import IconGearAccount from '../../assets/icons/svg/icongearaccount'

import CartsContext from '../../store/cart-context'

import CartComponent from '../../components/layout/dashboard/cartcomponent'

import NavBarTheme from '../../components/layout/navbar/navbarhelper/navbartheme'
import GroupDigital from '../../hooks/groupDigital'

function CartPage({ data }) {
  const router = useRouter()

  var overAllPrice = 0

  console.log({ data })

  const cartsCtx = useContext(CartsContext)

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const { doRequest: doSignOutRequest } = useRequest({
    url: '/api/v1/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => router.push('/'),
  })

  const onLogOutClick = (e) => {
    e.preventDefault()

    doSignOutRequest()
  }

  cartsCtx.carts.map((item) => {
    if (item.hasDiscount) {
      if (item.discountKind === 'درصد') {
        overAllPrice =
          overAllPrice +
          Math.round(((100 - item.discountedPrice) * item.price) / 100)
      } else {
        overAllPrice = overAllPrice + item.discountedPrice
      }
    } else {
      overAllPrice = overAllPrice + item.price
    }
  })

  const onRequestServiceClick = (e) => {
    e.preventDefault()

    router.push(
      {
        pathname: '/sefaresh/cart/1',
        query: { accountId: `${data.currentUser.id}` },
      },
      '/sefaresh/cart/1'
    )
  }

  return (
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
          سبد خرید
        </div>
        <Link
          href="/"
          className="normal-case text-3xl hover:underline underline-offset-2 place-self-center text-neutral-content"
        >
          ملاقه
        </Link>
      </div>
      <div className="grid grid-cols-4 h-screen">
        <div className="bg-neutral col-span-3 p-2">
          {cartsCtx.totalCarts === 0 && (
            <h3
              className=" text-center text-neutral-content font-extrabold text-2xl my-auto mt-20"
              dir="rtl"
            >
              سبد خرید شما خالیست ...
            </h3>
          )}
          <div className="grid grid-cols-2 gap-2 overflow-scroll overscroll-contain">
            {cartsCtx &&
              cartsCtx.carts.map((item) => (
                <CartComponent
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  hasDiscount={item.hasDiscount}
                  discountKind={item.discountKind}
                  discountedPrice={item.discountedPrice}
                  price={item.price}
                />
              ))}
          </div>
        </div>

        <div className="bg-neutral p-2 flex flex-col text-center pt-8 border-l border-zinc-800 justify-evenly">
          <div>
            <div className=" mx-auto m-1">
              <Link
                href="/dashboard"
                className="btn btn-ghost normal-case text-xl w-4/5 text-neutral-content"
              >
                داشبورد
                <IconDashboardHome
                  stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                />
              </Link>
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
                className="btn btn-ghost normal-case text-xl  w-4/5 text-neutral-content btn-active hover:cursor-default disabled"
              >
                سبد خرید
                {cartsCtx.totalCarts > 0 && (
                  <div className="badge badge-primary ml-2">
                    {cartsCtx.totalCarts}
                  </div>
                )}
                <IconCart
                  stylingProps={'w-8 h-8 ml-4 stroke-primary fill-none'}
                />
              </Link>
            </div>

            {cartsCtx.totalCarts > 0 && (
              <Fragment>
                <div className="divider"></div>
                <h3 className=" text-xl mb-2 text-secondary-focus font-extrabold">
                  : قیمت کل (تومن)
                </h3>
                <h3 className=" text-xl mb-2 text-secondary-focus font-extrabold">
                  {GroupDigital(overAllPrice)}
                </h3>
                <div>
                  <div
                    className="btn btn-secondary normal-case text-xl  w-4/5 text-neutral-content mt-2"
                    onClick={onRequestServiceClick}
                  >
                    ثبت اقلام و ادامه خرید
                  </div>
                </div>
              </Fragment>
            )}

            <div className="divider"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = buildClient(context)
  const { data } = await client.get('/api/v1/users/currentuser')

  if (!data) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  if (!data.currentUser) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  if (!data.currentUser.id) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  return { props: { data } }
}

export default CartPage
