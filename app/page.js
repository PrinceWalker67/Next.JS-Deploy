"use client";
import {useState} from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMobileMenu = () =>{
    setMenuOpen(!menuOpen);

  }
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">N</div>
          <div className="logo-text">Portfolio Website</div>
        </a>

        <nav>
          <ul id="menu" className={menuOpen ? "active": ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=princewalker67@gmail.com&su=Portfolio%20Contact"
                className="button"
                target="_blank"
              >
                Contact Me
              </a>
            </li>
          </ul>

          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Nika Barrett
              </h1>

              <p>
               I am an aspiring Computer Science professional with a strong background in administrative operations, financial record-keeping, and information technology. I am currently building my expertise through academic training and hands-on professional experience. 
                <span>
                   I combine technical knowledge with strong organizational and analytical skills to deliver efficient, accurate, and well-structured solutions. I thrive in fast-paced environments where attention to detail, adaptability, and problem-solving are essential.

                </span>
              </p>

              <div className="call-to-action">
                <a
                  href="./Nika C. Barrett Resume.pdf"
                  className="button black"
                >
                  View Resume
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nikabarrett1234@gmail.com&su=Portfolio%20Contact"
                  className="button"
                  target="_blank"
                >
                  Contact Me
                </a>
              </div>

            
            </div>
          </div>

          <div className="hero-yellow">
            <img
              src="./imgs/hero-image (2).png"
              alt="Nika Barrett"
              width="70%"
            />
          </div>
        </section>

        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/pngegg (1).png" alt="HTML" height="120" width="128" />
              <img src="./imgs/pngegg.png" alt="CSS" height="120" width="128" />
              <img src="./imgs/customer-service_1915579.png" alt="JS" height="120" width="128" />
              <img src="./imgs/web-design (1).png" alt="Java" height="128" width="160" />
              
              <img src="./imgs/pngegg (1).png" alt="HTML" height="120" width="128" />
              <img src="./imgs/pngegg.png" alt="CSS" height="140" width="128" />
              <img src="./imgs/customer-service_1915579.png" alt="JS" height="120" width="128" />
              <img src="./imgs/web-design (1).png" alt="Java" height="128" width="160" />
              
              <img src="./imgs/pngegg (1).png" alt="HTML" height="120" width="128" />
              <img src="./imgs/pngegg.png" alt="CSS" height="120" width="128" />
              <img src="./imgs/customer-service_1915579.png" alt="JS" height="120" width="128" />
              <img src="./imgs/web-design (1).png" alt="Java" height="128" width="160" />
              
              <img src="./imgs/pngegg (1).png" alt="HTML" height="120" width="128" />
              <img src="./imgs/pngegg.png" alt="CSS" height="120" width="128" />
              <img src="./imgs/customer-service_1915579.png" alt="JS" height="120" width="128" />
              <img src="./imgs/web-design (1).png" alt="Java" height="128" width="160" />
              
              <img src="./imgs/pngegg (1).png" alt="HTML" height="120" width="128" />
              <img src="./imgs/pngegg.png" alt="CSS" height="120" width="128" />
              <img src="./imgs/customer-service_1915579.png" alt="JS" height="120" width="128" />
              <img src="./imgs/web-design (1).png" alt="Java" height="128" width="160" />
              
              
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>

          <div className="holder-pink">
            <div className="left-column">
             
              <ul>
                <li>Digital Media Design</li>
                <li>Basic Programming </li>
                <li>Database Design </li>
                <li>Web Design/ UX Design </li>
                <li>Google Suite</li>
                <li>Administrative Support </li>
                <li>Software Testing</li>
                <li>Animation Design</li>
                <li>Video Effects</li>
                <li>Troubleshooting</li>
              </ul>

              
            </div>

            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
               I am currently pursuing a Bachelor’s degree in Computer Science at the University of Technology, Jamaica, with a major in Information Technology and a minor in Multimedia Technology. 
              </p>
              <p>
                My academic training, combined with hands-on experience in clerical, financial, and data-driven roles, has helped me develop strong analytical, problem-solving, and organizational skills. 
              </p>
              <p>
                I am highly adaptable, detail-oriented, and passionate about leveraging technology to improve administrative processes, data accuracy, and user-focused solutions. 

              </p>
              <p>
                I thrive in environments that require confidentiality, precision, and collaboration, and I am continuously working to expand my technical and creative skill set.

              </p>
            </div>
          </div>
        </section>
        <section class="work-experience container">
			<h2>
				<small>Recent</small>
				Work Experience
			</h2>
			<div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/calabar.jpg" alt="Workplace 1 - Calabar High School" width="100%" />
							<figcaption>
								  Calabar High School, Kingston, Jamaica.
							</figcaption>
						</div>
					</figure>
					<h3> Calabar High School</h3>
					<div>(Sept 2024 – Present)</div>
          <h4>Clerical Assistant</h4>
					<p>Provided administrative support across Human Resources, finance, and records management, including staff register updates, report preparation, and confidential document handling. Managed accounts receivable, bank reconciliations, and tax-related submissions through Jamaica’s Zero Rating portal while liaising with financial institutions.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/eoj2.jpg" alt="Workplace 1 -  Electoral Office of Jamaica" width="100%" />
							<figcaption>
								  Electoral Office of Jamaica.
							</figcaption>
						</div>
					</figure>
					<h3>  Electoral Office of Jamaica</h3>
					<div>(Aug 2023 – Apr 2024)</div>
          <h4>Data Collection Officer</h4>
					<p>Accurately entered, validated, and maintained voter data within the Electoral Registration System (ERS), ensuring data integrity and completeness. Conducted quality assurance checks, corrected discrepancies, and flagged irregularities to support system accuracy and compliance.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/eoj1.jpg" alt="Workplace 1 -  Electoral Office of Jamaica" width="100%" />
							<figcaption>
								  Electoral Office of Jamaica.
							</figcaption>
						</div>
					</figure>
					<h3>  Electoral Office of Jamaica</h3>
					<div>(Jun 2023 – Aug 2023)</div>
          <h4>Procurement Clerk</h4>
					<p>Prepared and processed purchase orders, tracked deliveries, and maintained procurement databases to ensure timely and accurate sourcing of goods and services. Liaised with suppliers, evaluated quotations, and negotiated pricing and terms in line with procurement standards and budget constraints.</p>
				</article>
				
			</div>
		</section>
        <section id="projects" class="bento container">
			<h2>
				<small>
Upcoming				</small>
				 Projects
			</h2>
			<div className="bento-grid">
				<a href="#" class="bento-item">
					<img src="./imgs/utechL.png" alt="BGCCI" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/wireframe1.png" alt="Churhview" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/GSAT.png" alt="Harley" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/Digital Marketing .png" alt="Bunbury" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/AI.png" alt="Running" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/uiux-wireframe.png" alt="School" width="100%" />
				</a>
			</div>
		</section>
          <section class="chatbot container">
			<h2>
				 <small>
          
					Coming Soon
				</small>
				Chatbot
       
			</h2>
			<div class="chatbot-blue">
				<div class="chat-info">
					<h3>Azure AI Chatbot</h3>
					<p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
					<p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
					<a href="./Nika C. Barrett Resume.pdf" class="button black">Download Resume</a>
				</div>
				<div class="chat-box">
					<div class="scroll-area">
						<ul id="chat-log">
							<li>
								<span class="avatar bot">AI</span>
								<div class="message">
									Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?
								</div>
							</li>
							<li>
								<span class="avatar user">User</span>
								<div class="message">
									I have a question to ask you about this resume
								</div>
							</li>
						</ul>
					</div>
					<div class="chat-message">
						<input type="text" placeholder="Hey Nika, what skills are you best at?"/>
						<button class="button black">Send</button>
					</div>
				</div>
			</div>
		</section>
      </main>
    </>
  );
}