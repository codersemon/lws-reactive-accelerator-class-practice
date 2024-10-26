// dependencies
import { useRef, useState } from "react";

const CatsFriend = () => {
  const [cats, setCats] = useState(getCatList());
  const catsRef = useRef(null);

  // get map function
  const getMap = () => {
    if (!catsRef.current) {
      catsRef.current = new Map();
    }
    return catsRef.current;
  };

  // handle showing cats
  const handleShowIntoView = (id) => {
    const targetNode = catsRef.current.get(id);
    targetNode.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div style={{ width: "70%", margin: "50px auto" }}>
      <nav>
        <ul style={styles.navList}>
          {cats?.map((item) => (
            <li
              style={styles.button}
              key={item?.id}
              onClick={() => handleShowIntoView(item?.id)}
            >
              Cat {item?.id}
            </li>
          ))}
        </ul>
      </nav>
      <div style={styles.wrapper}>
        <ul style={styles.list}>
          {cats?.map((item) => (
            <li
              key={item?.id}
              style={styles.items}
              ref={(node) => {
                const map = getMap();

                if (node) {
                  map.set(item.id, node);
                } else {
                  map.delete(item.id);
                }
              }}
            >
              <img src={item?.img} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CatsFriend;

const getCatList = () => {
  const data = [];
  Array(10)
    .fill(0)
    .map((item, index) => {
      data.push({
        id: index,
        img: `https://loremflickr.com/420/240/cat?lock=${index}`,
      });
    });
  return data;
};

const styles = {
  wrapper: {
    overflow: "hidden",
  },
  list: {
    listStyle: "none",
    whiteSpace: "nowrap",
  },
  items: {
    paddingInline: "10px",
    display: "inline",
  },
  textCenter: {
    textAlign: "center",
  },
  button: {
    display: "inline",
    padding: "10px 20px",
    background: "#dcdcdc",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  navList: {
    listStyle: "none",
    textAlign: "center",
    marginBottom: "20px",
  },
};
