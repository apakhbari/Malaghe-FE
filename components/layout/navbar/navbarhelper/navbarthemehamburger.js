import { Fragment } from 'react'

function NavBarThemeHamburger() {
  return (
    <Fragment>
      <li>
        <div className="btn btn-ghost" data-set-theme="wireframe">
          پیش فرض
        </div>
      </li>
      <li>
        <div
          className="btn btn-ghost"
          data-set-theme="darktheme"
          data-act-class="ACTIVECLASS"
        >
          اقیانوس
        </div>
      </li>
      <li>
        <div
          className="btn btn-ghost"
          data-set-theme="black"
          data-act-class="ACTIVECLASS"
        >
          نیمه‌شب
        </div>
      </li>
      <li>
        <div
          className="btn btn-ghost"
          data-set-theme="lemonade"
          data-act-class="ACTIVECLASS"
        >
          لیموناد
        </div>
      </li>
      <li>
        <div
          className="btn btn-ghost"
          data-set-theme="coffee"
          data-act-class="ACTIVECLASS"
        >
          قهوه
        </div>
      </li>
      <li>
        <div
          className="btn btn-ghost"
          data-set-theme="pastel"
          data-act-class="ACTIVECLASS"
        >
          پاستل
        </div>
      </li>
      <li>
        <div
          className="btn btn-ghost"
          data-set-theme="retro"
          data-act-class="ACTIVECLASS"
        >
          دهه ۵۰
        </div>
      </li>
    </Fragment>
  )
}

export default NavBarThemeHamburger
