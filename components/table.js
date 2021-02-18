import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Wrap = styled.section`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  max-width: 64rem;
  margin: 0 auto;
  padding: 4rem;
  @media (max-width: 48rem) {
    width: 100%;
    max-width: 100%;
    height: fit-content;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 15rem;
  margin: 1rem;
  @media (max-width: 48rem) {
    flex: 1;
    min-width: 15rem;
    margin: 0;
  }
`;

const Title = styled.p`
  font-family: var(--font-heading);
  font-weight: 800;
  text-transform: uppercase;
`;

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  font-weight: 500;
  padding-left: 1em;
  text-indent: -1em;
  text-transform: capitalize;
  p {
    margin: 0;
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: inherit;
  cursor: pointer;
  font-family: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-transform: capitalize;

  &:hover {
    color: var(--color-primary);
  }
`;

const Table = ({ data, withMap, viewportInit, viewport, setViewport }) => {
  //const { viewportInit, viewport, setViewport } = useAppContext();
  //const [viewportInit, viewport, setViewport] = usePosition();
  return (
    <Wrap>
      {data.map((e, i) => (
        <Column key={i}>
          <Title>{e.title}</Title>
          <List>
            {e.items.map((item, i) => (
              <Item key={item.name + i}>
                {withMap ? (
                  <Button
                    onClick={() =>
                      setViewport({
                        lat:
                          item.coordinates.latitude === viewport.lat
                            ? viewportInit.lat
                            : item.coordinates.latitude,
                        lng:
                          item.coordinates.longitude === viewport.lng
                            ? viewportInit.lng
                            : item.coordinates.longitude,
                      })
                    }
                  >
                    {item.name}
                  </Button>
                ) : (
                  <ReactMarkdown source={item} />
                )}
              </Item>
            ))}
          </List>
        </Column>
      ))}
    </Wrap>
  );
};

export default Table;
