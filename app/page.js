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
          <div className="logo">P</div>
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
                Prince Walker
              </h1>

              <p>
                I’m a Computer Science professional with a strong foundation in
                software development and hands-on technical support.
                <span>
                  I enjoy solving complex problems, working with modern
                  technologies, and contributing to teams that value innovation,
                  learning, and real-world impact.
                </span>
              </p>

              <div className="call-to-action">
                <a
                  href="./Resume - Prince Walker - 1_10.pdf"
                  className="button black"
                >
                  View Resume
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=princewalker67@gmail.com&su=Portfolio%20Contact"
                  className="button"
                  target="_blank"
                >
                  Contact Me
                </a>
              </div>

              <div className="social-links">
                <a href="#">
                  <img
                    src="./imgs/github.png"
                    alt="GitHub"
                    width="48"
                  />
                </a>
                <a href="https://www.linkedin.com/in/prince-walker-904b46153/">
                  <img
                    src="./imgs/linkedin.png"
                    alt="LinkedIn"
                    width="48"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-yellow">
            <img
              src="./imgs/my-hero-image.png"
              alt="Prince Walker"
              width="100%"
            />
          </div>
        </section>

        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" height="120" width="128" />
              <img src="./imgs/css.png" alt="CSS" height="120" width="128" />
              <img src="./imgs/javascript.png" alt="JS" height="120" width="128" />
              <img src="./imgs/java-logo.png" alt="Java" height="128" width="160" />
              <img src="./imgs/mysql.png" alt="MySQL" height="120" width="200" />
              <img src="./imgs/UiUx.png" alt="UI/UX" height="120" width="200" />
              <img src="./imgs/spring.png" alt="Spring" height="120" width="120" />

              <img src="./imgs/html.png" alt="HTML" height="120" width="128" />
              <img src="./imgs/css.png" alt="CSS" height="120" width="128" />
              <img src="./imgs/javascript.png" alt="JS" height="120" width="128" />
              <img src="./imgs/java-logo.png" alt="Java" height="128" width="160" />
              <img src="./imgs/mysql.png" alt="MySQL" height="120" width="200" />
              <img src="./imgs/UiUx.png" alt="UI/UX" height="120" width="200" />
              <img src="./imgs/spring.png" alt="Spring" height="120" width="120" />

              <img src="./imgs/html.png" alt="HTML" height="120" width="128" />
              <img src="./imgs/css.png" alt="CSS" height="120" width="128" />
              <img src="./imgs/javascript.png" alt="JS" height="120" width="128" />
              <img src="./imgs/java-logo.png" alt="Java" height="128" width="160" />
              <img src="./imgs/mysql.png" alt="MySQL" height="120" width="200" />
              <img src="./imgs/UiUx.png" alt="UI/UX" height="120" width="200" />
              <img src="./imgs/spring.png" alt="Spring" height="120" width="120" />
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>

          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>UI/UX Design</li>
              </ul>

              <h3>Backend</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>

            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                I’m Prince Walker, a Computer Science graduate with a strong
                interest in software development, IT support, and
                problem-solving.
              </p>
              <p>
                I’m particularly interested in AI and cloud-based technologies
                and enjoy applying technology in meaningful, real-world ways.
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
							<img src="./imgs/sportmax.jpg" alt="Workplace 1 - Digicel Sports Max" width="100%" />
							<figcaption>
								  Digicel Sports Max, Kingston, Jamaica.
							</figcaption>
						</div>
					</figure>
					<h3>Digicel Sports Max</h3>
					<div>(May 2024 – Sep 2024)</div>
					<p>Monitored live broadcasts, managed on-air content, and troubleshooted technical issues in real time. Coordinated multiple event feeds and ensured seamless transmission under high-pressure conditions, developing strong multitasking and critical-thinking skills.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/seven11.png" alt="Workplace 2 - seven11" width="100%" />
							<figcaption>
								 Seven 11, Park City, Utah.
							</figcaption>
						</div>
					</figure>
					<h3>Retail Clerk – Seven Eleven, Park City </h3>
					<div>(May 2023 – Sep 2023)</div>
					<p>Provided friendly, efficient customer service, assisting with product inquiries and guiding shoppers to items. Handled sales transactions accurately on the POS system while maintaining a welcoming store environment. </p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/westgate.jpg" alt="Workplace 3 - Westgate Resort" width="100%" />
							<figcaption>
								Westgate Resort, Park City, Utah
							</figcaption>
						</div>
					</figure>
					<h3>Westgate Resort, Park City</h3>
					<div>(May 2022 – Sep 2022) | (May 2023 – Sep 2023)</div>
					<p>Maintained clean and comfortable guest rooms, performed deep cleaning, replenished supplies, and reported maintenance issues. Delivered excellent customer service to ensure guest satisfaction.</p>
				</article>
				
			</div>
		</section>
        <section id="projects" class="bento container">
			<h2>
				<small>
					Previous
				</small>
				 Projects
			</h2>
			<div className="bento-grid">
				<a href="#" class="bento-item">
					<img src="./imgs/UTech-Racing.jpg" alt="BGCCI" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/Vibing-With.jpg" alt="Churhview" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/drivingsim.jpeg" alt="Harley" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/AIImage.jpg" alt="Bunbury" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/utechlogo.jpg" alt="Running" width="100%" />
				</a>
				<a href="#" class="bento-item">
					<img src="./imgs/bento-7.jpg" alt="School" width="100%" />
				</a>
			</div>
		</section>
          <section class="chatbot container">
			<h2>
				<small>
					Talk to me
				</small>
				Chatbot
			</h2>
			<div class="chatbot-blue">
				<div class="chat-info">
					<h3>Azure AI Chatbot</h3>
					<p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
					<p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
					<a href="./Resume - Prince Walker - 1_10.pdf" class="button black">Download Resume</a>
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
						<input type="text" placeholder="Hey Prince, what skills are you best at?"/>
						<button class="button black">Send</button>
					</div>
				</div>
			</div>
		</section>
      </main>
    </>
  );
}
