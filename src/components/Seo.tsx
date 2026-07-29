/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo: React.FC<SEOProps> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}: SEOProps) => {
  const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

// Types
type SEOProps = {
  description?: string
  lang?: string
  meta?: Meta
  title: string
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

type PropertyMetaObj = {
  property: string
  content: string
}

type NameMetaObj = {
  name: string
  content: string
}

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

// Queries
const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default Seo
