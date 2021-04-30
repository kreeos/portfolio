import Head from 'next/head'
import Image from 'next/image'
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
                <a href="https://github.com/kreeos" target="blank" className="btn-link">
                  <img src="/svg-github.svg" alt="Github Logo" className="logo-contact"/>
                  {' '}Github
                </a>
                <a href="http://www.instrgram.com/kreeos47" target="blank" className="btn-link">
                  <img src="/svg-instagram.svg" alt="Insta Logo" className="logo-contact"/>
                  {' '}Instagram
                </a>
                <a href="mailto:kanghyunkrislee@gmail.com" target="blank" className="btn-link">
                  <img src="/svg-mail.svg" alt="Email Logo" className="logo-email"/>
                  {' '}Mail
                </a>
                <a href="KangHyun_Kris_Lee_CV_20210411.pdf" target="blank" className="btn-link">
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
                  <img src="/svg-github.svg" alt="Biseo Frontend" className="logo-contact"/>
                  {' '}Github(Frontend)
                </a>
                <a href="https://github.com/sparcs-kaist/biseo-backend" target="blank" className="btn-link">
                  <img src="/svg-github.svg" alt="Biseo Frontend" className="logo-contact"/>
                  {' '}Gtihub(Backend)
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

	      <div className="page">
      	  <a className="section-title">
      	    Projects
      	  </a>
      	  <div className="grid">
            <a href="https://pioneers.kaist.ac.kr" className="card">
              <h3>PIONEERS 2071 &rarr;</h3>
              <p>
                KAIST 50th year anniversary website
                <br/>I created this website using <code>React.js</code>,<code>MongoDB</code> and <code>Node.js</code>.
      	        <br/>
      	        <a className="link" href="https://github.com/kreeos/pioneers2071">
                  Link to Repo
                </a>
      	      </p>
            </a>
            <a href="https://rnl.kaist.ac.kr" className="card">
              <h3>RNL Website &rarr;</h3>
              <p>
                Radiation Materials and Nanomechanics lab website
                <br/>I created this website using <code>React.js</code>, <code>MongoDB</code> and <code>Node.js</code>.
        	  	  <br/>
                <a className="repo">
                  The project repository is <a className="private">private</a>
                </a>.
      	      </p>
            </a>
            <a href="https://horoscope.krislee.dev" className="card">
              <h3>Daily Horoscope &rarr;</h3>
              <p>
                A website for your daily horoscope
                <br/>I created this website using <code>HTML</code>, <code>CSS</code>, <code>MongoDB</code> and <code>Node.js</code>.
      	        <br/>
                <a className="link" href="https://github.com/kreeos/newbie_project">
                  Link to Repo
                </a>
      	      </p>
            </a>
            <a
              href="https://github.com/ANLAB-KAIST/KENSv3" className="card"
            >
              <h3>KENS &rarr;</h3>
              <p>
                  KAIST Educational Network System <br/>
      		        The system mainly consists of <code>C++</code>, and the main purpose is to build <code>TCP/IP</code>.
      	  	      <br/>
                  <a className="repo">
                    The project repository is <a className="private">private</a>
                  </a>.
      	      </p>
      	    </a>
            <a
              href="https://www.scs.stanford.edu/17wi-cs140/pintos/pintos.html" className="card"
            >
              <h3>PintOS &rarr;</h3>
              <p>
                Originally designed for Standford CS140, used for KAIST CS330<br/>
            		The system consists of 100% <code>C</code> Language. <br/>
            		Threading, scheduling, syscall, VM, and file system were implemented.
      	  	    <br/>
                <a className="repo">
                  The project repository is <a className="private">private</a>
                </a>.
      	      </p>
            </a>
      	  </div>
      	  <hr></hr>
        </div>


      	<div className="page">
      	  <a className="section-title">
      	    Experiences
      	  </a>
      	  <div className="grid">
            <a className="exp-card">
              <h3>LG CNS</h3>
              <p>
      		      <a className="date"> 2021.01 - Current </a><br/>
      	        <p>
                  Working as an Infra Architect
                </p>
      	      </p>
      	    </a>
            <a className="exp-card">
              <h3>PM for SPARCS Biseo </h3>
              <p>
      		<a className="date"> 2020.03 - 2020.12 </a><br/>
            The system was initially designed for SPARCS meetings.
		        <br/> The service stack consists of <code>React.js</code>,<code>Typescript</code>,<code>MongoDB</code> and <code>Node.js</code>.
		        <br/>For more information, please visit the project repo.&nbsp;
      	    <a className="link" href="https://github.com/sparcs-kaist/biseo-frontend">
              frontend
            </a>
		        &nbsp;/&nbsp;
      	    <a className="link" href="https://github.com/sparcs-kaist/biseo-backend">
              backend
            </a>
      	   </p>
        </a>
      <a className="exp-card">
        <h3>Server Manager</h3>
        <p>
	        <a className="date"> 2019.12 - 2020.12 </a><br/>
	          Server Manager for ML enabled server.
	          <br/> The server was <code>Dockerized</code>, and was managed with a GUI tool called <code>Portainer</code> for ease of use.
    		</p>
      </a>
      <a className="exp-card">
        <h3>LG CNS - Intern</h3>
        <p>
		      <a className="date"> 2020.01 - 2020.02 </a><br/>
	        <p>
            Internship as a Software Architect.
            <br/> The project was to create a full stack web application on a laptop.
            <br/> Used technologies were <code>VMWARE</code>, <code>Docker</code>, <code>Nginx</code>, <code>Nodejs</code>,
            <code>HTML/CSS</code>, <code>Jenkins</code>, and <code>Sonarqube</code>.
      		</p>
	      </p>
	    </a>
      <a className="exp-card">
        <h3>Batoners - Intern </h3>
        <p>
          <a className="date"> 2019.06 - 2019.08 </a><br/>
          <p>
            Developing an Android application for visually handicapped people.
	          <br/> I set up the development environment for the team using AWS
    	      <br/> The environment included EC2, ML training server, and CI/CD server.
	          <br/> I also took parts in training an ML model, using <code>tensorflow</code>.
          </p>
        </p>
      </a>
	  </div>
	  <hr></hr>
  </div>

</main>

      <footer>
        This website was created with {' '}
        <img src="/nextjs-logo.png" alt="NextJs Logo" className="logo" />
      </footer>
    </div>
  )
}
