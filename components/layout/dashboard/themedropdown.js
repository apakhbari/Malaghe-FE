import IconDashboardTheme from '../../../assets/icons/svg/icondashboardtheme'

function ThemeDropDown() {
  return (
    <div className="dropdown dropdown-left dropdown-end">
      <div className="btn btn-ghost" tabIndex={0}>
        <IconDashboardTheme
          stylingProps1={
            'w-4 h-4 mr-1 place-self-center opacity-80 text-neutral-content'
          }
          stylingProps2={'w-6 h-6 place-self-center text-neutral-content'}
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
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

export default ThemeDropDown
