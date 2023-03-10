import { useEffect, useState, useContext, Fragment } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import Navbar from '../../../components/layout/navbar/navbar'
import CardComponent from '../../../components/layout/card'
import CartsContext from '../../../store/cart-context'
import GroupDigital from '../../../hooks/groupDigital'

import { CLIENT_NAME_FA } from '../../../envConfig'

import Snackbar from 'awesome-snackbar'

import { PaymentKindDictionaryReverse } from '../../../hooks/dictionaries'

import useRequest from '../../../hooks/use-request'

const RequestService3 = () => {
  const router = useRouter()

  const cartsCtx = useContext(CartsContext)

  var overAllPrice = 0

  var productArray = [{}]

  cartsCtx.carts.map((item) => {
    if (item.hasDiscount) {
      if (item.discountKind === 'درصد') {
        overAllPrice =
          overAllPrice +
          Math.round(((100 - item.discountedPrice) * item.price) / 100) *
            item.quantity
      } else {
        overAllPrice = overAllPrice + item.discountedPrice * item.quantity
      }
    } else {
      overAllPrice = overAllPrice + item.price * item.quantity
    }
  })

  //for 1 page
  const [userID, setUserID] = useState()
  const [enteredName, setEnteredName] = useState()
  const [enteredGender, setEnteredGender] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredPhone, setEnteredPhone] = useState()
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
      setPostalCodeNum(passedData.postalCodeNum)
      setAddressStr(passedData.addressStr)

      setUserID(passedData.userID)
      setEnteredName(passedData.enteredName)
      setEnteredGender(passedData.enteredGender)
      setEnteredDevice(passedData.enteredDevice)
      setEnteredDescription(passedData.enteredDescription)
      setEnteredMobile(passedData.enteredMobile)
      setEnteredPhone(passedData.enteredPhone)
      setIsExpress(passedData.isExpress)
    }
  }, [router.isReady])

  const reqWasSuccess = (data) => {
    new Snackbar('عملیات موفقیت آمیز بود', {
      position: 'bottom-right',
    })
    router.push('/dashboard')
  }

  const { doRequest, errors } = useRequest({
    url: '/api/v1/orders/cart',
    method: 'post',
    body: {
      userId: userID,
      userName: enteredName,
      isMale: enteredGender,
      mobile: enteredMobile,
      phone: enteredPhone,
      postalCode: postalCodeNum,
      address: addressStr,
      description: enteredDescription,

      paymentKind: PaymentKindDictionaryReverse[enteredPaymentKind],
      isExpress: isExpress,

      products: {
        title: enteredDevice,
        description: enteredDescription,
      },
    },
    onSuccess: (response) => reqWasSuccess(response),
  })

  const onSubmit = (e) => {
    e.preventDefault()

    new Snackbar('لطفاً شکیبا باشید', {
      position: 'bottom-right',
    })

    productArray = [{}]

    cartsCtx.carts.map((item, index) => {
      productArray[index] = {}
      productArray[index].title = item.title
      productArray[index].quantity = item.quantity

      if (item.hasDiscount) {
        productArray[index].initialPrice = item.price
        if (item.discountKind === 'درصد') {
          productArray[index].price =
            Math.round(((100 - item.discountedPrice) * item.price) / 100) *
            item.quantity
        } else {
          productArray[index].price = item.discountedPrice * item.quantity
        }
      } else {
        productArray[index].price = item.price
      }
    })

    router.replace({
      pathname: '/developing',
      query: {
        enteredName,
        enteredGender,
        enteredDevice,
        enteredDescription,
        enteredMobile,
        isExpress,
        postalCodeNum,
        addressStr,
        enteredPaymentKind,
      },
    })
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - ۳ درخواست خرید</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen mx-auto">
        <Navbar />
        <CardComponent>
          <form onSubmit={onSubmit} className="card-body">
            <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
              ثبت درخواست خرید
            </h3>
            <ul className="steps">
              <li
                data-content="3"
                className="step step-primary text-neutral-content"
              >
                پرداخت
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
                {enteredGender === true
                  ? ' آقای ' + enteredName
                  : ' خانم ' + enteredName}
              </h3>
              <h3 className=" text-lg">{enteredMobile}</h3>
            </div>

            <div className="divider"></div>

            <h3 className="text-lg" dir="rtl">
              توضیحات: {enteredDescription}
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

            <div className="divider">اطلاعات پرداخت</div>

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
                  <p className=" text-xl">مبلغ :</p>
                  <p className=" text-xl">{GroupDigital(overAllPrice)} تومان</p>
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
                    className="input input-bordered w-full pr-16"
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
      </div>
    </Fragment>
  )
}

export default RequestService3
