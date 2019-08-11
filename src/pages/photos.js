import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Intro from '../components/Intro'
import Figure from '../components/Figure'
import { Heading } from '../components/Heading'
import { Grid } from '../components/Grid'
import { GridItem } from '../components/GridItem'
import { getSize, createMarkup } from '../utils'
import useItemScaling from '../hooks/use-item-scaling'

function PhotosPage(props) {
  const { data } = props
  const { author } = data.site.siteMetadata
  const { intro, tagline, contentBlocks } = data.contentfulPhotos
  let count = 0
  const gridContainer = React.useRef()
  useItemScaling(gridContainer)

  return (
    <div>
      <Helmet title={`${author}, ${tagline}`} />

      <Intro>
        <Heading
          dangerouslySetInnerHTML={createMarkup(intro.childMarkdownRemark.html)}
        />
      </Intro>

      <Grid ref={gridContainer}>
        {contentBlocks.reverse().map((block, i) => {
          count < 6 ? count++ : (count = 1)
          const { id, title, image } = block

          return (
            <GridItem key={id} size={getSize(count)}>
              {image && <Figure fluid={image.fluid} caption={title} />}
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )
}

export default PhotosPage

export const query = graphql`
  query PhotosQuery {
    site {
      siteMetadata {
        author
      }
    }
    contentfulPhotos {
      tagline
      intro {
        childMarkdownRemark {
          html
        }
      }
      contentBlocks {
        __typename
        ... on ContentfulBlockImage {
          id
          title
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
