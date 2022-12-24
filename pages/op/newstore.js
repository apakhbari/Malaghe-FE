import { useState, Fragment } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../components/layout/navbar/navbar'

import useRequest from '../../hooks/use-request'
import CardComponent from '../../components/layout/card'

import axios from 'axios'

var slugify = require('slugify-persian')

const NewStore = () => {
  const router = useRouter()

  const [strTitle, setStrTitle] = useState('عنوان')
  const [strDescription, setStrDescription] = useState()
  const [strSummary, setStrSummary] = useState()
  const [strVolumesHeight, setStrVolumesHeight] = useState()
  const [strVolumesWidth, setStrVolumesWidth] = useState()
  const [strVolumesLength, setStrVolumesLength] = useState()
  const [strVolumesWeight, setStrVolumesWeight] = useState()
  const [numPrice, setNumPrice] = useState()
  const [numAvailableQuantity, setNumAvailableQuantity] = useState()
  const [boolHasDiscount, setBoolHasDiscount] = useState(false)
  const [boolHasMag, setBoolHasMag] = useState(false)
  const [strMagLink, setStrMagLink] = useState()
  const [enumDiscountKind, setEnumDiscountKind] = useState()
  const [numDiscountedPrice, setNumDiscountedPrice] = useState()

  const [strMadeIn, setStrMadeIn] = useState()
  const [enumGoodKind, setEnumGoodKind] = useState()

  const { doRequest, errors } = useRequest({
    url: 'http://localhost:80/api/v1/store',

    method: 'post',
    body: {
      title: strTitle,
      slug: slugify(strTitle),
      description: strDescription,
      summary: strSummary,
      price: numPrice,
      volumes: {
        width: strVolumesWidth,
        length: strVolumesLength,
        height: strVolumesHeight,
        weight: strVolumesWeight,
      },
      availableQuantity: numAvailableQuantity,
      hasDiscount: boolHasDiscount,
      discountKind: enumDiscountKind,
      discountedPrice: numDiscountedPrice,
      madeIn: strMadeIn,
      goodKind: enumGoodKind,
      hasMag: boolHasMag,
      magLink: strMagLink,
    },
    onSuccess: () => router.push('/store'),
  })

  const onSubmit = async (event) => {
    event.preventDefault()

    //console.log(slugify(strTitle))

    await axios.post('/api/v1/store', {
      title: strTitle,
    })

    //doRequest()
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <CardComponent>
        <h3 dir="rtl" className="text-xl  mt-2 text-neutral-content">
          ساخت آیتم جدید در فروشگاه
        </h3>

        <form onSubmit={onSubmit} className="card-body">
          <div className="form-control">
            <div className="form-control mx-auto  items-center justify-center content-center mb-2 w-full">
              <label className="input-group w-full">
                <input
                  type="text"
                  onChange={(e) => setStrTitle(e.target.value)}
                  placeholder="عنوان"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">عنوان</span>
              </label>
            </div>

            <div className="form-control mx-auto  items-center justify-center content-center mb-2 w-full">
              <label className="input-group">
                <input
                  type="text"
                  value={strDescription}
                  onChange={(e) => setStrDescription(e.target.value)}
                  placeholder="توضیح"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">توضیح</span>
              </label>
            </div>

            <div className=" mx-auto  items-center justify-center content-center mb-2 w-full">
              <label className="input-group">
                <input
                  type="text"
                  value={strSummary}
                  onChange={(e) => setStrSummary(e.target.value)}
                  placeholder="خلاصه"
                  className="input input-bordered  text-center w-full"
                />
                <span className="text-center">خلاصه</span>
              </label>
            </div>

            <div className="mx-auto  items-center justify-center content-center mb-2 w-full">
              <label className="input-group">
                <input
                  type="number"
                  dir="rtl"
                  value={numPrice}
                  onChange={(e) => setNumPrice(e.target.value)}
                  placeholder="35,000"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">قیمت اولیه (ت)</span>
              </label>
            </div>

            <div className="form-control mx-auto  items-center justify-center content-center mb-2">
              <label className="input-group">
                <input
                  type="text"
                  value={strMadeIn}
                  onChange={(e) => setStrMadeIn(e.target.value)}
                  placeholder="ایران"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">ساخت کشور</span>
              </label>
            </div>

            <div className="form-control mx-auto  items-center justify-center content-center mb-2">
              <label className="input-group">
                <input
                  type="number"
                  value={numAvailableQuantity}
                  onChange={(e) => setNumAvailableQuantity(e.target.value)}
                  placeholder="10"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">تعداد موجودی</span>
              </label>
            </div>

            <select
              className="select select-bordered mx-auto max-w-xs mb-2 w-full"
              dir="rtl"
              onChange={(e) => setEnumGoodKind(e.target.value)}
            >
              <option disabled selected className="text-center content-center">
                نوع
              </option>
              <option className="text-center content-center" dir="rtl">
                دستگاه
              </option>
              <option className="text-center content-center" dir="rtl">
                قطعه
              </option>
            </select>

            <div className="form-control">
              <label className="label cursor-pointer justify-evenly mb-2 w-full">
                <input
                  type="checkbox"
                  className="toggle"
                  value={boolHasMag}
                  onChange={(e) => setBoolHasMag(e.target.checked)}
                />
                <span className="label-text">در مجله محتوایی دارد؟</span>
              </label>
            </div>

            {boolHasMag && (
              <div className="form-control mx-auto  items-center justify-center content-center mb-2 w-full">
                <label className="input-group">
                  <input
                    type="text"
                    value={strMagLink}
                    onChange={(e) => setStrMagLink(e.target.value)}
                    placeholder="/mag/1231123"
                    className="input input-bordered  text-center w-full"
                  />
                  <span className="  text-center">لینک</span>
                </label>
              </div>
            )}

            <div className="divider">اندازه ها</div>

            <div className="form-control mx-auto  items-center justify-center content-center mb-2">
              <label className="input-group">
                <input
                  type="number"
                  dir="rtl"
                  value={strVolumesLength}
                  onChange={(e) => setStrVolumesLength(e.target.value)}
                  placeholder="12"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">طول (cm)</span>
              </label>
            </div>

            <div className="form-control mx-auto  items-center justify-center content-center mb-2">
              <label className="input-group">
                <input
                  type="number"
                  dir="rtl"
                  value={strVolumesWidth}
                  onChange={(e) => setStrVolumesWidth(e.target.value)}
                  placeholder="20"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">عرض (cm)</span>
              </label>
            </div>

            <div className="form-control mx-auto  items-center justify-center content-center mb-2">
              <label className="input-group">
                <input
                  type="number"
                  dir="rtl"
                  value={strVolumesHeight}
                  onChange={(e) => setStrVolumesHeight(e.target.value)}
                  placeholder="35"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">ارتفاع (cm)</span>
              </label>
            </div>

            <div className="form-control mx-auto  items-center justify-center content-center mb-2 w-full">
              <label className="input-group">
                <input
                  type="number"
                  dir="rtl"
                  value={strVolumesWeight}
                  onChange={(e) => setStrVolumesWeight(e.target.value)}
                  placeholder="100"
                  className="input input-bordered  text-center w-full"
                />
                <span className="  text-center">وزن (g)</span>
              </label>
            </div>

            <div className="divider">تخفیف</div>

            <div className="form-control w-full">
              <label className="label cursor-pointer justify-evenly mb-2 w-full">
                <input
                  type="checkbox"
                  className="toggle"
                  value={boolHasDiscount}
                  onChange={(e) => setBoolHasDiscount(e.target.checked)}
                />
                <span className="label-text">تخفیف دارد؟</span>
              </label>
            </div>

            {boolHasDiscount && (
              <Fragment>
                <select
                  className="select select-bordered mx-auto max-w-xs mb-2 w-full"
                  dir="rtl"
                  onChange={(e) => setEnumDiscountKind(e.target.value)}
                >
                  <option
                    disabled
                    selected
                    className="text-center content-center"
                  >
                    نوع تخفیف
                  </option>
                  <option className="text-center content-center" dir="rtl">
                    درصد
                  </option>
                  <option className="text-center content-center" dir="rtl">
                    قیمت نهایی
                  </option>
                </select>

                <div className="form-control mx-auto  items-center justify-center content-center mb-2">
                  <label className="input-group">
                    <input
                      type="number"
                      value={numDiscountedPrice}
                      onChange={(e) => setNumDiscountedPrice(e.target.value)}
                      placeholder={
                        enumDiscountKind === 'درصد'
                          ? '10 :درصد تخفیف'
                          : '135000 :قیمت نهایی'
                      }
                      className="input input-bordered  text-center w-full"
                    />
                    <span className="text-center">مقدار تخفیف</span>
                  </label>
                </div>
              </Fragment>
            )}

            <button type="submit" className="btn btn-primary  mt-6 ">
              ثبت
            </button>
          </div>
        </form>
      </CardComponent>
    </div>
  )
}

export default NewStore
