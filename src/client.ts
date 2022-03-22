import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'ze25z9wn',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true
})

export default client