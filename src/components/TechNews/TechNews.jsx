import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import "./TechNews.scss";

export const TechNews = () => {
  const url = "http://localhost:8080/api/technews";

  const [techNews, setTechNews] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setTechNews(response.data);
    });
  }, [url]);

  return (
    <>
      {/* <h2 className="products-title">Noticias</h2> */}
      <div className="news-container">
        {techNews.map((technew, i) => {
          return (
            <div className="news-card" key={i}>
              <Card
                className="news-card-component"
                title={technew.title}
                style={{
                  width: "22em",
                  borderRadius: "15px",
                  margin: "0 auto",
                }}
                header={
                  <img
                    style={{ height: "230px", borderRadius: "15px" }}
                    alt="Card"
                    src={technew.img}
                    onError={(e) => (e.target.src = "./erroricon")}
                  />
                }
              >
                <div>
                  <Panel
                    className="panel"
                    style={{ lineHeight: "1.5" }}
                    header="Noticia"
                    toggleable
                    collapsed
                  >
                    <p className="techtext">{technew.container}</p>
                  </Panel>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
