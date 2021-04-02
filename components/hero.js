import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrap = styled.section`
  margin-left: 50vw;
  width: 50vw;
  height: var(--header-height);
  color: var(--color-white);
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem;
  a {
    padding: 0 0.25rem;
    background-color: var(--color-white);
    color: var(--color-primary);
  }
  @media (max-width: 48rem) {
    margin: 0;
    margin-top: var(--header-height);
    width: 100vw;
    height: fit-content;
    padding: 3rem 1rem;
  }
`;

const H2 = styled(motion.h2)`
  margin: 0;
  padding: 3rem 0;
  font-size: 3rem;
  line-height: 2.5rem;
  @media (max-width: 48rem) {
    margin: 0;
    padding: 0;
    padding-bottom: 3rem;
    font-size: 3rem;
    line-height: 2.5rem;
  }
`;

const MessageWrap = styled(motion.div)``;
const Message = styled(ReactMarkdown)`
  margin: 0;
  a:hover {
    color: var(--color-dark);
  }
`;

const Hero = ({ title, message }) => {
  return (
    <Wrap>
      <H2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </H2>
      <MessageWrap
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Message source={message} />
      </MessageWrap>
    </Wrap>
  );
};

export default Hero;
