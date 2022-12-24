import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import BuildClient from '../../../api/build-client'
import RemoveUndefinedsToPleaseNext from '../../../hooks/removeUndefineds'

import Navbar from '../../../components/layout/navbar/navbar'
import CardComponent from '../../../components/layout/card'
import FooterNotMain from '../../../components/layout/footernotmain'

import Snackbar from 'awesome-snackbar'

const RequestService1 = ({ data }) => {
  const router = useRouter()

  console.log(data)

  const [enteredName, setEnteredName] = useState()
  const [enteredGender, setEnteredGender] = useState()
  const [enteredDevice, setEnteredDevice] = useState('')
  const [enteredDescription, setEnteredDescription] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredServiceKind, setEnteredServiceKind] = useState('')
  const [isExpress, setIsExpress] = useState(false)

  var postalCode = 'تخصیص داده نشده'
  var address = 'تخصیص داده نشده'

  if (data.locations.length > 0) {
    if (data.locations[0].address) {
      address = data.locations[0].address
    }
    if (data.locations[0].postalCode) {
      postalCode = data.locations[0].postalCode
    }
  }

  if (data) {
    if (data.id) {
      useEffect(() => {
        setEnteredName(data.fiName + ' ' + data.laName)
        setEnteredGender(data.gender)
        setEnteredMobile(data.mobile)
      }, [data.id])
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    var error = ''

    if (enteredName.length < 2) {
      new Snackbar('خطا! نام باید حداقل ۲ کاراکتر باشد', {
        position: 'bottom-right',
      })

      error = error + 'fiName'
    }
    if (enteredMobile.length !== 11) {
      new Snackbar('خطا! موبایل باید ۱۱ رقم باشد', {
        position: 'bottom-right',
      })
      error = error + 'mobile'
    }
    if (enteredDevice.length < 2) {
      new Snackbar('خطا! نام دستگاه باید حداقل ۲ کاراکتر باشد', {
        position: 'bottom-right',
      })
      error = error + 'enteredDevice'
    }
    if (enteredServiceKind.length < 1) {
      new Snackbar('خطا! لطفا نوع تعمیر را انتخاب کنید', {
        position: 'bottom-right',
      })
      error = error + 'enteredServiceKind'
    }

    if (error.length === 0) {
      router.replace(
        {
          pathname: '/sefaresh/new/2',
          query: {
            enteredName,
            enteredGender,
            enteredDevice,
            enteredDescription,
            enteredMobile,
            enteredServiceKind,
            isExpress,
            address,
            postalCode,
          },
        },
        '/sefaresh/new/2'
      )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
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
            <li data-content="2" className="step text-neutral-content">
              آدرس
            </li>
            <li
              data-content="1"
              className="step step-primary text-neutral-content"
            >
              اطلاعات پایه
            </li>
          </ul>

          <div className="form-control">
            <div className="form-control ">
              <label className="input-group mt-6">
                <input
                  type="text"
                  value={enteredName}
                  onChange={(e) => setEnteredName(e.target.value)}
                  placeholder="شهاب آواژ"
                  className="input input-bordered  text-center w-full "
                />
                <span className=" text-center">نام</span>
              </label>

              <label className="input-group mt-3">
                <input
                  type="number"
                  value={enteredMobile}
                  onChange={(e) => setEnteredMobile(e.target.value)}
                  placeholder="۰۹۱۲۴۵۰۳۲۳۲"
                  className="input input-bordered  text-center w-full"
                />
                <span className="text-center">شماره موبایل</span>
              </label>

              <label className="input-group mt-3">
                <input
                  type="text"
                  value={enteredDevice}
                  onChange={(e) => setEnteredDevice(e.target.value)}
                  placeholder="دستگاه آبمیوه‌ گیری"
                  className="input input-bordered  text-center w-full"
                />
                <span className=" text-center">نام وسیله</span>
              </label>

              <textarea
                className="textarea textarea-bordered  mt-4 justify-center w-full"
                value={enteredDescription}
                onChange={(e) => setEnteredDescription(e.target.value)}
                placeholder="توضیحات: تیغه نیاز به عیب‌یابی و تعویض دارد."
                dir="rtl"
              />

              <select
                className="select select-bordered w-full max-w-xs mt-3 mb-3"
                onChange={(e) => setEnteredServiceKind(e.target.value)}
              >
                <option
                  disabled
                  selected
                  className="text-center content-center"
                >
                  نوع تعمیر
                </option>
                <option className="text-center content-center">تعمیر</option>
                <option className="text-center content-center">تعویض</option>
                <option className="text-center content-center">
                  عیب‌‌یابی
                </option>
              </select>

              <label className="label cursor-pointer w-full">
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  onClick={(e) => setIsExpress(!isExpress)}
                />
                <div>
                  <div className="dropdown dropdown-left">
                    <label
                      tabIndex={0}
                      className="btn btn-circle btn-ghost btn-xs text-info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </label>
                    <div
                      tabIndex={0}
                      className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
                    >
                      <div className="card-body" dir="rtl">
                        <p>شامل ۱۰ درصد هزینه بالاتر است.</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-neutral-content"> خدمت پرسرعت</span>
                </div>
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary  ">
              مرحله بعد
            </button>
          </div>
        </form>
      </CardComponent>
      <FooterNotMain />
    </div>
  )
}

export async function getServerSideProps(context) {
  //const accountId = context.params
  var id = context.query.accountId

  const client = BuildClient(context)
  const { data } = await client.get(
    '/api/v1/users/service/' + context.query.accountId
  )
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default RequestService1
