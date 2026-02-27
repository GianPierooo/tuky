import { Metadata } from 'next'
import { SITE_NAME, SITE_DESCRIPTION } from './constants'

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '',
}: {
  title?: string
  description?: string
  path?: string
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const url = `https://tuky.pe${path}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'es_PE',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}

