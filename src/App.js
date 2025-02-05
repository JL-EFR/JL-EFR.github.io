import "./App.css";
import { FaGithub } from "react-icons/fa6";

function Heading({ Text }) {
  return (
    <div className="Heading">
      <span className="TextBold TextBlack">{Text}</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Introduction">
          <img className="Portrait" src={"./face.jpg"} alt="My face" />
          <div className="Contract">
            <div className="Name TextBold">
              <span className="TextYellow">Jompop</span>
              <br />
              <span className="TextWhite">Likitratanaporn</span>
            </div>
            <p className="TextWhite TextLeft">
              <span className="TextYellow TextBold">Email:</span>{" "}
              jompop.likit@gmail.com
              <br />
              <span className="TextYellow TextBold">Phone:</span> 094-402-5500
            </p>
          </div>
        </div>
        <div className="IntroductionText TextLeft">
          <p className="TextWhite">
            Recent graduate in{" "}
            <span className="TextYellow TextBold">Computer Engineering</span>{" "}
            from{" "}
            <span className="TextYellow TextBold">Kasetsart University</span>,
            with strong proficiency in English and hands-on experience in
            developing React-based front-end applications and website. Familiar
            with back-end technologies such as Next.js and Laravel. Passionate
            about applying my skills in both{" "}
            <span className="TextYellow TextBold">front-end</span> and{" "}
            <span className="TextYellow TextBold">full-stack</span> development.
            Seeking an entry-level position where I can contribute to building
            projects and further enhance my technical expertise.
          </p>
        </div>
      </div>
      <div className="EduExp Container">
        <div className="Education LockWidth">
          <Heading Text={"Education"} />
          <div className="Detail">
            <div className="DetailHeader">
              <div className="LogoContainer">
                <img
                  className="Logo"
                  src={"./crulogo.png"}
                  alt="Chonradsadornumrung School's Logo"
                />
              </div>
              <p className="DetailText TextWhite">
                <span className="TextBold TextYellow">
                  High School and Middle School
                </span>
                <br />
                May 2014 - Feb 2020
                <br />
                Chonradsadornumrung School (Chonburi)
              </p>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="LogoContainer">
                <img
                  className="Logo"
                  src={"./kulogo.png"}
                  alt="Kasetsart University's Logo"
                />
              </div>
              <p className="DetailText TextWhite">
                <span className="TextBold TextYellow">
                  Bachelor’s degree of Computer Engineering
                </span>
                <br />
                Jun 2020 - Apr 2024
                <br />
                Kasetsart University Bangkhen
                <br />
                GPA: 2.95
              </p>
            </div>
          </div>
        </div>

        <div className="Experience LockWidth">
          <Heading Text={"Experience"} />
          <div className="Detail">
            <div className="DetailHeader">
              <div className="LogoContainer">
                <img
                  className="Logo"
                  src={"./tshlogo.png"}
                  alt="Thai Summit Harness PCL.'s Logo"
                />
              </div>
              <p className="DetailText">
                <span className="TextBold TextYellow">
                  Software Developer Internship
                </span>
                <br />
                <span className="TextWhite">Apr 2023 - Jun 2023</span>
                <br />
                <span className="TextWhite">Thai Summit Harness PCL.</span>
              </p>
            </div>
            <p className="DetailText TextWhite">
              <span className="TextYellow TextBold">Project description: </span>
              Completed an individual project during my internship. Designed the
              website to manage container logistics for moving and storing
              heavily reused containers.
              <br />
              <span className="TextYellow TextBold">Tools Used: </span>HTML,
              CSS, JavaScript, React, PHP, Laravel, MySQL
            </p>
            <ul className="DetailText TextWhite">
              <li>Use JWT token for user authentication.</li>
              <li>
                Used React as front-end client Side and Laravel as API back-end
                server.
              </li>
              <li>Integrate with the existing SQL Database.</li>
              <li>
                Designed for users to use QRcode Readers to identify and moving
                the containers.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Projects Container">
        <div className="BigLockWidth">
          <Heading Text={"Projects"} />
          <div className="Detail">
            <div className="ProjectsDetail">
              <p className="DetailText TextWhite">
                <span className="TextBold TextYellow TextBigger">
                  Pizza website
                </span>
                <br />
                Jan 2023
                <br />
                <a
                  href="https://github.com/JL-EFR/exceed-react-ex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="HoverButton">
                    <FaGithub /> github
                  </button>
                </a>
                <br />
                <span className="TextYellow TextBold">
                  Project description:{" "}
                </span>
                Completed an individual project that serves as instructional
                material for teaching the "React for Front-End Development"
                course at Exceed Camp 2023. Designed as the final assignment for
                the course, this project demonstrates practical implementation
                of key React concepts.
                <br />
                <span className="TextYellow TextBold">Tools Used: </span>
                HTML, CSS, JavaScript, React
              </p>
              <ul className="DetailText TextWhite">
                <li>Show all of the restaurant menu using map function.</li>
                <li>Search the menu using filter and include function.</li>
                <li>
                  Filter the menu to specific categories using filter function
                  by toggling the button.
                </li>
                <li>
                  By clicking the menu item all other menu will be hide and
                  replace by the detail of the selected menu.
                </li>
                <li>
                  The Database is mocked up by using JSON file and json-server.
                </li>
              </ul>
            </div>
          </div>
          <div className="Detail">
            <div className="ProjectsDetail">
              <p className="DetailText TextWhite">
                <span className="TextBold TextYellow TextBigger">
                  Autoyangyon App
                </span>
                <br />
                July 2023 - Jan 2024
                <br />
                <a
                  href="https://github.com/JL-EFR/Autoyangyon-front"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="HoverButton">
                    <FaGithub /> github
                  </button>
                </a>
                <br />
                <span className="TextYellow TextBold">
                  Project description:{" "}
                </span>
                Individual senior project that served as my last project during
                the time at the university. The application is an Android app
                developed using React Native, designed to support mechanics in
                managing garage operations efficiently. The app is intended
                exclusively for mechanics and is not available for customer use.
                <br />
                <span className="TextYellow TextBold">Tools Used: </span>
                HTML, CSS, JavaScript, React Native, TypeScript, mongoDB
              </p>
              <ul className="DetailText TextWhite">
                <li>
                  Login to the application and creating account using Google
                  OAuth.
                </li>
                <li>Use JWT token for user authentication.</li>
                <li>
                  Read the license plate using the camera and API from "AI FOR
                  THAI"'s Panyapradit-LPR.
                </li>
                <li>
                  Easily create QRcode Promptpay for the payment using
                  promptpay-qr.
                </li>
                <li>
                  Read and send massage from customer via Line chatbot using
                  webhook
                </li>
                <li>
                  Store and acquire information from the MongoDB internal server
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Skills">
        <div className="Fullheight">
          <Heading Text={"Skills"} />
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./HTML5_logo.png"}
                  alt="HTML's Logo"
                />
              </div>
              <span className="TextBold TextYellow">HTML 5</span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./CSS_Logo.png"}
                  alt="CSS's Logo"
                />
              </div>
              <span className="TextBold TextYellow">CSS 3</span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./JS.png"}
                  alt="JavaScript's Logo"
                />
              </div>
              <span className="TextBold TextYellow">JavaScript</span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./Typescript_logo.png"}
                  alt="TypeScript's Logo"
                />
              </div>
              <span className="TextBold TextYellow">TypeScript</span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./PHP-logo.png"}
                  alt="PHP's Logo"
                />
              </div>
              <span className="TextBold TextYellow">PHP</span>
            </div>
          </div>
        </div>
        <div className="Fullheight">
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./logo192.png"}
                  alt="react's Logo"
                />
              </div>
              <span className="TextBold TextYellow">
                React and React Native
              </span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./next-js-logo.png"}
                  alt="Next.JS's Logo"
                />
              </div>
              <span className="TextBold TextYellow">Next.JS</span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./Laravel.png"}
                  alt="Laravel's Logo"
                />
              </div>
              <span className="TextBold TextYellow">Laravel</span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./Sql_logo.png"}
                  alt="SQL's Logo"
                />
              </div>
              <span className="TextBold TextYellow">SQL</span>
            </div>
          </div>
          <div className="Detail">
            <div className="DetailHeader">
              <div className="SkillLogoContainer">
                <img
                  className="SkillLogo"
                  src={"./mongoDB.png"}
                  alt="mongoDB's Logo"
                />
              </div>
              <span className="TextBold TextYellow">mongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
