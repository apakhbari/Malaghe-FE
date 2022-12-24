import Image from 'next/image'
import { useRouter } from 'next/router'

import Atropos from 'atropos/react'

import hamzan from '../../../assets/images/store/hamzan.jpg'

import GroupDigital from '../../../hooks/groupDigital'

var slugify = require('slugify-persian')

function StoreAtropos(props) {
  const router = useRouter()

  const handleClick = (e) => {
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
    <Atropos rotateXMax={5} rotateYMax={5}>
      <div class="group rounded-md flex items-center justify-center">
        <div
          class="card w-96 bg-neutral hover:opacity-90 hover:shadow-2xl cursor-pointer group-hover:bg-neutral-focus"
          onClick={handleClick}
          data-atropos-offset="-5"
        >
          <figure>
            <Image
              className="aspect-square group-hover:opacity-80"
              src={hamzan}
              alt="tighe"
              ata-atropos-offset="0"
            />
          </figure>
          <div
            class="card-body"
            data-atropos-offset="6"
            activeOffset="40"
            shadowScale="1.05"
            highlight="true"
            shadow="true"
          >
            <h2
              class="card-title text-neutral-content"
              dir="rtl"
              data-atropos-offset="6"
            >
              <span>{props.title}</span>
              {props.hasDiscount && (
                <div
                  className="badge badge-secondary"
                  dir="rtl"
                  data-atropos-offset="6"
                >
                  {props.discountKind === 'درصد'
                    ? `${props.discountedPrice}٪ تخفیف`
                    : '+ تخفیف'}
                </div>
              )}
            </h2>
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
                    )}  تومن`
                  : `${GroupDigital(props.discountedPrice)}  تومن`}
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

            <p dir="rtl" data-atropos-offset="6">
              <div className="text-neutral-content" dir="rtl">
                {props.summary}
              </div>
            </p>
            <div class="card-actions justify-start" data-atropos-offset="6">
              {props.hasMag && (
                <div class="badge badge-success" dir="rtl">
                  + مجله
                </div>
              )}

              {props.madeIn && (
                <div class="badge badge-outline">تولید {props.madeIn}</div>
              )}

              {props.goodKind && (
                <div class="badge badge-outline badge-primary">
                  {props.goodKind}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Atropos>
  )
}

export default StoreAtropos
