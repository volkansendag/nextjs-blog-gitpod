import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Architech</p>
        <p>
          Sayfayı kaydettikten sonra <br />
          npm run build yapmak gerekiyor. <br />
          live reload yapamadım ama uygulamayı ayrı terminalde build edince  <br />
          html kısmı güncelleniyor <br />
        </p>
      </section>
    </Layout>
  )
}