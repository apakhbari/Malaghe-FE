import { useState, useEffect, Fragment } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import Navbar from '../../../components/layout/navbar/navbar'
import IconGeoLocation from '../../../assets/icons/svg/icongeolocation'
import CardComponent from '../../../components/layout/card'

import { CLIENT_NAME_FA } from '../../../envConfig'

import Snackbar from 'awesome-snackbar'

const RequestService2 = () => {
  const router = useRouter()

  //for this page
  const [postalCodeNum, setPostalCodeNum] = useState()
  const [addressStr, setAddressStr] = useState()

  //for last page
  const [userID, setUserID] = useState()
  const [enteredName, setEnteredName] = useState()
  const [enteredGender, setEnteredGender] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredPhone, setEnteredPhone] = useState()
  const [isExpress, setIsExpress] = useState()

  useEffect(() => {
    if (router.isReady) {
      // Code using query
      var passedData = router.query
      console.log(passedData)
      setPostalCodeNum(passedData.postalCode)
      setAddressStr(passedData.address)

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

  const onPinClick = (e) => {
    e.preventDefault()

    new Snackbar('... در حال توسعه', {
      position: 'bottom-right',
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    var error = ''

    if (addressStr.length < 5 || addressStr === 'تخصیص داده نشده') {
      new Snackbar('خطا! آدرس باید حداقل ۵ کاراکتر باشد', {
        position: 'bottom-right',
      })
      error = error + 'addressStr'
    }
    if (postalCodeNum.length < 5 || postalCodeNum === 'تخصیص داده نشده') {
      new Snackbar('خطا! کد پستی باید حداقل ۵ کاراکتر باشد', {
        position: 'bottom-right',
      })
      error = error + 'postalCodeNum'
    }

    if (error.length === 0) {
      router.replace(
        {
          pathname: '/sefaresh/cart/3',
          query: {
            userID,
            enteredName,
            enteredGender,
            enteredDevice,
            enteredDescription,
            enteredMobile,
            enteredPhone,
            isExpress,
            postalCodeNum,
            addressStr,
          },
        },
        '/sefaresh/cart/3'
      )
    }
  }

  return (
    <Fragment>
      <Head>
        <title>{CLIENT_NAME_FA} - ۲ درخواست خرید</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen mx-auto">
        <Navbar />
        <CardComponent>
          <form onSubmit={onSubmit} className="card-body">
            <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
              ثبت درخواست خرید
            </h3>
            <ul className="steps">
              <li data-content="3" className="step text-neutral-content">
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

            <div className=" mx-auto mt-6 w-full">
              <label className="input-group w-full">
                <input
                  type="text"
                  value={addressStr === 'تخصیص داده نشده' ? '' : addressStr}
                  onChange={(e) => setAddressStr(e.target.value)}
                  placeholder={
                    addressStr === 'تخصیص داده نشده'
                      ? 'تهران، بازار بزرگ'
                      : addressStr
                  }
                  className="input input-bordered  text-center w-full"
                />
                <span className="text-center">آدرس</span>
              </label>
            </div>

            <div className="form-control mx-auto w-full">
              <label className="input-group w-full">
                <input
                  type="number"
                  onChange={(e) => setPostalCodeNum(e.target.value)}
                  value={
                    postalCodeNum === 'تخصیص داده نشده' ? '' : postalCodeNum
                  }
                  placeholder={
                    postalCodeNum === 'تخصیص داده نشده'
                      ? '123456'
                      : postalCodeNum
                  }
                  className="input input-bordered  text-center w-full"
                />
                <span className="text-center">کد پستی</span>
              </label>
            </div>

            <div
              className="inline-flex items-center btn btn-accent mt-3 mx-auto justify-evenly"
              onClick={onPinClick}
            >
              پین کردن آدرس روی نقشه
              <IconGeoLocation stylingProps={'w-6 h-6'} />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                مرحله بعد
              </button>
            </div>
          </form>
        </CardComponent>
      </div>
    </Fragment>
  )
}

export default RequestService2
