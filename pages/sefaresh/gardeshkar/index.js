import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../../../components/layout/navbar/navbar'
import CardComponent from '../../../components/layout/card'
import FooterNotMain from '../../../components/layout/footernotmain'

import Snackbar from 'awesome-snackbar'

function GardeshKar() {
  const router = useRouter()

  const [enteredId, setEnteredId] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh')
  }

  const onSubmit = (e) => {
    e.preventDefault()

    var error = ''

    if (enteredId.length !== 5) {
      new Snackbar('خطا! کد پیگیری باید ۵ رقم باشد', {
        position: 'bottom-right',
      })
      error = error + 'mobile'
    }

    if (error.length === 0) {
      router.push('/sefaresh/gardeshkar/workflow1')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <CardComponent>
        <form onSubmit={onSubmit} className="card-body">
          <div className="btn-group justify-center mb-8">
            <button className="btn btn-active btn-disabled">گردش‌کار</button>
            <button
              className="btn  bg-base-100 text-neutral-content hover:bg-primary/80"
              onClick={handleClick}
            >
              لیست درخواست‌ها
            </button>
          </div>

          <h3 dir="rtl" className="text-xl text-center text-neutral-content">
            مشاهده گردش‌کار
          </h3>
          <br />

          <div className=" form-control">
            <div className="mx-auto mb-4">
              <label className="input-group">
                <input
                  type="text"
                  value={enteredId}
                  onChange={(e) => setEnteredId(e.target.value)}
                  placeholder="12345"
                  className="input input-bordered text-center w-full"
                ></input>
                <span className="text-center">شماره پیگیری</span>
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
  )
}
export default GardeshKar
