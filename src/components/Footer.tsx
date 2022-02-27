import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
         Stay up to date!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
          <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/Games-Tech/sign-up'>How it works</Link>
            <Link to='/Games-Tech'>Testimonials</Link>
            <Link to='/Games-Tech'>Careers</Link>
            <Link to='/Games-Tech'>Investors</Link>
            <Link to='/Games-Tech'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Games-Tech'>Contact</Link>
            <Link to='/Games-Tech'>Support</Link>
            <Link to='/Games-Tech'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/Games-Tech'>Submit Video</Link>
            <Link to='/Games-Tech'>Ambassadors</Link>
            <Link to='/Games-Tech'>Agency</Link>
            <Link to='/Games-Tech'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/Games-Tech'>Instagram</Link>
            <Link to='/Games-Tech'>Facebook</Link>
            <Link to='/Games-Tech'>Youtube</Link>
            <Link to='/Games-Tech'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              GamesTech
              <i className='fas fa-gamepad' />
            </Link>
          </div>
          <small className='website-rights'>GamesTech © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;