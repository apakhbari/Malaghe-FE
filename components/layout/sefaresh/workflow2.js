import { useRouter } from 'next/router'

function Workflow2() {
  const router = useRouter()

  const onPayClick = (e) => {
    e.preventDefault()

    router.push(
      {
        pathname: '/sefaresh/pardakht',
        query: { id: 123 },
      },
      '/sefaresh/pardakht'
    )
  }

  return (
    <li className=" mb-5">
      <span className="flex absolute -left-2 justify-center items-center w-6 h-6 bg-secondary rounded-full ring-8 ring-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3 text-secondary-content"
        >
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-neutral-content">
        تشخیص خرابی
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-primary/70">
        در تاریخ ۱۱ شهریور ۱۴۰۱
      </time>
      <span className="text-neutral-content text-sm font-medium py-0.5">
        م. صنعت‌گر -
      </span>
      <span className="bg-accent text-accent-content text-sm font-medium px-2.5 py-0.5 rounded mr-1">
        کارشناس
      </span>
      <p className="text-base font-normal text-neutral-content/80 mb-2 mt-2 ml-2">
        طی بررسی‌ها مشخص شد که خرابی از این نقطه است. تصویر قطعه ضمیمه شده است.
      </p>
      <p className="text-base font-normal text-neutral-content/80 mb-2 mt-2 ml-2">
        برای ادامه، لطفا هزینه خدمت را پرداخت کنید.
      </p>

      <div className="flex flex-col">
        <div
          className="inline-flex items-center btn btn-secondary mt-3 justify-evenly w-60"
          onClick={onPayClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>
          پرداخت
        </div>

        <div className="inline-flex items-center btn btn-accent mt-3 justify-evenly w-60">
          <svg
            className="w-4 h-4 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          دریافت عکس قطعه خراب
        </div>
      </div>
    </li>
  )
}

export default Workflow2
