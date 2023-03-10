import { useState, useEffect, Fragment } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'

import BuildClient from '../../../api/build-client'
import RemoveUndefinedsToPleaseNext from '../../../hooks/removeUndefineds'

import Navbar from '../../../components/layout/navbar/navbar'
import CardComponent from '../../../components/layout/card'

import Snackbar from 'awesome-snackbar'
import { CLIENT_NAME_FA, APP_URL } from '../../../envConfig'

import axios from 'axios'

const RequestService1 = ({ data }) => {
  const router = useRouter()

  const [userID, setUserID] = useState()
  const [enteredName, setEnteredName] = useState()
  const [enteredGender, setEnteredGender] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredPhone, setEnteredPhone] = useState()
  const [isExpress, setIsExpress] = useState(false)

  var postalCode = 'تخصیص داده نشده'
  var address = 'تخصیص داده نشده'

  if (data.locations.length > 0) {
    if (data.locations[0].address) {
      address = data.locations[0].address
    }
    if (data.locations[0].postalCode) {
      postalCode = data.locations[0].postalCode
    }
  }

  if (data) {
    if (data.id) {
      useEffect(() => {
        setUserID(data.id)
        setEnteredName(data.fiName + ' ' + data.laName)
        setEnteredGender(data.isMale)
        setEnteredMobile(data.mobile)
        setEnteredPhone(data.phone)
      }, [data.id])
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    var error = ''

    if (enteredName.length < 2) {
      new Snackbar('خطا! نام باید حداقل ۲ کاراکتر باشد', {
        position: 'bottom-right',
      })
      error = error + 'fiName'
    }
    if (enteredMobile.length !== 11) {
      new Snackbar('خطا! موبایل باید ۱۱ رقم باشد', {
        position: 'bottom-right',
      })
      error = error + 'mobile'
    }
    if (enteredPhone.length < 2) {
      new Snackbar('خطا! شماره تلفن باید حداقل ۲ کاراکتر باشد', {
        position: 'bottom-right',
      })
      error = error + 'phone'
    }

    if (error.length === 0) {
      router.replace(
        {
          pathname: '/sefaresh/cart/2',
          query: {
            userID,
            enteredName,
            enteredGender,
            enteredDescription,
            enteredMobile,
            enteredPhone,
            isExpress,
            address,
            postalCode,
          },
        },
        '/sefaresh/cart/2'
      )
    }
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - ۱ درخواست خرید</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen mx-auto">
        <Navbar />
        <CardComponent>
          <form onSubmit={onSubmit} className="card-body">
            <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
              ثبت درخواست خرید
            </h3>

            <ul className="steps">
              <li data-content="3" className="step text-neutral-content">
                پرداخت
              </li>
              <li data-content="2" className="step text-neutral-content">
                آدرس
              </li>
              <li
                data-content="1"
                className="step step-primary text-neutral-content"
              >
                اطلاعات پایه
              </li>
            </ul>

            <div className="form-control">
              <div className="form-control mx-auto">
                <label className="input-group mt-6">
                  <input
                    type="text"
                    value={enteredName}
                    onChange={(e) => setEnteredName(e.target.value)}
                    placeholder="شهاب آواژ"
                    className="input input-bordered  text-center w-full"
                  />
                  <span className=" text-center">نام</span>
                </label>

                <label className="input-group mt-3">
                  <input
                    type="number"
                    value={enteredMobile}
                    onChange={(e) => setEnteredMobile(e.target.value)}
                    placeholder="۰۹۱۲۴۵۰۳۲۳۲"
                    className="input input-bordered  text-center w-full"
                  />
                  <span className="text-center">شماره موبایل</span>
                </label>

                <label className="input-group mt-3">
                  <input
                    type="number"
                    onChange={(e) => setEnteredPhone(e.target.value)}
                    className="input input-bordered  text-center w-full"
                    value={
                      enteredPhone === 'تخصیص داده نشده' ? '' : enteredPhone
                    }
                    placeholder={'۰۲۱۲۲۶۵۱۲۳۴'}
                  />
                  <span className="text-center">شماره تلفن</span>
                </label>

                <textarea
                  className="textarea textarea-bordered  mt-4 justify-center w-full"
                  value={enteredDescription}
                  onChange={(e) => setEnteredDescription(e.target.value)}
                  placeholder="توضیحات: به نگهبان تحویل داده شود."
                  dir="rtl"
                />

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      onClick={(e) => setIsExpress(!isExpress)}
                    />
                    <div>
                      <div className="dropdown dropdown-left">
                        <label
                          tabIndex={0}
                          className="btn btn-circle btn-ghost btn-xs text-info"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 stroke-current"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </label>
                        <div
                          tabIndex={0}
                          className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
                        >
                          <div className="card-body" dir="rtl">
                            <p>شامل ۱۰ درصد هزینه بالاتر است.</p>
                          </div>
                        </div>
                      </div>
                      <span className="text-neutral-content"> خرید پرسرعت</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary  ">
                مرحله بعد
              </button>
            </div>
          </form>
        </CardComponent>
      </div>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.accountId

  const res = await axios.get(`${APP_URL}/api/v1/users/service/${id}`, {
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

export default RequestService1
