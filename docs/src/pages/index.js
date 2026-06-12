import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';
import recentBlogPosts from '@site/src/data/recentPosts.json';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function MapPreview() {
  return (
    <section className={styles.mapPreview}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate>Worldwide TART Network</Translate>
        </h2>
        <p className={styles.sectionSubtitle}>
          <Translate>
            Explore the live map of TART telescopes deployed around the globe.
            Click to open the full interactive view.
          </Translate>
        </p>
        <a
          href="https://map.elec.ac.nz"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapLink}>
          <div className={styles.mapFrame}>
            <iframe
              src="https://map.elec.ac.nz"
              title="TART World Map"
              className={styles.mapIframe}
              loading="lazy"
            />
            <div className={styles.mapOverlay}>
              <span className={styles.mapOverlayText}>
                <Translate>Open Interactive Map</Translate> ↗
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}


function RecentBlogPosts() {
  const recentPosts = recentBlogPosts.slice(0, 3);
  return (
    <section className={styles.recentBlog}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate>Recent News</Translate>
        </h2>
        <div className="row">
          {recentPosts.map((post) => (
            <div key={post.id} className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.blogCard)}>
                <div className="card__body">
                  <small className={styles.blogDate}>
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </small>
                  <h3>
                    <Link to={post.permalink}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--outline button--primary button--block"
                    to={post.permalink}>
                    <Translate>Read More</Translate>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link className="button button--primary button--lg" to="/blog">
            <Translate>View All News</Translate> →
          </Link>
        </div>
      </div>
    </section>
  );
}


const docCategories = [
  {
    title: <Translate>Introduction</Translate>,
    description: (
      <Translate>
        New to TART? Start here to understand what the Transient Array Radio
        Telescope is all about.
      </Translate>
    ),
    to: '/docs/intro',
    icon: '📖',
  },
  {
    title: <Translate>TART Basics</Translate>,
    description: (
      <Translate>
        Learn the fundamentals: hardware, getting data, making images, and
        connecting with the community.
      </Translate>
    ),
    to: '/docs/category/tart---basics',
    icon: '🔭',
  },
  {
    title: <Translate>TART Installation</Translate>,
    description: (
      <Translate>
        Step-by-step guides to building, installing, and configuring your own
        TART telescope.
      </Translate>
    ),
    to: '/docs/category/tart---installation',
    icon: '🛠️',
  },
  {
    title: <Translate>Advanced Topics</Translate>,
    description: (
      <Translate>
        Dive deeper into calibration, correlators, measurement sets, and
        advanced imaging techniques.
      </Translate>
    ),
    to: '/docs/category/topics---advanced',
    icon: '⚡',
  },
];

function DocOverview() {
  return (
    <section className={styles.docOverview}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate>Documentation</Translate>
        </h2>
        <div className="row">
          {docCategories.map((cat, idx) => (
            <div key={idx} className="col col--3 margin-bottom--lg">
              <div className={clsx('card', styles.docCard)}>
                <div className="card__body text--center">
                  <span className={styles.docIcon}>{cat.icon}</span>
                  <h3>
                    <Link to={cat.to}>{cat.title}</Link>
                  </h3>
                  <p>{cat.description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--outline button--primary button--block"
                    to={cat.to}>
                    <Translate>Explore</Translate> →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Transient Array Radio Telescope Documentation">
      <HomepageHeader />
      <main>
        <MapPreview />
        <RecentBlogPosts />
        <DocOverview />
      </main>
    </Layout>
  );
}
