import { Fragment, useState } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import Navbar from '../../components/layout/navbar/navbar'
import CardComponent from '../../components/layout/card'
import FooterNotMain from '../../components/layout/footernotmain'

import Snackbar from 'awesome-snackbar'
import { CLIENT_NAME_FA } from '../../envConfig'

function Sefaresh() {
  const router = useRouter()

  const [enteredMobile, setEnteredMobile] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh/gardeshkar')
  }

  const onSubmit = (e) => {
    e.preventDefault()

    var error = ''

    if (enteredMobile.length !== 11) {
      new Snackbar('خطا! موبایل باید ۱۱ رقم باشد', {
        position: 'bottom-right',
      })
      error = error + 'mobile'
    }

    if (error.length === 0) {
      new Snackbar('لطفاً شکیبا باشید', {
        position: 'bottom-right',
      })

      router.push(
        {
          pathname: '/sefaresh/list',
          query: { id: enteredMobile },
        },
        '/sefaresh/list'
      )
    }
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - درخواست‌ها</title>
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
                گردش‌کار
              </button>
              <button className="btn btn-active btn-disabled">
                لیست درخواست‌ها
              </button>
            </div>

            <h3 dir="rtl" className="text-xl text-center text-neutral-content">
              مشاهده لیستی از تمامی سفارش‌ها و درخواست‌های تعمیرات
            </h3>
            <br />

            <div className=" form-control">
              <div className="mx-auto mb-4">
                <label className="input-group">
                  <input
                    type="number"
                    value={enteredMobile}
                    onChange={(e) => setEnteredMobile(e.target.value)}
                    placeholder="09121802250"
                    className="input input-bordered text-center w-full"
                  ></input>
                  <span className="text-center">شماره موبایل</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary  mt-6">
                مشاهده
              </button>
            </div>
          </form>
        </CardComponent>
        <FooterNotMain />
      </div>
    </Fragment>
  )
}
export default Sefaresh
