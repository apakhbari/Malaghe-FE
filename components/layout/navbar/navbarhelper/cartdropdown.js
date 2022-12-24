import { useEffect, useContext, Fragment } from 'react'

import { useRouter } from 'next/router'

import IconCart from '../../../../assets/icons/svg/iconcart'
import CartsContext from '../../../../store/cart-context'

function CartDropDown(props) {
  const cartsCtx = useContext(CartsContext)

  const router = useRouter()

  const onContinueClick = (e) => {
    e.preventDefault()

    router.push('/dashboard/cart')
  }

  return (
    <Fragment>
      {cartsCtx.totalCarts === 0 && (
        <div className="dropdown">
          <div className="rounded-full p-2 hover:cursor-pointer" tabIndex={0}>
            <div className="avatar placeholder cursor-pointer">
              <div className={props.stylingProps}>
                <IconCart stylingProps={'w-6 h-6'} />
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-secondary text-primary-content"
          >
            <div className="card-body">
              {cartsCtx.totalCarts === 0 && (
                <h3 className="card-title text-secondary-content" dir="rtl">
                  سبد خرید شما خالیست!
                </h3>
              )}
            </div>
          </div>
        </div>
      )}

      {cartsCtx.totalCarts > 0 && (
        <div className="dropdown">
          <div className="rounded-full p-2 hover:cursor-pointer" tabIndex={0}>
            <div className="indicator">
              <span className="indicator-item indicator-bottom badge badge-secondary"></span>
              <div class="avatar placeholder cursor-pointer">
                <div class={props.stylingProps}>
                  <IconCart stylingProps={'w-6 h-6'} />
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-secondary text-primary-content"
          >
            <div
              className="card-body text-secondary-content text-center"
              dir="rtl"
            >
              <h3>{cartsCtx.totalCarts} مورد در سبد خرید</h3>

              <div className="divider"></div>

              <div
                className="flex justify-around btn btn-primary btn-outline mt-2"
                onClick={onContinueClick}
              >
                ادامه خرید
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default CartDropDown
