import { OrganizationSchema } from './organization.schema';

export function createServiceSchema(data: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      OrganizationSchema,
      {
        '@type': 'WebPage',
        '@id': `${data.url}#webpage`,
        url: data.url,
        name: data.title,
        description: data.description,
        inLanguage: 'pl-PL',
        about: {
          '@id': 'https://fora-poligrafia.pl/#organization',
        },
        ...(data.image
          ? {
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: data.image,
              },
            }
          : {}),
      },
      {
        '@type': 'Service',
        name: data.title,
        description: data.description,
        provider: {
          '@id': 'Organization',
          name: 'FORA Poligrafia',
          url: 'https://fora-poligrafia.pl/',
        },
      },
    ],
  };
}

export function createPageSchema(data: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      OrganizationSchema,
      {
        '@type': 'WebPage',
        '@id': `${data.url}#webpage`,
        url: data.url,
        name: data.title,
        description: data.description,
        inLanguage: 'pl-PL',
        about: {
          '@id': 'https://fora-poligrafia.pl/#organization',
        },
        ...(data.image
          ? {
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: data.image,
              },
            }
          : {}),
      },
    ],
  };
}

export function createItemPortfolioSchema(data: {
  title: string;
  description: string;
  url: string;
  image?: string;
  categoryName?: string;
  categoryUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      OrganizationSchema,
      {
        '@type': 'WebPage',
        '@id': `${data.url}#webpage`,
        url: data.url,
        name: data.title,
        description: data.description,
        inLanguage: 'pl-PL',
        about: {
          '@id': 'https://fora-poligrafia.pl/#organization',
        },
        ...(data.image
          ? {
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: data.image,
              },
            }
          : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Strona główna',
            item: {
              '@id': 'https://fora-poligrafia.pl/',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: {
              '@id': 'https://fora-poligrafia.pl/portfolio',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.categoryName,
            item: data.categoryUrl,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: data.title,
            item: data.url,
          },
        ],
      },
    ],
  };
}
