// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faArrowRight,
//   faEnvelope,
//   faMapMarkerAlt,
//   faPhone,
//   faShoppingBasket,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedin,
//   faTwitter,
// } from '@fortawesome/free-brands-svg-icons';
// import './Footer.css';

// export default function Footer() {
//   return (
//     <footer className="footer" id="footer">
//       <div className="box-container">
//         <div className="box">
//           <FontAwesomeIcon icon={['fas', 'faUser']} />
//           <h3>
//             Bookstore
//             <i>
//               <FontAwesomeIcon icon={faShoppingBasket} />
//             </i>
//           </h3>
//           <p>
//             Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
//             Laudantium?
//           </p>
//           <div className="share">
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
//               </i>
//             </a>
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
//               </i>
//             </a>
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
//               </i>
//             </a>
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
//               </i>
//             </a>
//           </div>
//         </div>
//         <div className="box">
//           <h3>contact info</h3>
//           <a href="/" className="links">
//             <i>
//               <FontAwesomeIcon icon={faPhone} />
//             </i>
//             +123 456 7890
//           </a>
//           <a href="/" className="links">
//             <i>
//               <FontAwesomeIcon icon={faPhone} />
//             </i>
//             +111 222 3333
//           </a>
//           <a href="/" className="links" id="emailLink">
//             <i>
//               <FontAwesomeIcon icon={faEnvelope} />
//             </i>
//             name@email.com
//           </a>
//           <a href="/" className="links">
//             <i>
//               <FontAwesomeIcon icon={faMapMarkerAlt} />
//             </i>
//             London, Great Britain
//           </a>
//         </div>
//         <div className="box">
//           <h3>quick info</h3>
//           <a href="#home" className="links">
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             home
//           </a>
//           <a href="#features" className="links">
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             features
//           </a>
//           <a href="#products" className="links">
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             products
//           </a>
//           <a href="#categories" className="links">
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             categories
//           </a>
//           <a href="#reviews" className="links">
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             reviews
//           </a>
//           <a href="#blogs" className="links">
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             blogs
//           </a>
//         </div>
//         <div className="box">
//           <h3>newsletter</h3>
//           <p>Subscribe For Latest Updates</p>
//           <input type="text" placeholder="your email" />
//           <button type="button" className="btn">
//             subscribe
//           </button>
//           <img src="image/payment.png" alt="" />
//         </div>
//       </div>
//       <div className="credits">
//         <p>
//           Created By
//           {' '}
//           <span>DobrobutSol</span>
//           {' '}
//           | All Rights Reserved
//         </p>
//       </div>
//     </footer>
//   );
// }

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faArrowRight,
//   faEnvelope,
//   faMapMarkerAlt,
//   faPhone,
//   faShoppingBasket,
//   faUser
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedin,
//   faTwitter,
// } from '@fortawesome/free-brands-svg-icons';
// import styles from '../styles/Footer.module.css';

// export default function Footer() {
//   return (
//     <footer className={styles.footer} id="footer">
//       <div className={`${styles['box-container']}`}>
//         <div className={`${styles.box}`}>
//           <FontAwesomeIcon className={styles['fa-icon']} icon={faUser} />
//           <h3>
//             Bookstore
//             <i>
//               <FontAwesomeIcon icon={faShoppingBasket} />
//             </i>
//           </h3>
//           <p>
//             Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
//             Laudantium?
//           </p>
//           <div className={`${styles.share}`}>
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faFacebookF} />
//               </i>
//             </a>
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faTwitter} />
//               </i>
//             </a>
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faInstagram} />
//               </i>
//             </a>
//             <a href="/">
//               <i>
//                 <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faLinkedin} />
//               </i>
//             </a>
//           </div>
//         </div>
//         <div className={`${styles.box}`}>
//           <h3>contact info</h3>
//           <a href="/" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faPhone} />
//             </i>
//             +123 456 7890
//           </a>
//           <a href="/" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faPhone} />
//             </i>
//             +111 222 3333
//           </a>
//           <a href="/" className={`${styles.links}`} id="emailLink">
//             <i>
//               <FontAwesomeIcon icon={faEnvelope} />
//             </i>
//             name@email.com
//           </a>
//           <a href="/" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faMapMarkerAlt} />
//             </i>
//             London, Great Britain
//           </a>
//         </div>
//         <div className={`${styles.box}`}>
//           <h3>quick info</h3>
//           <a href="#home" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             home
//           </a>
//           <a href="#features" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             features
//           </a>
//           <a href="#products" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             products
//           </a>
//           <a href="#categories" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             categories
//           </a>
//           <a href="#reviews" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//               </i>
//             reviews
//           </a>
//           <a href="#blogs" className={`${styles.links}`}>
//             <i>
//               <FontAwesomeIcon icon={faArrowRight} />
//             </i>
//             blogs
//           </a>
//         </div>
//         <div className={`${styles.box}`}>
//           <h3>newsletter</h3>
//           <p>Subscribe For Latest Updates</p>
//           <input type="text" placeholder="your email" />
//           <button type="button" className={`${styles.btn}`}>
//             subscribe
//           </button>
//           <img src="/image/payment.png" alt="" />
//         </div>
//       </div>
//       <div className={`${styles.credits}`}>
//         <p>
//           Created By <span>DobrobutSol</span> | All Rights Reserved
//         </p>
//       </div>
//     </footer>
//   );
// }
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import {
//   faUser,
  faLaptop,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles['footer']}`} id="footer">
      <div className={`${styles['box-container']}`}>
        <div className={`${styles['box']}`}>
          {/* <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faUser} size="lg"  style={{ fontSize: '50px' }} /> */}
          <h3>
            DobSol
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faLaptop} style={{ fontSize: '2.5rem' }} />
            </i>
          </h3>
          <p>
            Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
            Laudantium?
          </p>
          <div className={`${styles['share']}`}>
            <a href="/">
              <i>
                <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faFacebookF} style={{ fontSize: '2.5rem' }} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faTwitter} style={{ fontSize: '10px' }} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faInstagram} style={{ fontSize: '10px' }} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faLinkedin} style={{ fontSize: '10px' }} />
              </i>
            </a>
          </div>
        </div>
        <div className={`${styles['box']}`}>
          <h3>Contact info</h3>
          <a href="/" className={`${styles['links']}`}>
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faPhone} size="1x" style={{ fontSize: '2rem' }} />
            </i>
            +123 456 7890
          </a>
          <a href="/" className={`${styles['links']}`}>
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faPhone} style={{ fontSize: '2rem' }} />
            </i>
            +111 222 3333
          </a>
          <a href="/" className={`${styles['links']}`} id="emailLink">
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faEnvelope} style={{ fontSize: '2rem' }} />
            </i>
            example@email.com
          </a>
          <a href="/" className={`${styles['links']}`}>
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faMapMarkerAlt} style={{ fontSize: '2rem' }} />
            </i>
            Odesa, Ukraine
          </a>
        </div>
        <div className={`${styles['box']}`}>
          <h3>Quick info</h3>
          <a href="#home" className={`${styles['links']}`}>
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faArrowRight} style={{ fontSize: '1.5rem' }}/>
            </i>
            Home
          </a>
          <a href="#features" className={`${styles['links']}`}>
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faArrowRight} style={{ fontSize: '1.5rem' }} />
            </i>
            Services
          </a>
          <a href="#products" className={`${styles['links']}`}>
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faArrowRight} style={{ fontSize: '1.5rem' }} />
            </i>
            Portfolio
          </a>
          <a href="#categories" className={`${styles['links']}`}>
            <i>
              <FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faArrowRight} style={{ fontSize: '1.5rem' }} />
</i>
About Us
</a>
<a href="#reviews" className={`${styles['links']}`}>
<i>
<FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faArrowRight} style={{ fontSize: '1.5rem' }} />
</i>
Testimonials
</a>
<a href="#blogs" className={`${styles['links']}`}>
<i>
<FontAwesomeIcon className={`${styles['fa-icon']}`} icon={faArrowRight} style={{ fontSize: '1.5rem' }} />
</i>
Blogs
</a>
</div>
<div className={`${styles['box']}`}>
<h3>Newsletter</h3>
<p>Subscribe For Latest Updates</p>
<input type="text" placeholder="your email" />
<button type="button" className={`${styles['btn']}`} style={{ fontSize: '2rem', backgroundColor: '#0c2e8a', padding: '0.5rem' }} >
Subscribe
</button>
{/* <img src="/image/payment.png" alt="" /> */}
</div>
</div>
<div className={`${styles['credits']}`}>
<p >
Created By Dob<span>Sol</span> | All Rights Reserved
</p>
</div>
</footer>
);
}
