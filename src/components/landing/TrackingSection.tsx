'use client';

import { useState } from 'react';
import { trackingTabs } from '@/data/landingData';
import { CheckIcon } from './CheckIcon';

export function TrackingSection() {
  const [active, setActive] = useState(0);

  const tab = trackingTabs[active];

  return (
    <section className="tracking-app py-8 lg:py-20">
      <div className="container m-auto">
        <div className="tracking-app-heading text-center xl:px-20">
          <h2>Boost productivity, Empower employees, Automate & Grow your business </h2>
        </div>
        <div className="tracking-app-tab">
          <ul className="tabs-nav" id="tabs-nav-tracking" role="tablist">
            {trackingTabs.map((t, i) => (
              <li key={t.id} className={i === active ? 'active' : ''} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className="grid w-full cursor-pointer place-items-center border-0 bg-transparent p-0 text-inherit"
                  onClick={() => setActive(i)}
                >
                  <div className="tracking-app-tab-image">
                    <img src={t.thumb} alt={t.thumbAlt} />
                  </div>
                  <div className="tracking-app-tab-desc">
                    <p>{t.label}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="tabs-content-tracking">
          <div className="tab-content block" role="tabpanel">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="tracking-app-left-side">
                <div className="tracking-app-inner-heading">
                  <h2 className="heading-left-bottom-border">{tab.title}</h2>
                </div>
                <div className="tracking-app-inner-content">
                  {tab.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <div className="tracking-app-sub-heading">
                  <h4>
                    With <span>The PSM.app</span> you&apos;ll be able to:
                  </h4>
                </div>
                <ul>
                  {tab.bullets.map((b) => (
                    <li key={b}>
                      <div className="tracking-tab-content">
                        <div className="tracking-tab-content-icon">
                          <CheckIcon />
                        </div>
                        <div className="tracking-tab-content-desc">
                          <p>{b}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tracking-app-right-side">
                <div className="tracking-app-right-side-img">
                  <img src={tab.image} alt={tab.imageAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
