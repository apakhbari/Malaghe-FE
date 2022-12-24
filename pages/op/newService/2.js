import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import RemoveUndefinedsToPleaseNext from '../../../hooks/removeUndefineds'

import Navbar from '../../../components/layout/navbar/navbar'
import IconGeoLocation from '../../../assets/icons/svg/icongeolocation'
import CardComponent from '../../../components/layout/card'
import FooterNotMain from '../../../components/layout/footernotmain'

import Snackbar from 'awesome-snackbar'

const RequestService2 = () => {
  const router = useRouter()

  //for this page
  const [postalCodeNum, setPostalCodeNum] = useState()
  const [addressStr, setAddressStr] = useState()

  //for last page
  const [enteredName, setEnteredName] = useState()
  const [enteredGender, setEnteredGender] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredServiceKind, setEnteredServiceKind] = useState()
  const [isExpress, setIsExpress] = useState()
  const [enteredPrice, setEnteredPrice] = useState('')
  const [enteredPhone, setEnteredPhone] = useState('')

  useEffect(() => {
    if (router.isReady) {
      // Code using query
      var passedData = router.query
      console.log(passedData)

      setEnteredName(passedData.enteredName)
      setEnteredGender(passedData.enteredGender)
      setEnteredDevice(passedData.enteredDevice)
      setEnteredDescription(passedData.enteredDescription)
      setEnteredMobile(passedData.enteredMobile)
      setEnteredServiceKind(passedData.enteredServiceKind)
      setIsExpress(passedData.isExpress)
      setEnteredPrice(passedData.enteredPrice)
      setEnteredPhone(passedData.enteredPhone)
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

    if (error.length === 0) {
      router.replace(
        {
          pathname: '/op/newService/3',
          query: {
            enteredName,
            enteredDevice,
            enteredDescription,
            enteredMobile,
            enteredServiceKind,
            isExpress,
            postalCodeNum,
            addressStr,
            enteredPrice,
            enteredPhone,
          },
        },
        '/op/newService/3'
      )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
      <Navbar />
      <CardComponent>
        <form onSubmit={onSubmit} className="card-body">
          <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
            ثبت درخواست تعمیر
          </h3>
          <ul className="steps">
            <li data-content="3" className="step text-neutral-content">
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

          <div className=" mt-6">
            <label className="input-group w-full">
              <input
                type="text"
                value={addressStr === 'تخصیص داده نشده' ? '' : addressStr}
                onChange={(e) => setAddressStr(e.target.value)}
                placeholder={'تهران - بازار'}
                className="input input-bordered  text-center w-full "
              />
              <span className="text-center">آدرس</span>
            </label>
          </div>

          <div className="form-control">
            <label className="input-group">
              <input
                type="number"
                onChange={(e) => setPostalCodeNum(e.target.value)}
                value={postalCodeNum === 'تخصیص داده نشده' ? '' : postalCodeNum}
                placeholder={1668701212}
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
      <FooterNotMain />
    </div>
  )
}

export default RequestService2
