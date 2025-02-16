import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiNetlify } from 'react-icons/si'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <p><a href="#">Portfolio | Dhaneshkumar Dash</a></p>
        <div className="social_links">
          <a href="https://github.com/DkDash10" target='_blank' title="Github"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/dhanesh-09854922a/" target='_blank' title="LinkedIn"><BsLinkedin /></a>
          <a href="https://app.netlify.com/teams/dhaneshdash11/sites" target='_blank' title="Netlify"><SiNetlify /></a>
        </div>
      </div>
    </section>
  )
}

export default Footer