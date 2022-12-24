import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../components/layout/navbar/navbar'
import CardComponent from '../../components/layout/card'
import FooterNotMain from '../../components/layout/footernotmain'

import GroupDigital from '../../hooks/groupDigital'

const RequestService3 = () => {
  const router = useRouter()

  //for this page
  const [enteredPaymentKind, setEnteredPaymentKind] = useState(
    'پرداخت از طریق درگاه بانکی'
  )

  useEffect(() => {
    if (router.isReady) {
      var passedData = router.query
      console.log(passedData)
      //setPostalCodeNum(passedData.postalCode)
      //setAddressStr(passedData.address)
    }
  }, [router.isReady])

  const onSubmit = (e) => {
    e.preventDefault()

    //if (!name || !unitsNumber) {
    //toast('لطفاً مقادیر را پر کنید.')
    //return
    //}

    //Submit

    router.push({
      pathname: '/developing',
      query: {
        enteredPaymentKind,
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
      <Navbar />
      <CardComponent>
        <form onSubmit={onSubmit} className="card-body">
          <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
            پرداخت
          </h3>

          <h3 dir="rtl" className="text-xl text-neutral-content">
            سفارش شماره ۱۲۳۴
          </h3>
          <h3 dir="rtl" className="text-xl text-neutral-content">
            شماره موبایل: ۰۹۱۲۲۷۸۸۲۱۰
          </h3>

          <select
            className="select select-bordered w-full max-w-xs mt-6"
            onChange={(e) => setEnteredPaymentKind(e.target.value)}
          >
            <option selected className="text-center content-center" dir="rtl">
              پرداخت از طریق درگاه بانکی
            </option>
            <option className="text-center content-center" dir="rtl">
              کارت به کارت
            </option>
            <option className="text-center content-center" dir="rtl">
              پرداخت حضوری
            </option>
          </select>

          <div className="form-control">
            <div className="form-control mx-auto text-neutral-content">
              <div dir="rtl" className="flex justify-between mt-6">
                <p className=" text-xl"> مبلغ : </p>
                <p className=" text-xl"> {GroupDigital(25000)} تومان</p>
              </div>
            </div>
            <br />
          </div>
          <div>
            <div className="form-control">
              <div className="relative w-full justify-center text-center">
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  اعمال کد تخفیف
                </button>
                <input
                  type="text"
                  placeholder="کد تخفیف"
                  class="input input-bordered w-full pr-16"
                />
              </div>
            </div>
          </div>

          {enteredPaymentKind === 'کارت به کارت' && (
            <div>
              <h3 className="mt-3" dir="rtl">
                انتقال وجه به کارت بانک پاسارگاد، به نام با شماره:
              </h3>
              <h3 className="mt-3 text-center font-bold">
                ۵۰۲۲-۲۹۱۰-۶۳۰۰-۴۰۲۰
              </h3>
            </div>
          )}

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              {enteredPaymentKind === 'پرداخت از طریق درگاه بانکی'
                ? 'انتقال به درگاه پرداخت'
                : 'ثبت درخواست'}
            </button>
          </div>
        </form>
      </CardComponent>
      <FooterNotMain />
    </div>
  )
}

export default RequestService3
