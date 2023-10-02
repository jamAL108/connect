import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
const footer = () => {
  return (
    <div className="footer">
        <div className="up">
          <div className="left">
            <h4>
              Let's keep in touch!
            </h4>
            <h5 >
              You can find me on any of these platforms
            </h5>
            <div className="links">
              <button
                type="button"
                aria-label="Twitter Link"
              >
                <Link
                  className="flex justify-center"
                  to="https://www.twitter.com/jamal_twts"
                  aria-label="Twitter Link"
                >
                  <FaTwitter className='icon' aria-label="Twitter Link" />
                </Link>
              </button>
              <button                type="button"
                aria-label="Facebook Link"
              >
                <Link
                  className="flex justify-center"
                  to="https://www.facebook.com"
                  aria-label="Facebook Link"
                >
                  <FaFacebook className='icon' aria-label="Facebook Link" />
                </Link>
              </button>

              <button
                aria-label="Github Link"
                type="button"
              >
                <Link
                  className="flex justify-center"
                  to="https://www.github.com/jamal108"
                  aria-label="Github Link"
                >
                  <FaGithub className='icon' aria-label="Github Link" />
                </Link>
              </button>
            </div>
          </div>
          <div className="right">
              <div className="one">
                <h1>Useful Links</h1>
                <div className="item">
                    <Link
                      className="link"
                      to="/about"
                      aria-label="About us Link"
                    >
                      About Us
                    </Link>
                    <Link
                      className="link"
                      to="https://www.github.com/jamal108"
                      aria-label="Github Link"
                    >
                      Github
                    </Link>
                    </div>
              </div>
              <div className="two">
                <h1 className="efv">
                  Other Resources
                </h1>
                <div className="item">
                    <Link
                    className='link'
                      href="/contact-us"
                      aria-label="Contact Us Link"
                    >
                      Contact Us
                    </Link>
                    </div>
              </div>
            </div>
        </div>
        <div className="line">

        </div>
        <div className="down">
            <div className="text">
              Copyright © {new Date().getFullYear()} Jamal Mydeen | Built using
              ReactJS
            </div>
        </div>
      </div>
  )
}

export default footer