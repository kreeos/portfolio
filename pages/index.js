import Head from 'next/head'
import React from "react"
import { Chrono } from "react-chrono"

export default function Home() {


  const items = [{
    // title: "LG CNS",
    // cardTitle: "Infrastructure Architect",
    // cardSubtitle: "2021-01 - 2021.04",
  }, {
    // title: "SPARCS Biseo",
    // cardTitle: "Project Manager",
    // cardSubtitle: "2020.03 - 2020.12",
  }, {
	  // title: "Aria",
	  // cardTitle: "Server Manager",
	  // cardSubtitle: "2019.12 - 2020.12",
  }, {
	  // title: "LG CNS",
	  // cardTitle: "Intern",
	  // cardSubtitle: "2020.01 - 2020.02",
  }, {
	  // title: "Batoners",
	  // cardTitle: "Intern",
	  // cardSubtitle: "2019.06 - 2019.08",
  },];


  return (
    <div className="container">
      <Head>
        <meta name="author" content="Kris Lee"/>
        <meta name="description" content="This website is a
        portfolio website for a developer named Kris Lee."/>
        <meta property="og:image" content="/icon-person.png"/>
        <meta property="og:description" content="This website is a
        portfolio website for a developer named Kris Lee."/>
        <meta property="og:title" content="Kris Lee Portfolio"/>
        <title>Kris Lee</title>
        <link rel="icon" href="/icon-person.png" />
      </Head>

      <div className="topbar">
        <div className="text">
          Kris Lee
        </div>
      </div>
      <main>
        <div className="page">
      	  <div className="desc-container">
            <div>
              <img className="image-portrait"/>
            </div>
            <div className="desc-text-container">
              <h1 className="title">
                <a>Hello, World!</a>
              </h1>
              <p className="description">
                My name is <b>KangHyun Lee</b>, and you can call me by <b>Kris</b>!<br/>
                I just graduated from college, and getting ready to spread my wings.
                <br/>
                Let me show you couple things about me.
              </p>
              <div className="links">
                <a name="github" href="https://github.com/kreeos" target="blank" className="btn-link">
                  <div alt="Github Logo" className="logo-github">
                  </div>
                  {' '}Github
                </a>
                <a name="insta" href="http://www.instrgram.com/kreeos47" target="blank" className="btn-link">
                  <div alt="Insta Logo" className="logo-insta">
                  </div>
                  {' '}Instagram
                </a>
                <a name="mail" href="mailto:kanghyunkrislee@gmail.com" target="blank" className="btn-link">
                  <div alt="Mail Logo" className="logo-email">
                  </div>
                  Mail
                </a>
                <a href="KangHyun_Kris_Lee_CV_210504.pdf" target="blank" className="btn-link">
                  <img src="/resume.svg" alt="Resume Logo" className="logo-contact"/>
                  {' '}Resume
                </a>
              </div>
            </div>
      	  </div>
        </div>

      	<div className="container-chrono">
      	  <Chrono
      	    mode="VERTICAL"
            hideControls={true}
            theme={{
              primary: "#4896A0",
              secondary: "white",
              cardForeColor: "Black"
            }}
      	  >
          <div className="card-content">
            <div className="card-title">
              <h1>LG CNS</h1>
              <a> 2021.01 - 2021.04 </a>
            </div>
            <p> Worked as an Infra Architect. </p>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h1>PM for SPARCS Biseo</h1>
              <a> 2020.03 - 2020.12 </a>
            </div>
            <p>
              The system was initially designed for SPARCS meetings.
  		        <br/> The service stack consists of <b>React.js</b>, <b>Typescript</b>, <b>MongoDB</b> and <b>Node.js</b>.
  		        <br/>For more information, please visit the project repo.&nbsp;
              <br/>
              <div className="btn-container">
                <a href="https://github.com/sparcs-kaist/biseo-frontend" target="blank" className="btn-link">
                  <div alt="Biseo Frontend" className="logo-github">
                  </div>
                  {' '}Github(Frontend)
                </a>
                <a href="https://github.com/sparcs-kaist/biseo-backend" target="blank" className="btn-link">
                  <div alt="Biseo Backend" className="logo-github">
                  </div>
                  {' '}Github(Backend)
                </a>
              </div>
            </p>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h1>Server Manager</h1>
              <a> 2019.12 - 2021.02 </a>
            </div>
            <p>
              Server Manager for ML enabled server.
              <br/> The server was <b>Dockerized</b>, and was managed with a GUI tool called <b>Portainer</b> for ease of use.
            </p>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h1>LG CNS - Intern</h1>
              <a> 2020.01 - 2020.02 </a>
            </div>
            <p>
              Internship as a Software Architect.
              <br/> The project was to create a full stack web application on a laptop.
              <br/> The environment was set up with <b>VMWARE</b> and <b>Docker</b>.
              <br/> The web stack included <b>HTML/CSS</b>, <b>Nodejs</b>, <b>Nginx</b>.
              <br/> The CI/CD was managed with <b>Jenkins</b> and <b>Sonarqube</b>.
            </p>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h1>Batoners - Intern</h1>
              <a> 2019.06 - 2019.08 </a>
            </div>
            <p>
              Developing an Android application for visually handicapped people.
              <br/> I set up the development environment for the team.
              <br/> The environment included <b>AWS EC2</b>, <b>ML training server</b>, and <b>CI/CD server</b>.
              <br/> I also took parts in training an ML model, using <b>tensorflow</b>.
            </p>
          </div>
          </Chrono>
      	</div>
        <hr></hr>

	      <div className="page">
      	  <a className="section-title">
      	    Projects
      	  </a>
          <div className="project-card">
            <div className="project-card-wrapper">
              <div>
                <img className="project-image"src="/pioneers.png"/>
              </div>
              <div className="card-content">
                <div className="card-title">
                  <h1>PIONEERS 2071</h1>
                  <a> Outsourcing </a>
                </div>
                <p>
                  KAIST 50th year anniversary website
                  <br/>I created this website using <b>React.js</b>,<b>MongoDB</b> and <b>Node.js</b>.
        	        <br/>
                  <div className="btn-container">
                    <a href="https://pioneers.kaist.ac.kr" target="blank" className="btn-link">
                      <div alt="Pioneers Web" className="logo-web">
                      </div>
                      {' '}Website
                    </a>
                    <a href="https://github.com/kreeos/pioneers2071" target="blank" className="btn-link">
                      <div alt="Pioneers Git" className="logo-github">
                      </div>
                      {' '}Github
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <hr/>
          </div>
          <div className="project-card">
            <div className="project-card-wrapper">
              <div>
                <img className="project-image"src="/rnl.png"/>
              </div>
              <div className="card-content">
                <div className="card-title">
                  <h1>RNL Website</h1>
                  <a> Outsourcing </a>
                </div>
                <p>
                  Radiation Materials and Nanomechanics lab website
                  <br/>I created this website using <b>React.js</b>, <b>MongoDB</b> and <b>Node.js</b>.
          	  	  <br/>
                  <a className="repo">
                    The project repository is <b><a className="private">private</a></b>
                  </a>.
                  <div className="btn-container">
                    <a href="https://rnl.kaist.ac.kr" target="blank" className="btn-link">
                      <div alt="RNL Web" className="logo-web">
                      </div>
                      {' '}Website
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <hr/>
          </div>
          <div className="project-card">
            <div className="project-card-wrapper">
              <div>
                <img className="project-image"src="/horoscope.png"/>
              </div>
              <div className="card-content">
                <div className="card-title">
                  <h1>Daily Horoscope</h1>
                  <a> Individual Project </a>
                </div>
                <p>
                  A website for your daily horoscope
                  <br/>I created this website using <b>HTML</b>, <b>CSS</b>, <b>MongoDB</b> and <b>Node.js</b>.
        	        <br/>
                  <div className="btn-container">
                    <a href="https://horoscope.krislee.dev" target="blank" className="btn-link">
                      <div alt="Horoscope Web" className="logo-web">
                      </div>
                      {' '}Website
                    </a>
                    <a href="https://github.com/kreeos/newbie_project" target="blank" className="btn-link">
                      <div alt="Horoscope Git" className="logo-github">
                      </div>
                      {' '}Github
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <hr/>
          </div>
          <div className="project-card">
            <div className="project-card-wrapper">
              {/*
              <div>
                <img className="project-image"src="/kris-main-pic.jpeg"/>
              </div>
              */}
              <div className="card-content">
                <div className="card-title">
                  <h1>KENS</h1>
                  <a>Coursework Project </a>
                </div>
                <p>
                  KAIST Educational Network System <br/>
                  The system mainly consists of <b>C++</b>, and the main purpose is to build <b>TCP/IP</b>.
                  <br/>
                  <a className="repo">
                    The project repository is <b><a className="private">private</a></b>
                  </a>.
                  {/*
                  <div className="btn-container">
                    <a href="https://github.com/ANLAB-KAIST/KENSv3" target="blank" className="btn-link">
                      <img src="/svg-github.svg" alt="KENS git" className="logo-contact"/>
                      {' '} KENS
                    </a>
                  </div>
                  */}
                </p>
              </div>
            </div>
            <hr/>
          </div>
          <div className="project-card">
            <div className="project-card-wrapper">
              <div className="card-content">
                <div className="card-title">
                  <h1>PintOS</h1>
                  <a>Coursework Project </a>
                </div>
                <p>
                  Originally designed for Standford CS140, used for KAIST CS330<br/>
              		The system consists of 100% <b>C</b> Language. <br/>
              		Implementation includes threading, scheduling, syscall, VM, and file system.
        	  	    <br/>
                  <a className="repo">
                    The project repository is <b><a className="private">private</a></b>
                  </a>.
                  {/*
                  <div className="btn-container">
                    <a href="https://www.scs.stanford.edu/17wi-cs140/pintos/pintos.html" target="blank" className="btn-link">
                      <img src="/svg-github.svg" alt="PintOS Web" className="logo-contact"/>
                      {' '}PintOS
                    </a>
                  </div>
                  */}
                </p>
              </div>
            </div>
            <hr/>
          </div>
        </div>
      </main>

      <footer>
        This website was created with {' '}
        <img src="/nextjs-logo.png" alt="NextJs Logo" className="logo" />
      </footer>
    </div>
  )
}
