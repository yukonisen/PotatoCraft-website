import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
    <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <span
          className={styles.heroTitleTextHtml}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
          __html: '由<b>社区驱动</b>的</br>Minecraft </br>服务器。&nbsp'
          }}
          />
        </Heading>
        <div className={styles.indexCtas}>
          <Link className="button button--info" href="https://portal.curiousers.org/events/potato-s23.html">
          模组包下载
          </Link>
        </div>
        <p style={{color: 'white'}}>*截图来自: 2025-02-08 S22</p>
    </div>
    </div>
  );
}

function SeasonBanner() {
  return (
    <div className={styles.seasonBanner}>
      <div className={styles.seasonBannerTitle}>
        <Link
          to="/blog/s24-pre"
          className={styles.seasonBannerTitleText}>
          第 24 周目
        </Link>
        &nbsp;即将开启！
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.seasonBannerDescription}>
            <b> 现已开启 Mod 征集阶段，欢迎参与！ 
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServerAddressBanner() {
  return (
    <div
    className={clsx(styles.addressBanner, styles.addressBannerDark)}
    data-theme="dark">
    <img
          src="https://api.mcstatus.io/v2/widget/java/upt.curiousers.org?dark=true"
          style={{ height: '60%' }}
        />
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      description="PotatoCraft">
      <SeasonBanner />
      <main>
        <HeroBanner />
        <ServerAddressBanner />
      </main>
    </Layout>
  );
}