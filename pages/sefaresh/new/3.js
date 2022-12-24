import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../../components/layout/navbar/navbar'
import CardComponent from '../../../components/layout/card'
import FooterNotMain from '../../../components/layout/footernotmain'

const RequestService3 = () => {
  const router = useRouter()

  //for 1 page
  const [enteredName, setEnteredName] = useState()
  const [enteredGender, setEnteredGender] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredServiceKind, setEnteredServiceKind] = useState()
  const [isExpress, setIsExpress] = useState()
  //for 2 page
  const [postalCodeNum, setPostalCodeNum] = useState()
  const [addressStr, setAddressStr] = useState()
  //for this page
  const [enteredPaymentKind, setEnteredPaymentKind] = useState(
    'پرداخت از طریق درگاه بانکی'
  )

  useEffect(() => {
    if (router.isReady) {
      // Code using query
      var passedData = router.query
      console.log(passedData)

      setPostalCodeNum(passedData.postalCodeNum)
      setAddressStr(passedData.addressStr)

      setEnteredName(passedData.enteredName)
      setEnteredGender(passedData.enteredGender)
      setEnteredDevice(passedData.enteredDevice)
      setEnteredDescription(passedData.enteredDescription)
      setEnteredMobile(passedData.enteredMobile)
      setEnteredServiceKind(passedData.enteredServiceKind)
      setIsExpress(passedData.isExpress)
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
        enteredGender,
        enteredDevice,
        enteredDescription,
        enteredMobile,
        enteredServiceKind,
        isExpress,
        postalCodeNum,
        addressStr,
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

          <div className="flex justify-around" dir="rtl">
            <h3 className=" text-lg">
              {enteredGender === 'زن'
                ? ' خانم ' + enteredName
                : ' آقای ' + enteredName}
            </h3>
            <h3 className=" text-lg">{enteredMobile}</h3>
          </div>

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

          <div className="divider"></div>

          <h3 className="text-lg" dir="rtl">
            کد پستی: {postalCodeNum}
          </h3>
          <h3 className="text-lg" dir="rtl">
            آدرس: {addressStr}
          </h3>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              ثبت درخواست
            </button>
          </div>
        </form>
      </CardComponent>
      <FooterNotMain />
    </div>
  )
}

export default RequestService3
