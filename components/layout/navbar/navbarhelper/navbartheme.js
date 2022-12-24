import IconTheme from '../../../../assets/icons/svg/icontheme'

function NavBarTheme(props) {
  return (
    <div className="dropdown">
      <div className="btn btn-ghost text-primary-content" tabIndex={0}>
        <IconTheme
          stylingProps1={props.stylingProps1}
          stylingProps2={props.stylingProps2}
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
      >
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
      </ul>
    </div>
  )
}

export default NavBarTheme
