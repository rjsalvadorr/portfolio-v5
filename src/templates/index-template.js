// @flow strict
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import NavMenu from '../components/NavMenu';
import MainHeader from '../components/MainHeader';
import MainHero from '../components/MainHero';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { edges } = data.allMarkdownRemark;
  console.debug(data, pageContext, edges.map((edge) => edge.node));
  const imagePaths = [
    '/media/image-0.jpg',
    '/media/image-1.jpg',
  ]

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <section className="main-container">
        <NavMenu posts={edges} isIndex={true} />
        <main className="main-bontent">
          <MainHeader title="R. J. Salvador" blurb="Web Developer" isIndex />
          <MainHero paths={imagePaths} />
          <div className="index-bontent">
            <p>
              Hi, I'm a software developer with 6 years of experience in the web-dev industry. 
              Currently, I'm transitioning into a career in architecture technology, but 
              I'm generally available for part-time software work or small contracts.<br />
              Feel free to check out my <Link to="https://www.google.ca">resume</Link> for more 
              details. If you'd like to get in touch, drop me a line at <Link to="https://www.linkedin.com/in/rjsalvadorr/">LinkedIn</Link>
            </p>
            <h2>Skills</h2>
            <p>
              Lorem ut flank short ribs biltong duis pariatur ipsum tongue do culpa. Exercitation chicken tenderloin, pig ullamco kielbasa pariatur ball tip anim leberkas eu ground round. Beef ribs fugiat strip steak culpa nisi. Short loin brisket short ribs tongue, chicken consectetur aliqua tri-tip et hamburger jowl qui.
            </p>
            <h2>Interests & Hobbies</h2>
            <p>
              Shank consequat swine frankfurter, brisket shankle ball tip cillum velit et. Pastrami picanha excepteur, meatloaf aliqua turkey kielbasa biltong est swine consectetur. Sausage chuck voluptate shankle, eu nostrud picanha brisket strip steak dolore. Aute cupim filet mignon occaecat pork chop. Lorem ribeye reprehenderit ham hock tri-tip nostrud culpa shankle ea. In hamburger adipisicing fugiat enim excepteur nostrud elit sunt. Alcatra kevin ea, dolor burgdoggen ham hock buffalo tri-tip ut chicken dolore sausage.
            </p>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
            thumbnail
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
