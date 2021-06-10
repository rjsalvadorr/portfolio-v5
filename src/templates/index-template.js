// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
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
              Bacon ipsum dolor amet strip steak irure cow dolore short ribs. Ut pork loin chuck, bresaola deserunt nisi dolore reprehenderit non rump nostrud do meatball shoulder ham. Sint id reprehenderit et dolore. Boudin qui do culpa. Adipisicing capicola short ribs, consectetur sint anim tri-tip ham. Voluptate doner et, in excepteur filet mignon porchetta shoulder. Doner picanha drumstick, corned beef pork chop cillum ullamco nulla landjaeger ribeye kielbasa enim qui pork reprehenderit.
            </p>
            <p>
              Lorem ut flank short ribs biltong duis pariatur ipsum tongue do culpa. Exercitation chicken tenderloin, pig ullamco kielbasa pariatur ball tip anim leberkas eu ground round. Beef ribs fugiat strip steak culpa nisi. Short loin brisket short ribs tongue, chicken consectetur aliqua tri-tip et hamburger jowl qui.
            </p>
            <p>
              Shank consequat swine frankfurter, brisket shankle ball tip cillum velit et. Pastrami picanha excepteur, meatloaf aliqua turkey kielbasa biltong est swine consectetur. Sausage chuck voluptate shankle, eu nostrud picanha brisket strip steak dolore. Aute cupim filet mignon occaecat pork chop. Lorem ribeye reprehenderit ham hock tri-tip nostrud culpa shankle ea. In hamburger adipisicing fugiat enim excepteur nostrud elit sunt. Alcatra kevin ea, dolor burgdoggen ham hock buffalo tri-tip ut chicken dolore sausage.
            </p>
            <p>
              Enim ball tip labore cow adipisicing aliqua, elit dolore bacon consectetur. Tongue bresaola doner boudin mollit nulla tenderloin jerky in. Officia jowl lorem frankfurter in turkey ipsum, nulla chuck sed quis consectetur fugiat. Shankle pork loin pork chop, meatball incididunt sed ullamco mollit in non. Mollit officia proident filet mignon, doner irure quis prosciutto fugiat consectetur beef ribs meatloaf turducken. Ullamco commodo shoulder cupim occaecat, leberkas bresaola mollit aliqua.
            </p>
            <p>
              Sunt ad aliqua ball tip venison ut exercitation porchetta rump pastrami tenderloin shank pariatur. Ut jowl incididunt venison duis, dolore shankle culpa id tempor prosciutto. Culpa incididunt occaecat corned beef ipsum landjaeger pork loin officia. Jowl tempor ex, ut esse kevin porchetta fatback shank cupidatat.
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
