import styles from "./table.module.css";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../../pages/_app";

const Table = ({ data, withMap }) => {
  const { viewportInit, viewport, setViewport } = useAppContext();

  return (
    <section className={styles.table}>
      {data.map((e, i) => (
        <div key={i} className={styles.column}>
          <p className={styles.title}>{e.title}</p>
          <ul className={styles.list}>
            {e.items.map((item, i) => (
              <li key={item.name + i} className={styles.item}>
                {withMap ? (
                  <button
                    className={styles.button}
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
                  </button>
                ) : (
                  <ReactMarkdown source={item} />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Table;
