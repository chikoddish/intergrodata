import React from 'react'

import teamImg from "../../assets/images/team/team-member-1.jpg"
import teamImg2 from "../../assets/images/team/team-member-2.jpg"
import teamImg3 from "../../assets/images/team/team-member-3.jpg"
import teamImg4 from "../../assets/images/team/team-member-4.jpg"
import teamImg5 from "../../assets/images/team/team-member-5.jpg"
import teamImg6 from "../../assets/images/team/team-member-6.jpg"

const Team = (prop) => {
  return (
  <section className="section section-lg-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <p className="subtitle" data-aos="fade-up">Team</p>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay={200}>Expert Person</h2>
        </div>
        <div className="col-lg-4 col-sm-6 mb-5" data-aos="fade-up" data-aos-delay={200}>
          <div className="team-member text-center">
            <img src={teamImg} className="img-fluid w-100 rounded-sm" alt />
            <div className="team-member-content p-4">
              <h5 className="team-member-name text-white">Justine Marshall</h5>
              <p className="team-member-designation text-light">Designer</p>
              <ul className="list-inline team-member-social">
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-linkedin" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-google" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-5" data-aos="fade-up" data-aos-delay={400}>
          <div className="team-member text-center">
            <img src={teamImg2} className="img-fluid w-100 rounded-sm" alt />
            <div className="team-member-content p-4">
              <h5 className="team-member-name text-white">Liam Hughes</h5>
              <p className="team-member-designation text-light">Developer</p>
              <ul className="list-inline team-member-social">
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-linkedin" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-google" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-5" data-aos="fade-up" data-aos-delay={600}>
          <div className="team-member text-center">
            <img src={teamImg3} className="img-fluid w-100 rounded-sm" alt />
            <div className="team-member-content p-4">
              <h5 className="team-member-name text-white">Neil Roberts</h5>
              <p className="team-member-designation text-light">Marketer</p>
              <ul className="list-inline team-member-social">
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-linkedin" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-google" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {prop.page == "team" ?
        <><div className="col-lg-4 col-sm-6 mb-5" data-aos="fade-up" data-aos-delay={200}>
          <div className="team-member text-center">
            <img src={teamImg4} className="img-fluid w-100 rounded-sm" alt />
            <div className="team-member-content p-4">
              <h5 className="team-member-name text-white">Justine Marshall</h5>
              <p className="team-member-designation text-light">Designer</p>
              <ul className="list-inline team-member-social">
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-linkedin" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-google" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-5" data-aos="fade-up" data-aos-delay={400}>
          <div className="team-member text-center">
            <img src={teamImg5} className="img-fluid w-100 rounded-sm" alt />
            <div className="team-member-content p-4">
              <h5 className="team-member-name text-white">Liam Hughes</h5>
              <p className="team-member-designation text-light">Developer</p>
              <ul className="list-inline team-member-social">
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-linkedin" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-google" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-5" data-aos="fade-up" data-aos-delay={600}>
          <div className="team-member text-center">
            <img src={teamImg6} className="img-fluid w-100 rounded-sm" alt />
            <div className="team-member-content p-4">
              <h5 className="team-member-name text-white">Neil Roberts</h5>
              <p className="team-member-designation text-light">Marketer</p>
              <ul className="list-inline team-member-social">
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-linkedin" /></a></li>
                <li className="list-inline-item"><a href="#" className="p-2"><i className="text-white fa fa-google" /></a></li>
              </ul>
            </div>
          </div>
        </div></>
        : null }
      </div>
    </div>
  </section>
)}

export default Team