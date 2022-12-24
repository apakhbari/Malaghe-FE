import { useRouter } from 'next/router'

import Lottie from 'react-lottie-player'

import lottieJson from '../assets/animation/animation-404.json'

const NotFound = () => {
  const router = useRouter()

  return (
    <div className="w-full">
      <div>
        <input
          type="checkbox"
          id="my-modal-6"
          className="modal-toggle"
          checked="checked"
          onChange={() => {}}
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <p className="label text-4xl justify-center place-content-center items-center mb-12">
              !صفحه پیدا نشد
            </p>

            <div className="flex mx-auto items-center h-96 w-96">
              <Lottie loop animationData={lottieJson} play />
            </div>

            <p className="label text-lg justify-center place-content-center items-center">
              خطای ۴۰۴
            </p>

            <div className="modal-action">
              <label
                htmlFor="my-modal-6"
                className="btn"
                onClick={() => router.replace('/')}
              >
                صفحه اصلی
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
