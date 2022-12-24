import Link from 'next/link'
import { useRouter } from 'next/router'

import Image from 'next/image'

import Navbar from '../components/layout/navbar/navbar'
import Footer from '../components/layout/home/footer'

import {
  PhoneIcon,
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
} from '@heroicons/react/outline'
import {
  ChipIcon,
  SupportIcon,
  wrenchScrewdriverIcon,
} from '@heroicons/react/solid'

//import Swiper from '../components/layout/home/swiper'

import supportImg from '../assets/support.jpg'
import Banner from '../components/layout/home/banner'

function Home() {
  const router = useRouter()

  const onPrivacyClick = (e) => {
    e.preventDefault()
    router.push('/privacy')
  }

  const onAboutUsClick = (e) => {
    e.preventDefault()
    router.push('/aboutus')
  }

  const onWorkFlowClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh/gardeshkar')
  }

  return (
    <div className="relative  pt-12">
      {/*<Banner />*/}
      <Navbar url="/" />

      {/*<div className="pt-12 h-96"><Swiper /></div>*/}

      <div
        name="home"
        className="relative w-full h-screen flex flex-col items-center justify-center"
      >
        <div class="absolute top-28 left-72 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl -z-10  opacity-60 animate-blob"></div>
        <div class="absolute top-36 right-64 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl -z-10  opacity-60 animate-blob animation-delay-4000"></div>
        <div class="absolute left-72  w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl -z-10 opacity-60 animate-blob animation-delay-2000"></div>
        <div className="grid grid-cols-5 gap-5 mx-4">
          <div
            className="flex justify-around items-center rounded-box bg-accent-content/30 transition ease-in-out hover:scale-105 hover:cursor-pointer shadow"
            onClick={onAboutUsClick}
          >
            <p dir="rtl" className="text-3xl font-extrabold text-center ">
              درباره ما
            </p>
          </div>
          <div
            className="rounded-box bg-secondary/80 items-center text-center mx-auto p-12 transition ease-in-out hover:scale-105 hover:cursor-pointer shadow"
            onClick={onPrivacyClick}
          >
            <p dir="rtl" className="text-3xl font-extrabold text-center ">
              درباره حریم خصوصی کاربران
            </p>
          </div>

          <div className="col-span-3 row-span-2 rounded-box bg-accent/80 flex flex-col items-center text-center w-full p-16 hover:cursor-default shadow-2xl">
            <h3 className=" flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-secondary-focus motion-safe:animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-secondary-focus animate-bounce animation-delay-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-secondary-focus motion-safe:animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </h3>
            <p className="text-3xl font-extrabold">راهکارهای صنعتی آشپزخانه</p>
            <h1 className="mt-3 text-7xl font-extrabold">سوار بر تکنولوژی</h1>
          </div>

          <div
            className="flex justify-around items-center rounded-box col-span-2 bg-primary-focus/80 text-start p-12 transition ease-in-out hover:scale-105 hover:cursor-pointer shadow-md"
            onClick={onWorkFlowClick}
          >
            <p
              dir="rtl"
              className="text-3xl font-extrabold text-primary-content"
            >
              مشاهده گردش‌کار
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 fill-primary-content"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div name="support" className="w-full mb-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <Image
            className="w-full h-full object-cover mix-blend-overlay"
            src={supportImg}
            alt="/"
          />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
              پشتیبانی
            </h2>
            <h3 className="text-5xl font-bold py-6 text-center">
              پیدا کردن تیم مناسب
            </h3>
            <p className="py-4 text-3xl text-slate-300" dir="rtl">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-base-200 rounded-xl shadow-2xl">
              <div className="p-8" dir="rtl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 p-4 bg-secondary text-secondary-content rounded-lg mt-[-4rem] mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3
                  className="font-bold text-2xl my-6 text-center text-base-content"
                  dir="rtl"
                >
                  پاسخگویی ۲۴\۷
                </h3>
                <p className="text-base-content text-xl text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
              <div className="bg-base-300 pl-8 py-4">
                <p
                  className="flex items-center text-secondary-focus mr-10 hover:underline hover:cursor-pointer"
                  dir="rtl"
                >
                  ارتباط با ما <ArrowSmLeftIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-base-200 rounded-xl shadow-2xl">
              <div className="p-8" dir="rtl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 p-4 bg-secondary text-secondary-content rounded-lg mt-[-4rem] mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                    clipRule="evenodd"
                  />
                  <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                  <path
                    fillRule="evenodd"
                    d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3 className="font-bold text-2xl my-6 text-center text-base-content">
                  خدمات تخصصی
                </h3>
                <p className="text-base-content text-xl text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
              <div className="bg-base-300 pl-8] py-4">
                <p
                  className="flex items-center text-secondary-focus mr-10 hover:underline hover:cursor-pointer"
                  dir="rtl"
                >
                  درخواست خدمت
                  <ArrowSmLeftIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-base-200 rounded-xl shadow-2xl">
              <div className="p-8" dir="rtl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 p-4 bg-secondary text-secondary-content rounded-lg mt-[-4rem] mx-auto"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>

                <h3 className="font-bold text-2xl my-6 text-center text-base-content">
                  بیش از ۴۰ سال سابقه
                </h3>
                <p className="text-base-content text-xl text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
              <div className="bg-base-300 pl-8 py-4">
                <p
                  className="flex items-center text-secondary-focus mr-10 hover:underline hover:cursor-pointer"
                  dir="rtl"
                >
                  ارتباط با ما <ArrowSmLeftIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
