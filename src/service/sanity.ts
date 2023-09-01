import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'bopmzxdj',
  dataset: 'production',
  apiVersion: '2023-09-02',
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,
});
