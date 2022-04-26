import utilStyles from '../styles/utils.module.css'

export default function Skills() {
  return (
    <>
      <h2 className={utilStyles.headingLg}>Skills
      </h2>
      <img
        priority
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        className={utilStyles.borderCircle}
        height={40}
        width={108}
      />
      <img
        priority
        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
        className={utilStyles.borderCircle}
        height={40}
        width={108}
      />
      <img
        priority
        src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
        className={utilStyles.borderCircle}
        height={40}
        width={108}
      />
    </>
  )
}