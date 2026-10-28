import { img } from '@/lib/images';

export function AboutSection() {
  return (
    <section
      className="global-vincitore-nstack-sec grey-background-sec relative py-8 lg:py-20"
      id="global-vincitore-nstack-sec"
    >
      <div className="container m-auto">
        <div className="grid grid-cols-1 items-center gap-4 md:flex md:gap-5">
          <div className="two-column-sec-left md:w-7/12">
            <div className="two-column-sec">
              <div className="two-column-left-side-title">
                <h2>
                  <p>A Venture of </p>
                  Global Vincitore + NStack Softech
                </h2>
              </div>
              <div className="two-column-left-side-content">
                <p>
                  A joint innovation of Global Vincitore and NStack Softech, the PSM app is powered by the wings of
                  what&apos;s current and what&apos;s the need of the hour to give enterprises well-rounded solutions for all
                  things &apos;sales&apos;. Our business solutions run complementary to each other allowing us to provide a blend
                  that&apos;s the perfect ying to its yang.
                </p>
                <p>
                  At our core lies one thing - to help businesses churn the wheels of growth with the support of
                  technology. Anything and everything that you have in mind regarding the way your Sales Management
                  System should run, we&apos;re here to get it done for you.
                </p>
              </div>
            </div>
          </div>
          <div className="two-column-right-side md:w-5/12">
            <div className="two-column-right-side-inner">
              <img src={img('Global Vincitore_right_side.png')} alt="The PSM Application" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
