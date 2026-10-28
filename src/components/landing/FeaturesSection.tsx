import { featureBlocks } from '@/data/landingData';

export function FeaturesSection() {
  return (
    <section className="unique_Features py-8 lg:py-20" id="features">
      <div className="container m-auto">
        <div className="unique_Features-heading text-center">
          <h2 className="heading-center-bottom-border">Features at your Fingertips</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 lg:pt-12 xl:gap-8">
          {featureBlocks.map((f) => (
            <div key={f.title} className="future-unique-cols">
              <div className="future-unique-cols-inner">
                <div className="future-unique-icon">
                  <img src={f.icon} alt="" />
                </div>
                <div className="future-unique-icon-detail">
                  <h5>{f.title}</h5>
                  <p>{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
