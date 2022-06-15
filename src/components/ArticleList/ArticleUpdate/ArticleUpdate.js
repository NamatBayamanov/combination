import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function ArticleUpdate() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [article, setArticle] = useState({
    title: "",
    description: ""
  });


  useEffect(() => {
    axios
      .get(
        `https://combination-309b1-default-rtdb.firebaseio.com/articles/${id}.json`
      )
      .then(({data}) => setArticle(data))
  }, []);


  const onSubmit = (event) => {
  
    event.preventDefault();

    const formData = new FormData(event.target);
    // alert(`${formData.get("title")} ${formData.get("description")}`);
    axios.put(`https://combination-309b1-default-rtdb.firebaseio.com/articles/${id}.json`, Object.fromEntries(formData.entries())).then(response => navigate(`/${id}`))
  }

  return ( 

    <div>
      <form className="ArticleCreate" onSubmit={onSubmit}>
          <div>
            <label>
              title:
              <input type="text" defaultValue={article.title} name="title" required />
            </label>
          </div>
          <div>
            <label>
              description:
              <textarea defaultValue={article.description} name="description" required />
            </label>
          </div>
          <button>
            Update
          </button>
      </form>
    </div>
  );
}

export default ArticleUpdate;