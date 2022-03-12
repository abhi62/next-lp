import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Title....."
      subtitle="slogan..."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button> Get it now</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
