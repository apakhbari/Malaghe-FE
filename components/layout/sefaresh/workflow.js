import { useRouter } from 'next/router'

function Workflow() {
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
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 text-secondary-content"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-neutral-content">
        ثبت درخواست تعمیر
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-primary/70">
        در تاریخ ۱۰ شهریور ۱۴۰۱
      </time>
      <p className="text-base font-normal text-neutral-content/80 mb-2 mt-2 ml-2">
        درخواست شما برای تعمیر دستگاه ثبت شد.{' '}
      </p>
    </li>
  )
}

export default Workflow
