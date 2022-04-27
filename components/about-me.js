import utilStyles from '../styles/utils.module.css'

export default function AboutMe() {
  return (
    <>
      <h2 className={`${utilStyles.headingLg} ${utilStyles.aboutTitle}`}>About Me
      </h2>
      <p className={utilStyles.whiteText}>I am a Full Stack Software Engineer that loves fishing and barbecueing! When I'm not coding, I love spending my time with family and the outdoors. I truly enjoy learning, taking on new projects, contributing to a team and solving problems. Above is a selfie of my son and I while driving our boat in search of big bass!
      </p>
    </>
  )
}