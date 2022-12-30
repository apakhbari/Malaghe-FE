import { useRouter } from 'next/router'

import Lottie from 'react-lottie-player'

import lottieJson from '../../assets/animation/animation-under-construction.json'

const MobileDeveloping = () => {
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
            <p className="label text-3xl justify-center place-content-center items-center mb-2 font-bold">
              ... نسخه موبایل درحال توسعه است
            </p>
            <p className="label text-xl justify-center place-content-center items-center mb-12">
              لطفاً با کامپیوتر امتحان کنید
            </p>

            <div className="flex mx-auto items-center h-96 w-96">
              <Lottie loop animationData={lottieJson} play />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileDeveloping
