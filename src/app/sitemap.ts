import { MetadataRoute } from 'next';
import { wikiContent } from '@/lib/wiki-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.racionalistas.com.br';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/wiki`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/forum`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  const wikiPages: MetadataRoute.Sitemap = wikiContent.map((model) => ({
    url: `${baseUrl}/wiki/${model.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...wikiPages];
}
