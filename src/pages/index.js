import React from 'react';
import { Row, Col, Container, Jumbotron, Nav } from 'react-bootstrap';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          github
          linkedin
        }
      }
      allMarkdownRemark(filter: {fileAbsolutePath: {regex : "/greeting/"}}) {
        edges {
          node {
            html
          }
        }
      }
      desktop: file(relativePath: { eq: "mont-royal.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { email, github, linkedin } = data.site.siteMetadata;
  const greeting = data.allMarkdownRemark.edges[0].node.html;
  const imageData = data.desktop.childImageSharp.fluid;
  const footerNote = 'Mont Royal 2020/1/3';
  // const footerNote = <>Made with <FaHeart /></>

  return (
    <>
      <SEO title="Home" />
      <BackgroundImage Tag="section" fluid={imageData} className="bg-image">
        <Container fluid className="px-0 main full-height">
          <Row noGutters className="justify-content-sm-center">
            <Col sm="10" lg='8' xl='6'>
              <Jumbotron className="greeting">
                <div dangerouslySetInnerHTML={{ __html: greeting }} />
                <Nav horizontal className="align-items-sm-center">
                  <Nav.Item>
                    <Nav.Link href={`mailto:${email}`}>
                      <span className="link">Contact me</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link target="_blank" href={withPrefix('/resume.pdf')}>
                      <span className="link">See resume</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link target="_blank" href={github}>
                      <FaGithub size="2.5rem" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link target="_blank" href={linkedin}>
                      <FaLinkedin size="2.5rem" />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Jumbotron>
            </Col>
          </Row>
        </Container>

        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>{footerNote}</span>
              </footer>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </>
  );
};

export default IndexPage;
