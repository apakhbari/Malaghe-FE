import FooterNotMain from '../../components/layout/footernotmain'
import Navbar from '../../components/layout/navbar/navbar'

function List() {
  return (
    <div className="h-screen bg-neutral p-4">
      <Navbar />
      <h3 className=" mt-24 text-neutral-content text-2xl" dir="rtl">
        لیستی از تمامی سفارش‌ها، خدمات و تعمیرات
      </h3>
      <table className="table table-zebra w-full text-center overflow-scroll overscroll-contain mt-3">
        <thead>
          <tr>
            <th>نوع خدمت</th>
            <th>مبلغ (تومن)</th>
            <th>شماره پیگیری</th>
            <th>تاریخ</th>
            <th>ردیف</th>
          </tr>
        </thead>
        <tbody>
          <tr className="group hover:scale-105 hover:shadow-xl hover:drop-shadow-xl cursor-pointer">
            <td className=" group-hover:text-primary-focus">خرید</td>
            <td className=" group-hover:text-primary-focus">۷۰۰,۰۰۰</td>
            <td dir="rtl" className=" group-hover:text-primary-focus">
              ۱۰۰۱
            </td>
            <th className=" group-hover:text-primary-focus">۱۴۰۱/۰۶/۱۱</th>
            <th className=" group-hover:text-primary-focus">۱</th>
          </tr>

          <tr className="group hover:scale-105 hover:shadow-xl hover:drop-shadow-xl cursor-pointer">
            <td className=" group-hover:text-primary-focus">تعمیر</td>
            <td className=" group-hover:text-primary-focus">۴۵۰,۰۰۰</td>
            <td dir="rtl" className=" group-hover:text-primary-focus">
              ۱۰۰۲
            </td>
            <th className=" group-hover:text-primary-focus">۱۴۰۱/۰۶/۱۲</th>
            <th className=" group-hover:text-primary-focus">۲</th>
          </tr>

          <tr className="group hover:scale-105 hover:shadow-xl hover:drop-shadow-xl cursor-pointer">
            <td className=" group-hover:text-primary-focus">تعمیر</td>
            <td className=" group-hover:text-primary-focus">۲۵۰,۰۰۰</td>
            <td dir="rtl" className=" group-hover:text-primary-focus">
              ۱۰۰۳
            </td>
            <th className=" group-hover:text-primary-focus">۱۴۰۱/۰۶/۱۴</th>
            <th className=" group-hover:text-primary-focus">۳</th>
          </tr>

          <tr className="group hover:scale-105 hover:shadow-xl hover:drop-shadow-xl cursor-pointer">
            <td className=" group-hover:text-primary-focus">خرید</td>
            <td className=" group-hover:text-primary-focus">۵۰۰,۰۰۰</td>
            <td dir="rtl" className=" group-hover:text-primary-focus">
              ۱۰۰۴
            </td>
            <th className=" group-hover:text-primary-focus">۱۴۰۱/۰۶/۱۶</th>
            <th className=" group-hover:text-primary-focus">۴</th>
          </tr>
        </tbody>
      </table>
      <FooterNotMain />
    </div>
  )
}
export default List
