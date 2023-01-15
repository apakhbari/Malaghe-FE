import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { useEffect, useState, useContext, Fragment } from 'react'

import { themeChange } from 'theme-change'

import useRequest from '../../hooks/use-request'

import Snackbar from 'awesome-snackbar'

import IconDashboardHome from '../../assets/icons/svg/icondashboardhome'
import IconDashboardMag from '../../assets/icons/svg/icondashboardmag'
import IconDashboardStore from '../../assets/icons/svg/icondashboardstore'
import IconCart from '../../assets/icons/svg/iconcart'
import IconDashboardLogOut from '../../assets/icons/svg/icondashboardlogout'
import IconEditingAccount from '../../assets/icons/svg/iconeditingaccount'
import IconDoneEditingAccount from '../../assets/icons/svg/icondoneedittingaccount'
import IconGeoLocation from '../../assets/icons/svg/icongeolocation'
import NotificationDropDown from '../../components/layout/store/notificationdropdown'

import BuildClient from '../../api/build-client'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'
import IconGearAccount from '../../assets/icons/svg/icongearaccount'

import CartsContext from '../../store/cart-context'

import NavBarTheme from '../../components/layout/navbar/navbarhelper/navbartheme'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'
import MobileDeveloping from '../../components/layout/mobileDeveloping'

import axios from 'axios'

function Account({ data }) {
  console.log(data)

  const router = useRouter()

  const cartsCtx = useContext(CartsContext)

  const [editing, setEditing] = useState(true)

  const [firstName, setFirstName] = useState(data.fiName)
  const [lastName, setLastName] = useState(data.laName)
  const [gender, setGender] = useState(data.isMale)
  const [mobileNum, setMobileNum] = useState(data.mobile)
  const [phoneNum, setPhoneNum] = useState(data.phone || 'تخصیص داده نشده')
  const [emailStr, setEmailStr] = useState(data.email || 'تخصیص داده نشده')
  const [postalCodeNum, setPostalCodeNum] = useState('تخصیص داده نشده')
  const [addressStr, setAddressStr] = useState('تخصیص داده نشده')

  if (data.locations.length > 0) {
    if (data.locations[0].address) {
      useEffect(() => {
        setAddressStr(data.locations[0].address)
      })
    }
    if (data.locations[0].postalCode) {
      useEffect(() => {
        setPostalCodeNum(data.locations[0].postalCode)
      })
    }
  }

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const handleEditCheckBox = (e) => {
    e.preventDefault()
    setEditing(!editing)
  }

  const onPinClick = (e) => {
    e.preventDefault()

    new Snackbar('... در حال توسعه', {
      position: 'bottom-right',
    })
  }

  const reqWasSuccess = (data) => {
    new Snackbar('عملیات موفقیت آمیز بود', {
      position: 'bottom-right',
    })
    router.push('/dashboard')
  }

  const { doRequest, errors } = useRequest({
    url: `/api/v1/users/${data.id}`,
    method: 'put',
    body: {
      id: data.id,
      fiName: firstName,
      laName: lastName,
      email: emailStr,
      mobile: mobileNum,
      phone: phoneNum,
      locations: { address: addressStr, postalCode: postalCodeNum },
    },
    onSuccess: (response) => reqWasSuccess(response),
  })

  const onSignOutHandler = (data) => {
    new Snackbar('خدا نگهدار', {
      position: 'bottom-right',
    })
    router.push('/')
  }

  const { doRequest: doSignOutRequest } = useRequest({
    url: '/api/v1/users/signout',
    method: 'post',
    body: {},
    onSuccess: (response) => onSignOutHandler(response),
  })

  const onLogOutClick = (e) => {
    e.preventDefault()

    doSignOutRequest()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    new Snackbar('لطفاً شکیبا باشید', {
      position: 'bottom-right',
    })

    setEditing(true)
    doRequest()
  }

  return (
    <Fragment>
      <Head>
        <title>
          {CLIENT_NAME_FA} - {firstName + ' ' + lastName}
        </title>
      </Head>

      <div className=" md:hidden">
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
            اطلاعات اکانت
          </div>
          <Link
            href="/"
            className="normal-case text-3xl hover:underline underline-offset-2 place-self-center text-neutral-content"
          >
            {CLIENT_NAME_FA}
          </Link>
        </div>
        <div className="grid grid-cols-4 h-full">
          <div className="bg-neutral col-span-3 p-2">
            <div className="m-8 bg-base-100 rounded-box p-3 flex flex-col shadow-md drop-shadow-md w-3/5 mx-auto">
              <div className="grid grid-cols-2 gap-4 w-full mx-auto">
                <div className="ml-6 flex">
                  <div className="avatar online placeholder cursor-default">
                    <div className="bg-primary-focus text-neutral-content rounded-full w-16">
                      <span className="text-xl text-neutral-content">
                        {firstName + lastName}
                      </span>
                    </div>
                  </div>
                  {!editing && (
                    <IconGearAccount stylingProps={'w-6 h-6 text-secondary'} />
                  )}
                </div>

                <label
                  className="btn btn-secondary justify-self-end my-auto mr-6 px-4"
                  onClick={handleEditCheckBox}
                >
                  {editing && (
                    <div className="flex place-items-center justify-evenly">
                      ویرایش
                      <IconEditingAccount
                        stylingProps={'w-5 h-5 outline-primary-content ml-3'}
                      />
                    </div>
                  )}
                  {!editing && (
                    <div className="flex place-items-center justify-evenly ">
                      اتمام ویرایش
                      <IconDoneEditingAccount
                        stylingProps={'w-5 h-5 outline-primary-content ml-3'}
                      />
                    </div>
                  )}
                </label>

                <div dir="rtl">
                  <label className="input-group input-group-vertical">
                    <span className="justify-center">نام خانوادگی</span>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      disabled={editing ? 'disabled' : ''}
                      placeholder={lastName}
                      className="input input-bordered justify-center text-center"
                    />
                  </label>
                </div>

                <div dir="rtl">
                  <label className="input-group input-group-vertical">
                    <span className="justify-center">نام</span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      disabled={editing ? 'disabled' : ''}
                      placeholder={firstName}
                      className="input input-bordered justify-center text-center"
                    />
                  </label>
                </div>

                <div dir="rtl">
                  <label className="input-group input-group-vertical">
                    <span className="justify-center">شماره تلفن</span>
                    <input
                      type="number"
                      value={phoneNum === 'تخصیص داده نشده' ? '' : phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      disabled={editing ? 'disabled' : ''}
                      placeholder={
                        phoneNum === 'تخصیص داده نشده'
                          ? 'تخصیص داده نشده'
                          : phoneNum
                      }
                      className="input input-bordered justify-center text-center"
                    />
                  </label>
                </div>

                <div dir="rtl">
                  <label className="input-group input-group-vertical">
                    <span className="justify-center">شماره موبایل</span>
                    <input
                      type="number"
                      value={mobileNum}
                      onChange={(e) => setMobileNum(e.target.value)}
                      disabled={editing ? 'disabled' : ''}
                      placeholder={mobileNum}
                      className="input input-bordered justify-center text-center"
                    />
                  </label>
                </div>

                <div dir="rtl">
                  <label className="input-group input-group-vertical">
                    <span className="justify-center">کدپستی</span>
                    <input
                      type="number"
                      value={
                        postalCodeNum === 'تخصیص داده نشده' ? '' : postalCodeNum
                      }
                      onChange={(e) => setPostalCodeNum(e.target.value)}
                      disabled={editing ? 'disabled' : ''}
                      placeholder={
                        postalCodeNum === 'تخصیص داده نشده'
                          ? 'تخصیص داده نشده'
                          : postalCodeNum
                      }
                      className="input input-bordered justify-center text-center"
                    />
                  </label>
                </div>

                <div dir="rtl">
                  <label className="input-group input-group-vertical">
                    <span className="justify-center">ایمیل</span>
                    <input
                      type="email"
                      value={emailStr === 'تخصیص داده نشده' ? '' : emailStr}
                      onChange={(e) => setEmailStr(e.target.value)}
                      disabled={editing ? 'disabled' : ''}
                      placeholder={
                        emailStr === 'تخصیص داده نشده'
                          ? 'تخصیص داده نشده'
                          : emailStr
                      }
                      className="input input-bordered justify-center text-center"
                    />
                  </label>
                </div>

                <div dir="rtl" className="col-span-2">
                  <label className="input-group input-group-vertical">
                    <span className="justify-center">آدرس</span>
                    <input
                      type="text"
                      value={addressStr === 'تخصیص داده نشده' ? '' : addressStr}
                      onChange={(e) => setAddressStr(e.target.value)}
                      disabled={editing ? 'disabled' : ''}
                      placeholder={
                        addressStr === 'تخصیص داده نشده'
                          ? 'تخصیص داده نشده'
                          : addressStr
                      }
                      className="input input-bordered justify-center text-center"
                    />
                  </label>
                </div>

                <div dir="rtl" className="flex justify-evenly content-center">
                  <label className="label cursor-default">
                    <span className="label-text">اکانت فعال است.</span>
                  </label>
                  <label className="label cursor-default">
                    <input
                      type="checkbox"
                      checked
                      className="toggle toggle-primary"
                      disabled={editing ? 'disabled' : ''}
                    />
                  </label>
                </div>

                <div
                  className="inline-flex items-center btn btn-accent mx-auto justify-evenly"
                  disabled={editing ? 'disabled' : ''}
                  onClick={onPinClick}
                >
                  پین کردن آدرس روی نقشه
                  <IconGeoLocation stylingProps={'w-6 h-6'} />
                </div>

                {!editing && (
                  <label
                    className="btn btn-primary my-auto mx-4 col-span-2"
                    onClick={handleSubmit}
                  >
                    اعمال تغییرات
                  </label>
                )}
              </div>
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
              <div className="w-4/5 border m-4 rounded-box p-2 bg-neutral-focus hover:cursor-default flex justify-center mx-auto border-dashed border-primary-focus">
                <div className="flex flex-col justify-center mr-3">
                  <div
                    className="cursor-pointer content-center justify-center text-neutral-content"
                    dir="rtl"
                  >
                    {gender === true
                      ? ' آقای ' + lastName
                      : ' خانم ' + lastName}
                  </div>
                  <div className="text-sm text-neutral-content text-opacity-70">
                    اکانت فعال
                  </div>
                </div>

                <div className="avatar online placeholder cursor-pointer">
                  <div className="bg-primary-focus text-neutral-content rounded-full w-16">
                    <span className="text-xl text-neutral-content">
                      {firstName + lastName}
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
  const { id } = context.query

  const res = await axios.get(`${APP_URL}/api/v1/users/${id}`, {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  })
  const data = await res.data

  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default Account
