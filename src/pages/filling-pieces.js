import React from "react"
import Helmet from "react-helmet"
import Figure from "../components/Figure"
import { Body } from "../components/Body"
import { Header } from "../components/Menubar"
import { Divider } from "../components/Divider"
import Intro from "../components/Intro"
import Outro from "../components/Outro"
import { Link, RouterLink } from "../components/Link"
import { Paragraph } from "../components/Paragraph"
import { Heading, FauxHeading } from "../components/Heading"

const FpPage = props => (
  <div>
    <Helmet
      title={`${props.data.site.siteMetadata.author}, ${
        props.data.fillingPiecesPageJson.title
      }`}
    />

    <Header
      author={props.data.site.siteMetadata.author}
      title={props.data.fillingPiecesPageJson.title}
    />

    <Intro bgColor={props.data.fillingPiecesPageJson.coverBgColor}>
      <img
        src={props.data.fillingPiecesPageJson.coverImage.publicURL}
        alt="Filling Pieces Logo"
        style={{ verticalAlign: "middle", width: "100%" }}
      />
    </Intro>

    <Body>
      <Heading inBody>Filling Pieces</Heading>

      <Paragraph>
        During my tenure at Bolden one of my bigger projects was the site of
        Amsterdam-based footwear label <em>Filling Pieces</em>. They started out
        selling their products online using <em>OpenCart</em> as a platform, and
        even though OpenCart is a very capable tool, it kinda couldn&rsquo;t
        keep up with the pace the company was growing, which was especially true
        during the peak of an ongoing sale.
      </Paragraph>

      <Paragraph>
        In order to ensure smoother sale-ing (Get it? SALE-ing!), we went
        through the process of porting everything to <em>Shopify</em>. Shopify
        itself comes with its own set of limitations, but once you learn how to
        embrace them instead of finding workarounds you&rsquo;ll end up a happy
        camper. The huge plus of Shopify imho is that it&rsquo;s amazingly
        stable and really easy to manage.
      </Paragraph>

      <Paragraph>
        Unfortunately the design of the site didn&rsquo;t undergo a similar
        evolution and remained basically untouched. As a personal challenge –
        and to satisfy my inner designer{" "}
        <span role="img" aria-label="Satisfied face emoji">
          😌
        </span>{" "}
        – I translated some ideas into a concept of how I would build a classic,
        yet adaptable design.
      </Paragraph>

      <Heading inBody secondary>
        A re-designed approach
      </Heading>

      <Paragraph>
        Filling Pieces releases new products twice a year and because every
        release comes in a new theme it would usually require a few small
        updates in various places (&ldquo;Guys, for the drop of spring-summer
        2017, is it possible we add an extra section that contains a product
        image with clickable hot-spots and have the menu-drawer
        dark-blue?&rdquo;). With the current site not really designed to be
        themeable, this involved lots of fiddling and patchwork.
      </Paragraph>

      <Paragraph>
        The concept I've been working on is based on a themeable frontpage plus
        one interchangeable accent colour for the whole website. This way, the
        first impression of a visitor can be completely different with every
        release in whatever design the new theme requires, with the rest of the
        site basically remaining unaffected. This would convey the sense of
        something <em>new</em> twice a year, while keeping the same familiar
        shopping experience from the product overview to the checkout. View the
        prototype in your browser:
      </Paragraph>

      <Paragraph>
        <Link href="https://fp-597cff.netlify.com" target="_blank">
          https://fp-597cff.netlify.com
        </Link>
      </Paragraph>

      <Figure
        inBody
        caption="The frontpage with a generic theme for the purpose of this demo. The idea is that this page can be themed differently with every new product release."
        bgColor="#111"
        padTop
        padRight
        padLeft
        sizes={
          props.data.fillingPiecesPageJson.images.home.childImageSharp.sizes
        }
        sizesString="(min-width: 60em) 80vw, 100vw"
      />

      <Figure
        inBody
        caption="The product overview page with the apparent underlying three-column-grid, which allows for plenty of interesting compositions."
        bgColor="#111"
        padTop
        padRight
        padLeft
        sizes={
          props.data.fillingPiecesPageJson.images.collection.childImageSharp
            .sizes
        }
        sizesString="(min-width: 60em) 80vw, 100vw"
      />

      <Figure
        inBody
        caption="The product page with detail imagery and a purchaser component that sticks to the right third of the page."
        bgColor="#111"
        padTop
        padRight
        padLeft
        sizes={
          props.data.fillingPiecesPageJson.images.product.childImageSharp.sizes
        }
        sizesString="(min-width: 60em) 80vw, 100vw"
      />

      <Figure
        inBody
        caption="Slide-out cart component"
        bgColor="#111"
        padTop
        padRight
        padLeft
        sizes={
          props.data.fillingPiecesPageJson.images.cart.childImageSharp.sizes
        }
        sizesString="(min-width: 60em) 80vw, 100vw"
      />

      <Paragraph>
        I demoed this prototype to Filling Pieces but unfortunately they thought
        it was &ldquo;too big of a change&rdquo;.
      </Paragraph>

      <Heading inBody secondary>
        Closing thoughts
      </Heading>

      <Paragraph>
        This prototype has been built as a static site using{" "}
        <Link href="https://www.gatsbyjs.org/">GatsbyJS</Link> and Redux to
        persist the cart state throughout the whole site, which is definitely
        over-engineered for this purpose, but I&rsquo;m wondering whether this
        approach would work in production too? A server-rendered{" "}
        <Link href="https://github.com/zeit/next.js/">Next.js</Link> front-end
        instead of Liquid templates (&ldquo;elsif&rdquo;, ew) communicating with
        a GraphQL server wrapped around the Shopify API for products and a
        headless Craft CMS installation for all other content…{" "}
        <strong>Wipes drool off face</strong>{" "}
        <span role="img" aria-label="Drool face emoji">
          🤤
        </span>
      </Paragraph>

      <Divider />
    </Body>

    <Outro>
      <FauxHeading>
        Thanks for your interest in my work! Feeling some more? Check out this{" "}
        <RouterLink to="/vfmk">Craft Commerce site</RouterLink> I&rsquo;ve
        built.
      </FauxHeading>
    </Outro>
  </div>
)

export default FpPage

export const query = graphql`
  query FillingPiecesPageQuery {
    fillingPiecesPageJson {
      title
      coverImage {
        publicURL
      }
      coverBgColor
      images {
        home {
          childImageSharp {
            sizes(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
        collection {
          childImageSharp {
            sizes(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
        product {
          childImageSharp {
            sizes(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
        cart {
          childImageSharp {
            sizes(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`