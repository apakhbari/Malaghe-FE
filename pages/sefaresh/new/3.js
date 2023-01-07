import { Fragment, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import Navbar from '../../../components/layout/navbar/navbar'
import CardComponent from '../../../components/layout/card'
import FooterNotMain from '../../../components/layout/footernotmain'

import { CLIENT_NAME_FA } from '../../../envConfig'
import useRequest from '../../../hooks/use-request'

import Snackbar from 'awesome-snackbar'

const RequestService3 = () => {
  const router = useRouter()

  //for 1 page
  const [userID, setUserID] = useState()
  const [enteredName, setEnteredName] = useState()
  const [enteredGender, setEnteredGender] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredPhone, setEnteredPhone] = useState()
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

      setUserID(passedData.userID)
      setEnteredName(passedData.enteredName)
      setEnteredGender(passedData.enteredGender)
      setEnteredDevice(passedData.enteredDevice)
      setEnteredDescription(passedData.enteredDescription)
      setEnteredMobile(passedData.enteredMobile)
      setEnteredPhone(passedData.enteredPhone)
      setEnteredServiceKind(passedData.enteredServiceKind)
      setIsExpress(passedData.isExpress)
    }
  }, [router.isReady])

  const { doRequest, errors } = useRequest({
    url: '/api/v1/orders',
    method: 'post',
    body: {
      userId: userID,
      userName: enteredName,
      gender: enteredGender,
      mobile: enteredMobile,
      phone: enteredPhone,
      postalCode: postalCodeNum,
      address: addressStr,

      paymentKind: enteredPaymentKind,
      isExpress: isExpress,
      isService: 1,
      serviceKind: enteredServiceKind,

      products: {
        title: enteredDevice,
        description: enteredDescription,
      },
    },
    onSuccess: (response) => router.push('/dashboard'),
  })

  const onSubmit = (e) => {
    e.preventDefault()

    new Snackbar('... لطفا منتظر بمانید', {
      position: 'bottom-right',
    })

    doRequest()
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - ۳ درخواست تعمیر</title>
      </Head>
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
              {enteredGender === 'زن'
                ? ' خانم ' + enteredName
                : ' آقای ' + enteredName}
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
    </Fragment>
  )
}

export default RequestService3
