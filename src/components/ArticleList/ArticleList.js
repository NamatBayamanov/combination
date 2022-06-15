import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
  const [articleList, setArticleList] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://combination-309b1-default-rtdb.firebaseio.com/articles.json"
      )
      .then(({data}) => {
        const newArticle = Object.keys(data).map((id) => {
          return ({ id: id, ...data[id] });
        });
        setArticleList(newArticle);
      
      });
  }, []);

  let output = "Loading...";

  if (articleList !== null) {
    output = articleList.map((article) => {
      return (
        <li key={article.id}>
          <Link to={`/` + article.id}>
            {article.title}
          </Link>
           {/* {article.description} */}
        </li>
      );
    });
  }

  return (
    <ul>{output}</ul>
  );
}

export default ArticleList;
