import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Skills from '../components/skills'
import AboutMe from '../components/about-me'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.aboutMe}`}>
        <AboutMe/>
        </section>
        <Skills />
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.lightBackground}`}>
          <h2 className={utilStyles.headingLg}>Software Projects</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`}>
                  <a
                  className={utilStyles.aColorBlk}
                  >
              <li className={`${utilStyles.listItem} ${utilStyles.aColorBlk}`} key={id}>
                  {title}
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
              </a>
                </Link>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }

