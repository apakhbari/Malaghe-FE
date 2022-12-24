import IconHashtag from '../../assets/icons/svg/iconhashtag'

import {
  CLIENT_NAME_FA,
  CLIENT_VERSION,
  CLIENT_COPYRIGHT,
} from '../../envConfig'

function FooterNotMain() {
  return (
    <div>
      <footer class="footer absolute inset-x-0 bottom-0 items-center p-4 bg-neutral text-neutral-content">
        <div class="grid-flow-col gap-4 place-content-end justify-self-end items-center">
          <div>
            <p dir="rtl">
              نسخه: {CLIENT_VERSION} - {CLIENT_COPYRIGHT}
            </p>
            <p dir="rtl">تمامی حقوق برای {CLIENT_NAME_FA} محفوظ است.</p>
          </div>
          <IconHashtag />
        </div>
      </footer>
    </div>
  )
}

export default FooterNotMain
