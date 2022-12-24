import { useRef } from 'react'
import CardComponent from '../components/layout/card'
import FooterNotMain from '../components/layout/footernotmain'

import Navbar from '../components/layout/navbar/navbar'

import Snackbar from 'awesome-snackbar'

function ContactUs() {
  const nameRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    //new Snackbar('... لطفا منتظر بمانید', {
    //position: 'bottom-right',
    //})

    //Submit
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <CardComponent>
        <form onSubmit={onSubmit} className="card-body">
          <div className="form-control">
            <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
              تماس با ما
            </h3>

            <label className="input-group mx-auto justify-center">
              <input
                type="text"
                ref={nameRef}
                placeholder="احسان عبدالهی"
                className="input input-bordered  text-center w-full"
              />
              <span className=" text-center">نام</span>
            </label>

            <label className="input-group mx-auto mt-3 justify-center">
              <input
                type="password"
                ref={phoneRef}
                placeholder="۰۹۱۲۱۰۲۳۴۵۶"
                className="input input-bordered text-center"
              />
              <span className=" text-center">تلفن تماس</span>
            </label>

            <textarea
              className="textarea textarea-bordered mx-auto mt-4 justify-center w-full"
              ref={messageRef}
              placeholder="پیام:"
              dir="rtl"
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary hover:border-slate-400 mt-6 btn-disabled"
            >
              ثبت
            </button>
          </div>
        </form>
      </CardComponent>
      <FooterNotMain />
    </div>
  )
}

export default ContactUs
