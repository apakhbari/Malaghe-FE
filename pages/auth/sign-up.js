import { useState, useContext, Fragment } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import Navbar from '../../components/layout/navbar/navbar'

import useRequest from '../../hooks/use-request'
import CardComponent from '../../components/layout/card'

import Snackbar from 'awesome-snackbar'

import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'

import { GenderDictionary } from '../../hooks/dictionaries'

import FooterNotMain from '../../components/layout/footernotmain'

import axios from 'axios'

const SignUp = () => {
  const router = useRouter()

  const [fiName, setFiName] = useState('')
  const [laName, setLaName] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')

  const reqWasSuccess = (data) => {
    new Snackbar('عملیات موفقیت آمیز بود', {
      position: 'bottom-right',
    })
    router.push('/dashboard')
  }

  const { doRequest, errors } = useRequest({
    url: '/api/v1/users/signup',
    method: 'post',
    body: {
      fiName,
      laName,
      isMale: GenderDictionary[gender],
      mobile,
      password,
    },
    onSuccess: (response) => reqWasSuccess(response),
  })

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/auth/sign-in')
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    var error = ''

    {
      if (fiName.length < 2) {
        new Snackbar('خطا! نام باید حداقل ۲ کاراکتر باشد', {
          position: 'bottom-right',
        })
        error = error + 'fiName'
      }
      if (laName.length < 2) {
        new Snackbar('خطا! نام خانوادگی باید حداقل ۲ کاراکتر باشد', {
          position: 'bottom-right',
        })
        error = error + 'laName'
      }
      if (mobile.length !== 11) {
        new Snackbar('خطا! موبایل باید ۱۱ رقم باشد', {
          position: 'bottom-right',
        })
        error = error + 'mobile'
      }

      if (gender.length < 2) {
        new Snackbar('خطا! لطفا جنسیت را انتخاب کنید', {
          position: 'bottom-right',
        })
        error = error + 'gender'
      }
      if (password.length < 8) {
        new Snackbar('خطا! رمز باید حداقل ۸ کاراکتر باشد', {
          position: 'bottom-right',
        })
        error = error + 'password'
      }
    }

    if (error.length === 0) {
      new Snackbar('لطفاً شکیبا باشید', {
        position: 'bottom-right',
      })

      doRequest()
    }
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - ثبت نام</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
        <Navbar />
        <CardComponent>
          <form onSubmit={onSubmit} className="card-body">
            <div className="btn-group justify-center mb-8">
              <button className="btn btn-active hover:bg-primary-400  btn-disabled">
                ثبت نام
              </button>
              <button
                onClick={handleClick}
                className="btn bg-base-100 hover:bg-primary/80"
              >
                ورود
              </button>
            </div>

            <div className="form-control">
              <div className="mx-auto  items-center justify-center content-center w-full">
                <label className="input-group">
                  <input
                    type="text"
                    onChange={(e) => setFiName(e.target.value)}
                    placeholder="شهاب"
                    className="input input-bordered text-center w-full"
                  />
                  <span className="text-center">نام</span>
                </label>
              </div>

              <div className="form-control mx-auto mt-3 ">
                <label className="input-group">
                  <input
                    type="text"
                    onChange={(e) => setLaName(e.target.value)}
                    placeholder="آواژ"
                    className="input input-bordered text-center w-full"
                  />
                  <span className="  text-center">نام خانوادگی</span>
                </label>
              </div>

              <div className="form-control mx-auto mt-3 ">
                <label className="input-group">
                  <input
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="09121802250"
                    className="input input-bordered text-center w-full"
                  />
                  <span className="  text-center">شماره موبایل</span>
                </label>
              </div>

              <select
                className="select select-bordered mx-auto max-w-xs mt-3 mb-3 w-full"
                dir="rtl"
                onChange={(e) => setGender(e.target.value)}
              >
                <option
                  disabled
                  selected
                  className="text-center content-center w-full"
                >
                  جنسیت
                </option>
                <option className="text-center content-center" dir="rtl">
                  مرد
                </option>
                <option className="text-center content-center" dir="rtl">
                  زن
                </option>
              </select>

              <div className=" mx-auto  items-center justify-center content-center w-full">
                <label className="input-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="● ● ● ● ● ● ● ●"
                    className="input input-bordered text-center w-full"
                  />
                  <span className="  text-center">رمز</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary  mt-6 ">
                ثبت نام
              </button>
            </div>
          </form>
        </CardComponent>
        <FooterNotMain />
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

  if (data) {
    if (data.currentUser) {
      if (data.currentUser.id) {
        return {
          redirect: {
            destination: `${APP_URL}/dashboard`,
            permanent: false,
          },
        }
      }
    }
  }

  return { props: { data } }
}

export default SignUp
