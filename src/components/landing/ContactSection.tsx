import { img } from '@/lib/images';
import { LINKS } from '@/data/landingData';

export function ContactSection() {
  return (
    <section className="request-demo py-8 lg:py-20" id="request-demo-main">
      <div className="container m-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-24">
          <div className="request-demo-left-side">
            <div className="request-demo-left-side-heading">
              <h2 className="heading-left-bottom-border">Looking to automate your field sales operations?</h2>
              <p>Talk to our automation expert!</p>
            </div>
            <div className="request-demo-desc footer_ct_qr">
              <ul>
                <li>
                  <div className="request-demo-desc-inner">
                    <div className="request-demo-icon">
                      <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.52765 9.91919C4.8136 20.5901 12.0751 30.6309 22.7461 32.3449L25.6444 32.8105C26.4131 32.934 27.1993 32.747 27.8302 32.2908C28.461 31.8345 28.8848 31.1464 29.0083 30.3777L29.2922 28.6104C29.3989 27.9457 29.0399 27.2934 28.4204 27.0287L22.9518 24.6889C22.4078 24.4562 21.7785 24.5731 21.3545 24.9833L19.8375 26.4482C19.3964 26.8742 18.7348 26.9873 18.2002 26.6873C16.2159 25.5733 14.4975 24.0413 13.1639 22.1973C11.8304 20.3534 10.9136 18.2416 10.477 16.0082C10.3596 15.4066 10.6742 14.8136 11.2169 14.5282L13.0831 13.5462C13.6068 13.2722 13.9138 12.7098 13.863 12.1215L13.3535 6.19522C13.3254 5.86922 13.1892 5.56193 12.9665 5.32219C12.7438 5.08245 12.4474 4.92399 12.1244 4.87199L10.3571 4.58811C9.58837 4.46464 8.80213 4.65158 8.17128 5.10781C7.54043 5.56404 7.11666 6.25219 6.99319 7.02087L6.52765 9.91919Z"
                          stroke="#645EFD"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="request-demo-desc-content">
                      <p>GET FREE CONSULATATION</p>
                      <a href="tel:+919978763071">+91 9978763071</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="request-demo-desc-inner">
                    <div className="request-demo-icon">
                      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M27 4V18C27 18.7956 26.6839 19.5587 26.1213 20.1213C25.5587 20.6839 24.7957 21 24 21H4C3.20435 21 2.44129 20.6839 1.87868 20.1213C1.31607 19.5587 1 18.7956 1 18V4M27 4C27 3.20435 26.6839 2.44129 26.1213 1.87868C25.5587 1.31607 24.7957 1 24 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4M27 4V4.324C27.0001 4.83619 26.869 5.33987 26.6192 5.78706C26.3695 6.23425 26.0094 6.61005 25.5733 6.87867L15.5733 13.032C15.1003 13.3234 14.5556 13.4777 14 13.4777C13.4444 13.4777 12.8997 13.3234 12.4267 13.032L2.42667 6.88C1.99056 6.61138 1.63049 6.23558 1.38076 5.7884C1.13102 5.34121 0.999943 4.83753 1 4.32533V4"
                          stroke="#645EFD"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="request-demo-desc-content">
                      <p>SEND QUERIES </p>
                      <a href="mailto:demo@thepsm.app">demo@thepsm.app</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="footer_qr">
                <div className="footer_qr_img">
                  <img src={img('qr.png')} alt="Psm Playstore Qr Code" />
                </div>
                <p>
                  <a href={LINKS.playStore} target="_blank" rel="noreferrer">
                    Download Now <br />
                    thePSM.app
                  </a>
                </p>
              </div>
            </div>
            <div className="request-demo-social-icon">
              <ul className="flex list-none flex-wrap gap-2 p-0">
                <a href={LINKS.facebook} target="_blank" rel="noreferrer">
                  <li>
                    <span className="sr-only">Facebook</span>
                    <svg width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.4043 36.5537H7.63923C6.6763 36.5537 5.89295 35.7704 5.89295 34.8074V21.804H2.52948C1.56648 21.804 0.783203 21.0204 0.783203 20.0577V14.4857C0.783203 13.5227 1.56648 12.7394 2.52948 12.7394H5.89295V9.94915C5.89295 7.18249 6.76166 4.82871 8.40494 3.14255C10.0557 1.44879 12.3625 0.553711 15.0762 0.553711L19.4728 0.560883C20.4341 0.5625 21.2162 1.34585 21.2162 2.30709V7.48062C21.2162 8.44355 20.4331 9.2269 19.4704 9.2269L16.5101 9.22795C15.6073 9.22795 15.3774 9.40894 15.3283 9.46441C15.2473 9.55652 15.1509 9.81654 15.1509 10.5348V12.7392H19.248C19.5564 12.7392 19.8552 12.8153 20.112 12.9586C20.666 13.2682 21.0104 13.8535 21.0104 14.486L21.0082 20.058C21.0082 21.0204 20.2249 21.8038 19.262 21.8038H15.1508V34.8074C15.1509 35.7704 14.3673 36.5537 13.4043 36.5537Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                </a>
                <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                  <li>
                    <span className="sr-only">Instagram</span>
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip_ig)">
                        <path
                          d="M26.2551 0.553711H9.74487C4.37146 0.553711 0 4.92517 0 10.2986V26.809C0 32.1822 4.37146 36.5536 9.74487 36.5536H26.2553C31.6285 36.5536 35.9999 32.1822 35.9999 26.809V10.2986C35.9999 4.92517 31.6285 0.553711 26.2551 0.553711ZM33.8894 26.809C33.8894 31.0184 30.4647 34.4431 26.2551 34.4431H9.74487C5.5352 34.4431 2.1105 31.0184 2.1105 26.809V10.2986C2.1105 6.08891 5.5352 2.66421 9.74487 2.66421H26.2553C30.4647 2.66421 33.8894 6.08891 33.8894 10.2986V26.809Z"
                          fill="white"
                        />
                        <path
                          d="M17.9997 8.71071C12.5719 8.71071 8.15625 13.1263 8.15625 18.5542C8.15625 23.982 12.5719 28.3976 17.9997 28.3976C23.4276 28.3976 27.8432 23.982 27.8432 18.5542C27.8432 13.1263 23.4276 8.71071 17.9997 8.71071ZM17.9997 26.2871C13.736 26.2871 10.2668 22.8183 10.2668 18.5542C10.2668 14.2904 13.736 10.8212 17.9997 10.8212C22.2638 10.8212 25.7327 14.2904 25.7327 18.5542C25.7327 22.8183 22.2638 26.2871 17.9997 26.2871ZM28.0786 5.21484C26.4746 5.21484 25.17 6.51977 25.17 8.12346C25.17 9.7275 26.4746 11.0324 28.0786 11.0324C29.6826 11.0324 30.9874 9.7275 30.9874 8.12353C30.9874 6.51956 29.6826 5.21484 28.0786 5.21484ZM28.0786 8.92165C27.6386 8.92165 27.2804 8.56348 27.2804 8.12346C27.2804 7.68323 27.6386 7.32534 28.0786 7.32534C28.5188 7.32534 28.877 7.68323 28.877 8.12346C28.877 8.56348 28.5188 8.92165 28.0786 8.92165Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip_ig">
                          <rect width="36" height="36" fill="white" transform="translate(0 0.553711)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </li>
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  <li>
                    <span className="sr-only">LinkedIn</span>
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M33.3713 33.925V22.6513C33.3713 17.1092 32.187 12.8934 25.7213 12.8934C22.6186 12.8934 20.5344 14.575 19.6818 16.2092H19.6107V13.3908H13.5002V33.925H19.8949V23.7644C19.8949 21.0644 20.3923 18.5065 23.7318 18.5065C27.0713 18.5065 27.0476 21.5855 27.0476 23.9539V33.9487L33.3713 33.925ZM3.12652 13.3908H9.49757V33.925H3.12652V13.3908ZM6.32389 3.15918C4.28705 3.15918 2.60547 4.81707 2.60547 6.85392C2.60547 8.89076 4.26336 10.5723 6.30021 10.5723C8.33705 10.5723 10.0186 8.91444 10.0186 6.8776V6.83023C10.0186 4.81707 8.36073 3.15918 6.32389 3.15918Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="request-demo-right-side-main">
            <div className="request-demo-right-side">
              <h2 className="heading-center-bottom-border request-demo-right-h2">Request A Demo</h2>
              <form action={LINKS.formAction} method="POST" id="form">
                <div className="grid grid-cols-1 gap-x-4 lg:gap">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control custom-form-control"
                      placeholder="Name"
                      id="name"
                      required
                      minLength={3}
                      maxLength={255}
                      pattern="[a-zA-Z ]+"
                      title="Letters and spaces only"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control custom-form-control"
                      placeholder="Work Email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control custom-form-control"
                      placeholder="Phone"
                      id="phone"
                      required
                      minLength={10}
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="companyname"
                      className="form-control custom-form-control"
                      placeholder="Company Name"
                      id="companyname"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="review"
                      className="form-control custom-form-control"
                      placeholder="Message"
                      id="review"
                      rows={6}
                      required
                    />
                  </div>
                  <p className="text-sm text-secondary/80">
                    Submitting posts to the live site may require reCAPTCHA on{' '}
                    <a href="https://thepsm.app/" className="text-primary underline">
                      thepsm.app
                    </a>
                    . This preview uses HTML5 validation only.
                  </p>
                  <div className="form-group text-center">
                    <input type="submit" value="Submit" className="form-control" id="submit_btn" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
