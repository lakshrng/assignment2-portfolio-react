import Skills from '../components/Skills.jsx';

const skillList = ['HTML', 'CSS', 'Python', 'Node/Express', 'C++', 'Java'];

const achievementList = [
  'IIT Ropar Hackathon Winner',
  'CSE Football Captain, NITW',
  'CSES Joint Secretary',
];

export default function About() {
  return (
    <section className="about-page page-shell">
      <div className="page-header">
        <p className="eyebrow">About Me</p>
        <h1>Full Stack Developer & Designer</h1>
      </div>

      <div className="about-grid">
        <div className="profile-card">
          <img
            src="/images/laksh_photo_ropar.jpg"
            alt="Laksh Rangnekar"
            className="profile-image"
          />
        </div>

        <div className="about-copy">
          <p>
            I am Laksh Rangnekar, a 3rd year Computer Science Engineering student at NIT
            Warangal. I am currently preparing for an incoming Salesforce internship, and my
            journey has been shaped by a mix of software engineering, creative design, and
            campus leadership.
          </p>
          <p>
            I grew up in Pune and recently moved to Indore to continue my academic and
            professional growth. Outside work and study, I am a football player with school
            and district-level experience, and I also enjoy trying new cuisines and exploring
            different food cultures.
          </p>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h2>Skills</h2>
          <Skills items={skillList} />
        </div>

        <div className="info-card">
          <h2>Achievements</h2>
          <ul className="achievement-list">
            {achievementList.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
