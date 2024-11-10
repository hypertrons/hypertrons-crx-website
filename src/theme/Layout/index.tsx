import React from 'react';
import Layout from '@theme-original/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

export default function LayoutWrapper(props: any): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  return (
    <>
      {customFields?.pullNumber &&
        (
          <div>
            <div className="fixed-banner"
              dangerouslySetInnerHTML={{
                __html: translate({ id: 'homepage.pullPreviewWarning' }, { pullNumber: customFields.pullNumber ?? 0 })
              }}
            />
            <div className="banner-placeholder"></div>
          </div>
        )
      }
      <Layout {...props} />
    </>
  );
}
