import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../components/layout/navbar/navbar'

import useRequest from '../hooks/use-request'
import CardComponent from '../components/layout/card'

var slugify = require('slugify-persian')

const SignUp = () => {
  const router = useRouter()

  const [gender, setGender] = useState()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/auth/signin')
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    doRequest()
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <div className="card max-w-2xl w-96 bg-neutral shadow-xl drop-shadow-xl mt-5 p-1 max-h-[630px] overflow-scroll overscroll-contain">
        <form onSubmit={onSubmit} className="card-body">
          <div className="form-control">
            <div className="form-control mx-auto items-center justify-center content-center w-full">
              <label className="input-group">
                <input
                  type="text"
                  placeholder="شهاب"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">نام</span>
              </label>
            </div>

            <div className="form-control mx-auto mt-3 ">
              <label className="input-group">
                <input
                  type="text"
                  placeholder="آواژ"
                  className="input input-bordered text-center  w-full"
                />
                <span className="  text-center">نام خانوادگی</span>
              </label>
            </div>

            <div className="form-control mx-auto mt-3 w-5/6">
              <label className="input-group">
                <input
                  type="number"
                  placeholder="۰۹۱۲۲۴۵۳۲۵۸"
                  className="input input-bordered text-center  "
                />
                <span className="  text-center">شماره موبایل</span>
              </label>
            </div>

            <select
              className="select select-bordered mx-auto max-w-xs mt-3 mb-3 w-full"
              dir="rtl"
              onChange={(e) => setGender(e.target.value)}
            >
              <option disabled selected className="text-center content-center">
                جنسیت
              </option>
              <option className="text-center content-center" dir="rtl">
                مرد
              </option>
              <option className="text-center content-center" dir="rtl">
                زن
              </option>
            </select>

            <div className="form-control mx-auto w-5/6 items-center justify-center content-center">
              <label className="input-group">
                <input
                  type="password"
                  placeholder="● ● ● ● ● ● ● ●"
                  className="input input-bordered  text-center "
                />
                <span className="  text-center">رمز</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary  mt-6 ">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
