// import React, { forwardRef } from "react";
// import { StaticQuery, graphql } from "gatsby";

// import "./About.css";
// /* import aboutMdRef from '../resources/about.md';
// import workshopsMdRef from '../resources/workshops.md';
// import researchMdRef from '../resources/research.md'; */
// // import Button from '../../../Components/boilerplate/Button';

// const About = (props, ref) => {
//   return (
//     // Uses gatsby-transform-remark and graphql to query for .md files
//     <StaticQuery
//       query={graphql`
//         query {
//           allMarkdownRemark(sort: { fields: frontmatter___title }) {
//             nodes {
//               html
//             }
//           }
//         }
//       `} /*
// 				Tried to use regex here with
// 				filter: {fileAbsolutePath: {regex: "/\\/about\\//g"}}
// 				to only take from the src/markdown/about subfolder however, for some reason this limits the results to just 2.

// 				IF MORE MARKDOWN FILES ARE ADDED, THIS NEEDS TO BE ADDRESSED.
// 			*/
//       render={data => {
//         const { nodes } = data.allMarkdownRemark;
//         return (
//           <div ref={ref} className="sectionContainer">
//             {nodes.map(node => {
//               return (
//                 <div
//                   className="aboutSection"
//                   key={node.id}
//                   dangerouslySetInnerHTML={{ __html: node.html }}
//                 />
//               );
//             })}
//           </div>
//         );
//       }}
//     />
//   );
// };

// export default forwardRef(About);

import React, { forwardRef } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import "./About.css";

const Contact = (props, ref) => {
  return (
    <div className="sectionContainer">
      <div className="aboutSection">
        <h1> About IRIS </h1>
        <p>
          IRIS is a multidisciplinary organization that gives students the
          opportunity to develop an innovative robotic system in a peer-based
          learning environment. The club fosters systems thinking through the
          development, manufacturing, and operation of complex, space-oriented
          machines. IRIS actively shares its mission with the Champaign-Urbana
          community in order to help inspire the next generation of STEM
          students
        </p>
        <p>
          IRIS is an organization that gives students the opportunity to design
          and create innovative robots for{" "}
          <a href="https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html">
            NASA’s Lunabotics Competition
          </a>
          . We are also very involved with the community, reaching out to local
          schools to encourage STEM for the younger generation. This unique
          experience is rewarding for both our members and the students they
          mentor.
        </p>
      </div>
      <h1> Sponsors </h1>

      <h2> Galaxy Sponsors </h2>

      <center>
        <img
          src="https://iris.ae.illinois.edu/files/2018/09/AeroLogo.png"
          className="sponsorLogo"
        />
      </center>

      <p>
        Illinois Robotics in Space would like to thank our home department, the
        Department of Aerospace Engineering for their continued support.
      </p>
      <center>
        <img
          src="https://iris.ae.illinois.edu/files/2018/09/ISGC.png"
          className="sponsorLogo"
          alt="Illinois Space Grant Consortium"
        />

        <img
          src="https://iris.ae.illinois.edu/files/2015/10/SorfLogo_rztquf-300x145.jpg"
          alt="Funded by SORF"
        />
      </center>
      <p>
        We also would like to acknowledge the support of the Illinois Space
        Grant Consortium, and the Student Organization Registration Fund.
      </p>
      <h2> Star Sponsors </h2>

      <p>Coming soon.</p>

      <h2> Planet Sponsors </h2>

      <p>Coming soon.</p>

      <h2>Lunar Sponsors</h2>
      <center>
        <img
          src="https://iris.ae.illinois.edu/files/2018/12/LS-Horizontal-300x75.png"
          className="sponsorLogo"
        />

        <img
          src="https://iris.ae.illinois.edu/files/2019/04/fmwlogo.png"
          className="sponsorLogo"
        />
      </center>
      <p> ...You? </p>
      <p>
        We have the talent. We have the passion. We need help from generous
        companies willing to support Illinois Robotics in Space as we build the
        best in autonomous and innovative mining robots. Interested in
        supporting our team? We’d love to talk to you! The best way to learn
        everything to know about sponsorship is through our{" "}
        <a href="https://iris.ae.illinois.edu/files/2018/10/IRIS-Sponsorship-Packet-2018-2019-10_16_18.pdf">
          Sponsorship Packet
        </a>
        . Take a look, and contact us at{" "}
        <a href="mailto:iris.uiuc@gmail.com">iris.uiuc@gmail.com</a> if you have
        any questions!
      </p>
    </div>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default forwardRef(Contact);
