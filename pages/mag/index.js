import FooterNotMain from '../../components/layout/footernotmain'
import Navbar from '../../components/layout/navbar/navbar'

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />

      <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
        مجله
      </h3>
      <FooterNotMain />
    </div>
  )
}

export default AboutUs
