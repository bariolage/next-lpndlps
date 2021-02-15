import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../pages/_app";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: var(--header-height);
  margin: 0;
  padding: 5.5rem 4rem;

  @media (max-width: 48rem) {
    width: 100vw;
    height: 32rem;
    padding: 3rem 1rem;
  }
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0;
`;

const Item = styled.li`
  background-color: ${(props) =>
    props.isActive ? "var(--color-dark)" : "var(--color-white)"};
  color: ${(props) =>
    props.isActive ? "var(--color-white)" : "var(--color-dark)"};
  /* padding: 0 0.5rem; */
  list-style: none;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  font-weight: bold;

  a {
    display: block;
    width: 100%;
    padding: 0.25rem;
  }
  &:hover {
    color: var(--color-white);
    background-color: var(--color-dark);
  }
`;

const Navigation = (props) => {
  const { menuIsOpen, toggle } = useAppContext();
  const router = useRouter();
  return (
    <>
      <Nav>
        <List>
          {props.navigation &&
            props.navigation.map((item) => (
              <Item
                isActive={router.pathname === item.slug}
                key={`nav-${item.slug}`}
                onClick={() => toggle(false)}
              >
                <Link href={item.slug} passHref>
                  <a>
                    {router.pathname === item.slug
                      ? "/" + item.name
                      : item.name}
                  </a>
                </Link>
              </Item>
            ))}
        </List>
      </Nav>
    </>
  );
};

export default Navigation;
