import Image from 'next/image'
import { useRouter } from 'next/router'

import Atropos from 'atropos/react'

import GroupDigital from '../../../hooks/groupDigital'

var slugify = require('slugify-persian')

import {
  GoodKindDictionary,
  MadeInDictionary,
} from '../../../hooks/dictionaries'

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
      <div className="group rounded-md flex items-center justify-center">
        <div
          className="card w-96 bg-neutral hover:opacity-90 hover:shadow-2xl cursor-pointer group-hover:bg-neutral-focus"
          onClick={handleClick}
          data-atropos-offset="-5"
        >
          <figure>
            <Image
              className="aspect-square group-hover:opacity-80"
              src={`/${slugify(props.title)}.jpg`}
              alt="tighe"
              ata-atropos-offset="0"
              width="360"
              height="360"
            />
          </figure>
          <div
            className="card-body"
            data-atropos-offset="6"
            activeOffset="40"
            shadowScale="1.05"
            highlight="true"
            shadow="true"
          >
            <h2
              className="card-title text-neutral-content"
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
                  {props.discountKind === 1
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
                {props.discountKind === 1
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
                {GroupDigital(props.price)} تومن
              </h2>
            )}

            <p dir="rtl" data-atropos-offset="6">
              <div className="text-neutral-content" dir="rtl">
                {props.summary}
              </div>
            </p>
            <div className="card-actions justify-start" data-atropos-offset="6">
              {props.hasMag && (
                <div className="badge badge-success" dir="rtl">
                  + مجله
                </div>
              )}

              {props.madeIn && (
                <div className="badge badge-outline">
                  تولید {MadeInDictionary[props.madeIn]}
                </div>
              )}

              <div className="badge badge-outline badge-primary">
                {GoodKindDictionary[props.goodKind]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Atropos>
  )
}

export default StoreAtropos
