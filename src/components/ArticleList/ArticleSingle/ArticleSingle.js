import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleSingle() {
  const params = useParams();

  console.log(params);
  
  const { id } = useParams();

  // const  params = useParams();

  // const c = params.id;

  console.log(id)

  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://combination-309b1-default-rtdb.firebaseio.com/articles/${id}.json`
      )
      .then(({data}) => setArticle(data))
  }, []);



  let outputs = "Loading...";

  if(article !== null) {
    outputs = (
      <>
        <h1>
          {article.title}
        </h1>
        <p>
          {article.description}
        </p>

        <Link to={`/update/${id}`}>Update</Link>
        <br/>
        <Link to={`/delete/${id}`}>delete</Link>
      </>
    )
  }



  return (
    <div>
      {outputs}
    </div>
  );
}

export default ArticleSingle;
