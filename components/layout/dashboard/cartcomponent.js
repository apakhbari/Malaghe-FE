import Image from 'next/image'
import { useState, useEffect, useContext, Fragment } from 'react'

import { useRouter } from 'next/router'

import CartsContext from '../../../store/cart-context'

import hamzan from '../../../assets/images/store/hamzan.jpg'
import GroupDigital from '../../../hooks/groupDigital'

var slugify = require('slugify-persian')

function CartComponent(props) {
  const router = useRouter()

  const [domLoaded, setDomLoaded] = useState(false)

  const cartsCtx = useContext(CartsContext)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const onCancelClick = (e) => {
    e.preventDefault()

    cartsCtx.removeCart(props.id)
  }

  const onClickCard = (e) => {
    e.preventDefault()

    var slug = slugify(props.title)

    router.push(
      {
        pathname: `/store/${slug}`,
        query: { id: props.id },
      },
      `/store/${slug}`
    )
  }

  return (
    <Fragment>
      {domLoaded && (
        <div className="card w-96 h-60 bg-base-100 shadow-xl image-full transition ease-in-out hover:scale-105 hover:opacity-90">
          <figure>
            <Image
              className="aspect-square group-hover:opacity-80"
              src={hamzan}
              alt="hamzan"
              ata-atropos-offset="0"
            />
          </figure>
          <div className="card-body" dir="rtl">
            <div className="card-actions justify-end">
              <button className="btn btn-square btn-sm" onClick={onClickCard}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="h-6 w-6 stroke-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>

              <button className="btn btn-square btn-sm" onClick={onCancelClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h2 className="card-title">{props.title}</h2>
            {props.hasDiscount && (
              <h2
                className="card-title text-neutral-content"
                data-atropos-offset="6"
                dir="rtl"
              >
                {props.discountKind === 'درصد'
                  ? `${GroupDigital(
                      Math.round(
                        ((100 - props.discountedPrice) * props.price) / 100
                      )
                    )} تومن`
                  : `${GroupDigital(props.discountedPrice)} تومن`}
                <span className="line-through text-xs">
                  {GroupDigital(props.price)}
                </span>
              </h2>
            )}

            {!props.hasDiscount && (
              <h2
                className="card-title text-neutral-content"
                data-atropos-offset="6"
                dir="rtl"
              >
                {GroupDigital(props.price)}
              </h2>
            )}
            <div className="badge badge-primary">1</div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default CartComponent
