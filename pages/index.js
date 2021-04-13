import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
      
        <title>Kris Lee</title>
        <link rel="icon" href="/icon-person.png" />
      </Head>
      <main>
        <div className="page">
          <h1 className="title">
            <a>Hello, World!</a>
          </h1>

          <img className="image-portrait"/>
	  <div clasName="container_desc">
          <p className="description">
            My name is KangHyun Lee, and you can call me by Kris!<br/>
            I just graduated from college, and just getting ready to spread my wings.
            <br/>
            Let me show you couple things about me.
          </p>
	  </div>

          <div className="page">
            <div className="links">
              <a href="mailto:kanghyunkrislee@gmail.com" target="blank" className="container-link">
                <img src="/email-logo.png" alt="Email Logo" className="logo-email"/>
                {' '}E-mail 
              </a>
              <a href="https://instrgram.com/kreeos47" target="blank" className="container-link">
                <img src="/insta-logo.png" alt="Insta Logo" className="logo-contact"/>
                {' '}Instagram 
              </a>
              <a href="https://github.com/kreeos" target="blank" className="container-link">
                <img src="/github.svg" alt="Github Logo" className="logo-contact"/>
                {' '}Github 
              </a>
              <a href="KangHyun_Kris_Lee_CV_20210411.pdf" target="blank" className="container-link">
                <img src="/resume.svg" alt="Resume Logo" className="logo-contact"/>
                {' '}Resume 
              </a>
            </div>
          </div>

          <hr></hr>
        </div>


      	<div className="page">
      	  <a className="section-title">
      	    Projects
      	  </a>
      	  <div className="grid">
            <a href="https://pioneers.kaist.ac.kr" className="card">
              <h3>PIONEERS 2071 &rarr;</h3>
              <p>
                KAIST 50th year anniversary website. 
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
                Radiation Materials and Nanomechanics lab website. 
                <br/>I created this website using <code>React.js</code>, <code>MongoDB</code> and <code>Node.js</code>
        	  	  <br/> 
                <a className="repo">
                  The project repository is <a className="private">private</a>
                </a>.
      	      </p>
            </a>
            <a href="https://horoscope.krislee.dev" className="card">
              <h3>Daily Horoscope &rarr;</h3>
              <p>
                A website for your daily horoscope. 
                <br/>I created this website using <code>HTML</code>, <code>CSS</code>, <code>MongoDB</code> and <code>Node.js</code>
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
      		        The system mainly consists of <code>C++</code>, and the main purpose is to build <code>TCP/IP</code>
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
                Originally designed for Standford CS140, modified for KAIST CS330<br/>
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
              <h3>LG CNS - Intern</h3> 
              <p>
      		      <a className="date"> 2020.01 - 2020.02 </a><br/>
      	        <p> 
                  Internship as a Software Architect. 
                </p>
      	      </p>
      	    </a>
            <a className="exp-card">
              <h3>Batoners - Intern </h3> 
              <p>
                <a className="date"> 2019.06 - 2019.08 </a><br/>
                <p>
                  Developing an Android application for visually handicapped people. 
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
