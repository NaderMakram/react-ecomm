import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            n turpis viverra feugiat ut sit amet elit. Donec placerat vel urna
            eget rhoncus. Nulla scelerisque nunc eget dolor rutrum tincidunt.
            Phasellus iaculis et lacus et vulputate. Integer maximus, odio sit
            amet vulputate fringilla, tortor metus convallis libero, a dignissim
            sapien quam eget neque. Ut vitae libero nec magna sollicitudin
            blandit. Nam ornare iaculis dui ut euismod. Suspendisse varius, orci
            interdum gravida aliquam, lectus dui fermentum orci, eleifend
            ullamcorper velit risus vitae ante. Donec scelerisque sapien et
            nulla facilisis rutrum elementum vel nulla. Aliquam arcu lacus,
            maximus non enim ut, convallis porttitor turpis. Suspendiss
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
