import Carousel from "@/src/Carousel"
import CountdownTimer from "@/src/Timer"
import ConferenceDate from "@/src/ConferenceDate"
import MainContent from "@/src/MainContent"
import Subscription from "@/src/Subscription"
import Speaker from "@/src/Speaker"
import Contact from "@/src/Contact"
import PaperPresent from "@/src/PaperPresent"

export default function Home() {
  return (
    <>
      <div className="relative">
        <Carousel />
        <div className="hidden xl:block absolute inset-x-0 top-[12%] px-20">
          <CountdownTimer targetDate="2024-03-21" />
        </div>
        <div className="absolute left-5 right-5 top-20 sm:top-[10%] sm:left-12 sm:right-12 md:top-[20%] md:left-24 md:right-24 xl:left-36 xl:right-36 xl:top-[30%] xl:px-20">
        <ConferenceDate />
        </div>
        <div className="absolute inset-x-0 top-[50%] sm:top-[25%] sm:left-4 sm:right-4 md:top-[45%] xl:top-[50%] xl:left-20 xl:right-20 px-4 py-6 z-20">
          <div className="flex flex-col xl:flex-row w-full">
            <div className="w-full xl:w-8/12 2xl:w-9/12 p-4">
              <MainContent />
            </div>
            <div className="w-full xl:w-4/12 2xl:w-3/12 p-4">
              <div className="xl:flex-row">
              <Subscription />
              </div>
              <div className="xl:flex-row mt-5">
              <Speaker />
              </div>
              <div className="xl:flex-row mt-5">
              <PaperPresent />
              </div>
            </div>
          </div>
          <div className="p-4">
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
