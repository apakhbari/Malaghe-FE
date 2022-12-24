import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../../components/layout/navbar/navbar'
import CardComponent from '../../../components/layout/card'
import FooterNotMain from '../../../components/layout/footernotmain'

const RequestService3 = () => {
  const router = useRouter()

  //for 1 page
  const [enteredName, setEnteredName] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredServiceKind, setEnteredServiceKind] = useState()
  const [isExpress, setIsExpress] = useState()
  const [enteredPrice, setEnteredPrice] = useState('')
  const [enteredPhone, setEnteredPhone] = useState('')
  //for 2 page
  const [postalCodeNum, setPostalCodeNum] = useState()
  const [addressStr, setAddressStr] = useState()
  //for this page
  const [enteredPaymentKind, setEnteredPaymentKind] = useState()

  let overallPrice

  useEffect(() => {
    if (router.isReady) {
      // Code using query
      var passedData = router.query
      console.log(passedData)

      setPostalCodeNum(passedData.postalCodeNum)
      setAddressStr(passedData.addressStr)

      setEnteredName(passedData.enteredName)
      setEnteredDevice(passedData.enteredDevice)
      setEnteredDescription(passedData.enteredDescription)
      setEnteredMobile(passedData.enteredMobile)
      setEnteredServiceKind(passedData.enteredServiceKind)
      setIsExpress(passedData.isExpress)
      setEnteredPrice(passedData.enteredPrice)
      setEnteredPhone(passedData.enteredPhone)

      if (isExpress) {
        setEnteredPrice(1.1 * parseInt(enteredPrice))
      }
    }
  }, [router.isReady])

  const onSubmit = (e) => {
    e.preventDefault()

    //new Snackbar('... لطفا منتظر بمانید', {
    //position: 'bottom-right',
    //})

    router.replace({
      pathname: '/developing',
      query: {
        enteredName,
        enteredDevice,
        enteredDescription,
        enteredMobile,
        enteredServiceKind,
        isExpress,
        postalCodeNum,
        addressStr,
        enteredPaymentKind,
        enteredPhone,
        overallPrice,
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
      <Navbar />
      <CardComponent>
        <form onSubmit={onSubmit} className="card-body">
          <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
            ثبت درخواست تعمیر
          </h3>
          <ul className="steps mb-2">
            <li
              data-content="3"
              className="step step-primary text-neutral-content"
            >
              ثبت
            </li>
            <li
              data-content="2"
              className="step step-primary text-neutral-content"
            >
              آدرس
            </li>
            <li
              data-content="1"
              className="step step-primary text-neutral-content"
            >
              اطلاعات پایه
            </li>
          </ul>
          <div className="divider">اطلاعات وارد شده</div>

          <h3 className=" text-lg" dir="rtl">
            {enteredName}
          </h3>
          <h3 className=" text-lg" dir="rtl">
            {enteredMobile}
          </h3>
          <h3 className=" text-lg" dir="rtl">
            {enteredPhone}
          </h3>

          <div className="divider"></div>

          <h3 className="text-lg" dir="rtl">
            {enteredDevice}
          </h3>
          <h3 className="text-lg" dir="rtl">
            توضیحات: {enteredDescription}
          </h3>
          <h3 className="text-lg" dir="rtl">
            نوع تعمیر: {enteredServiceKind}
          </h3>

          {isExpress && (
            <h3 className="text-lg" dir="rtl">
              خدمت پرسرعت
            </h3>
          )}

          <h3 className="text-lg text-primary" dir="rtl">
            پیش‌پرداخت : {enteredPrice}
          </h3>

          <div className="divider"></div>

          <h3 className="text-lg" dir="rtl">
            کد پستی: {postalCodeNum}
          </h3>
          <h3 className="text-lg" dir="rtl">
            آدرس: {addressStr}
          </h3>

          <div className="divider"></div>

          <select
            className="select select-bordered w-full max-w-xs mt-6"
            onChange={(e) => setEnteredPaymentKind(e.target.value)}
          >
            <option className="text-center content-center" dir="rtl">
              پرداخت از طریق درگاه بانکی
            </option>
            <option className="text-center content-center" dir="rtl">
              کارت به کارت
            </option>
            <option selected className="text-center content-center" dir="rtl">
              پرداخت حضوری
            </option>
          </select>

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
              ثبت و پرداخت
            </button>
          </div>
        </form>
      </CardComponent>
      <FooterNotMain />
    </div>
  )
}

export default RequestService3
