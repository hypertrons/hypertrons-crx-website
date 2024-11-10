import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  url: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'features.richMetrics.title',
    url: 'features.richMetrics.url',
    Svg: require('@site/static/img/rich_metrics.svg').default,
    description: 'features.richMetrics.desc',
  },
  {
    title: 'features.easyToUse.title',
    url: 'features.easyToUse.url',
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: 'features.easyToUse.desc',
  },
  {
    title: 'features.variousApplications.title',
    url: 'features.variousApplications.url',
    Svg: require('@site/static/img/various_applications.svg').default,
    description: 'features.variousApplications.desc',
  },
];

function Feature({ Svg, title, description, url }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={translate({ id: url })}>{translate({ id: title })}</a>
        </Heading>
        <p dangerouslySetInnerHTML={{ __html: translate({ id: description }) }} />
      </div>
    </div>
  );
}

export default (): JSX.Element => {
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
