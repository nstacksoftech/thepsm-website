import { LINKS } from '@/data/landingData';

export function CtaBanner() {
  return (
    <section className="psm_app py-8 lg:py-20">
      <div className="container m-auto">
        <div className="psm-heading text-center xl:px-20">
          <h2>Start free Now!</h2>
        </div>
        <div className="psm-content text-center">
          <p>Streamline your sales operations with the most effective yet simple field sales management app</p>
        </div>
        <div>
          <a className="psm-btn" href={LINKS.signup} target="_blank" rel="noreferrer">
            Free Sign Up
          </a>
        </div>
      </div>
    </section>
  );
}
