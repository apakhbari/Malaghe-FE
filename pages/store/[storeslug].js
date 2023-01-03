import { useState, useEffect, useContext, Fragment } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'

import { themeChange } from 'theme-change'

import BuildClient from '../../api/build-client'
import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'
import CartDropDown from '../../components/layout/navbar/navbarhelper/cartdropdown'
import Link from 'next/link'
import NavBarTheme from '../../components/layout/navbar/navbarhelper/navbartheme'
import IconMag from '../../assets/icons/svg/iconmag'

import CartsContext from '../../store/cart-context'

import GroupDigital from '../../hooks/groupDigital'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'
import MobileDeveloping from '../../components/layout/mobileDeveloping'

import axios from 'axios'

function StoreSlug({ data }) {
  const router = useRouter()

  const cartsCtx = useContext(CartsContext)

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const clickOnAddCart = (e) => {
    cartsCtx.addCart({
      id: data.id,
      title: data.title,
      price: data.price,
      hasDiscount: data.hasDiscount,
      discountKind: data.discountKind,
      discountedPrice: data.discountedPrice,
    })

    console.log('cart:' + cartsCtx.totalCarts)
  }

  console.log(data)
  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - فروشگاه</title>
      </Head>

      <div className="sm:hidden">
        <MobileDeveloping />
      </div>
      <div className="grid grid-cols-3 h-screen">
        <div className="bg-neutral col-span-2 overflow-scroll overscroll-contain">
          <div className="flex justify-around">
            <div className="flex">
              <NavBarTheme
                stylingProps1={'w-6 h-6 place-self-center text-neutral-content'}
                stylingProps2={
                  'w-4 h-4 mt-1 place-self-center opacity-80 text-neutral-content'
                }
              />

              <CartDropDown
                stylingProps={'text-neutral-content rounded-full text-center'}
              />
            </div>
            <Link
              href="/store"
              className="normal-case text-2xl hover:underline underline-offset-2 place-self-center text-neutral-content"
            >
              فروشگاه
            </Link>
            <Link
              href="/"
              className="normal-case text-3xl hover:underline underline-offset-2 place-self-center text-neutral-content"
            >
              {CLIENT_NAME_FA}
            </Link>
          </div>

          <div className="flex flex-col">
            <h3
              className="mt-5 text-2xl font-extrabold text-neutral-content p-4 pb-0 items-start mx-4"
              dir="rtl"
            >
              {data.title}
            </h3>

            <h3
              className="mt-5 text-xl text-neutral-content p-4 items-start mx-4 border-y-4 border-accent"
              dir="rtl"
            >
              {data.summary}
            </h3>

            <h3
              className="mt-5 text-xl text-neutral-content p-4 pt-0 items-start mx-4 border-b-4 border-accent"
              dir="rtl"
            >
              توضیحات: {data.description}
            </h3>

            <h3
              className="mt-5 text-xl text-neutral-content p-4 pt-0 items-start mx-4 border-b-4 border-accent"
              dir="rtl"
            >
              طول: {GroupDigital(data.volumes.length)} سانتی‌متر، عرض:{' '}
              {data.volumes.width}
              سانتی‌متر، ارتفاع: {GroupDigital(data.volumes.height)}سانتی‌متر،
              وزن:
              {GroupDigital(data.volumes.weight)} گرم
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-around mt-5 bg-base-100">
          <div className="flex flex-col">
            <div
              className="stats stats-vertical bg-base-content text-base-100  justify-center lg:stats-horizontal shadow-2xl m-3"
              dir="rtl"
            >
              <div className="stat">
                <div className="stat-title">قیمت (تومن)</div>
                <div className="stat-value">
                  {data.hasDiscount && (
                    <h2 className="card-title font-extrabold" dir="rtl">
                      {data.discountKind === 'درصد'
                        ? `${GroupDigital(
                            Math.round(
                              ((100 - data.discountedPrice) * data.price) / 100
                            )
                          )}`
                        : `${GroupDigital(data.discountedPrice)}`}
                      <span className="line-through text-xs">
                        {GroupDigital(data.price)}
                      </span>
                    </h2>
                  )}
                  {!data.hasDiscount && (
                    <h2
                      className="card-title"
                      data-atropos-offset="6"
                      dir="rtl"
                    >
                      {GroupDigital(data.price)}
                    </h2>
                  )}
                </div>
                <div className="stat-desc">
                  {data.hasDiscount && (
                    <h2 dir="rtl">
                      {data.discountKind === 'درصد'
                        ? `${GroupDigital(data.discountedPrice)}% ↘︎`
                        : `تومن ${GroupDigital(
                            data.price - data.discountedPrice
                          )} ↘︎`}
                    </h2>
                  )}
                </div>
              </div>

              <div className="divider lg:divider-horizontal"></div>

              <div className="stat text-base">
                <div className="stat-title text-base-100">ساخت</div>
                <div className="stat-value">{data.madeIn}</div>
                <div className="stat-desc">{data.goodKind}</div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <label className="input-group">
                <input
                  type="number"
                  placeholder="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="input input-bordered"
                />
                <span>تعداد</span>
              </label>

              <div
                className="btn btn-primary mx-3 shadow mt-4"
                dir="rtl"
                onClick={clickOnAddCart}
              >
                + اضافه به سبد خرید
              </div>
            </div>
          </div>

          {data.hasMag && (
            <div className="btn btn-secondary mx-3 shadow mt-1" dir="rtl">
              <IconMag stylingProps={'w-6 h-6 ml-2'} />
              مشاهده در مجله
            </div>
          )}

          <div
            className="grid grid-cols-3 gap-4 bg-neutral rounded-box m-2 p-2"
            dir="rtl"
          >
            {/* content-center items-center text-center self-center place-content-center place-items-center place-self-center  */}
            <div className=" h-48 text-neutral-content text-2xl font-extrabold mt-1 mr-1">
              تصاویر:
            </div>
            <div className="bg-neutral-content col-span-2 row-span-2 rounded-box"></div>
            <div className="bg-neutral-content h-24 rounded-box"></div>
            <div className="bg-neutral-content h-24 rounded-box"></div>
            <div className="bg-neutral-content h-24 rounded-box"></div>
            <div className="bg-neutral-content h-24 rounded-box"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  var id = context.query.id

  const { data } = await axios.get(`${APP_URL}/api/v1/store/${id}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default StoreSlug
