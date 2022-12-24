import CardComponent from '../components/layout/card'
import CardDescriptionComponent from '../components/layout/cardDescription'
import FooterNotMain from '../components/layout/footernotmain'
import Navbar from '../components/layout/navbar/navbar'

function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <CardDescriptionComponent>
        <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
          پاسخ به پرسش‌های متداول
        </h3>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2"
          dir="rtl"
        >
          <div className="collapse-title text-xl font-medium">
            برای خرید از سایت، حتما باید در سایت عضو باشم؟
          </div>
          <div className="collapse-content">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2"
          dir="rtl"
        >
          <div className="collapse-title text-xl font-medium">
            چگونه می توانم سفارش خود را ثبت کنم؟
          </div>
          <div className="collapse-content">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2"
          dir="rtl"
        >
          <div className="collapse-title text-xl font-medium">
            نحوه ارسال و زمان آن چگونه است؟
          </div>
          <div className="collapse-content">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2"
          dir="rtl"
        >
          <div className="collapse-title text-xl font-medium">
            نحوه پرداخت به چه صورت است؟
          </div>
          <div className="collapse-content">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2"
          dir="rtl"
        >
          <div className="collapse-title text-xl font-medium">
            چطور از کارت هدیه خود استفاده کنم؟
          </div>
          <div className="collapse-content">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </CardDescriptionComponent>
      <FooterNotMain />
    </div>
  )
}

export default FAQ
