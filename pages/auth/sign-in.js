import { useState, useContext, Fragment } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import useRequest from '../../hooks/use-request'

import Navbar from '../../components/layout/navbar/navbar'

import CardComponent from '../../components/layout/card'

import Snackbar from 'awesome-snackbar'

import axios from 'axios'
import { CLIENT_NAME_FA, APP_URL } from '../../envConfig'

import FooterNotMain from '../../components/layout/footernotmain'

const SignIn = () => {
  const router = useRouter()

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const reqWasSuccess = (data) => {
    new Snackbar('عملیات موفقیت آمیز بود', {
      position: 'bottom-right',
    })
    router.push('/dashboard')
  }

  var error

  const { doRequest, errors } = useRequest({
    url: '/api/v1/users/signin',
    method: 'post',
    body: {
      mobile,
      password,
    },
    onSuccess: (response) => reqWasSuccess(response),
  })

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/auth/sign-up')
  }
  const onClickForgotPass = (e) => {
    e.preventDefault()

    new Snackbar('در حال توسعه ... با تیم پشتیبانی تماس بگیرید', {
      position: 'bottom-right',
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    error = ''

    if (mobile.length !== 11) {
      new Snackbar('خطا! موبایل باید ۱۱ رقم باشد', {
        position: 'bottom-right',
      })
      error = error + 'mobile'
    }

    if (password.length < 8) {
      new Snackbar('خطا! رمز باید حداقل ۸ کاراکتر باشد', {
        position: 'bottom-right',
      })
      error = error + 'password'
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
        <title>{CLIENT_NAME_FA} - ورود</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
        <Navbar />
        <CardComponent>
          <form onSubmit={onSubmit} className="card-body">
            <div className="btn-group justify-center mb-8">
              <button
                onClick={handleClick}
                className="btn bg-base-100 text-neutral-content hover:bg-primary/80"
              >
                ثبت نام
              </button>
              <button className="btn btn-active btn-disabled">ورود</button>
            </div>

            <div className="mx-auto">
              <label className="input-group">
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="09121802250"
                  className="input input-bordered text-center w-full"
                ></input>
                <span className="text-center">شناسه کاربری</span>
              </label>

              <div className="mx-auto mt-3">
                <label className="input-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="● ● ● ● ● ● ● ●"
                    className="input input-bordered text-center w-full"
                  />
                  <span className="text-center">رمز عبور</span>
                </label>
              </div>

              <label className="label justify-end place-content-end items-end mt-2">
                <a
                  className="label-text-alt link underline link-primary link-hover hover:bg-primary-focus"
                  onClick={onClickForgotPass}
                >
                  رمزم را فراموش کرده‌ام
                </a>
              </label>

              <button type="submit" className="btn btn-primary  mt-6 w-full">
                ورود
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

export default SignIn
