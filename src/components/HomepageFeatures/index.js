import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Purpose of Site',
    Img: require('@site/static/img/bejeweled.jpeg').default,
    description: (
      <>
        This site is going to be useful for students to find material presented, links,
        or assignments in order to help them with their journey.  That way if a student
        is stuck on an assignment or coding project they have a place to help them.
      </>
    ),
  },
  {
    title: 'HTML5 and JavaScript',
    Img: require('@site/static/img/pacman.jpeg').default,
    description: (
      <>
        This course is designed to be around JavaScript as a language.  The lessons
        not only teach you how to code, but think like a programmer.
      </>
    ),
  },
  {
    title: 'Get Started',
    Img: require('@site/static/img/mario.jpeg').default,
    description: (
      <>
        Click on the material in the upper top left corner for Lessons of what 
        was shared during the week.  There may be some blog articles to keep your
        knowledge and ideas fresh.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
