import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ArticleDelete() {

  const { id } = useParams();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    axios.delete(`https://combination-309b1-default-rtdb.firebaseio.com/articles/${id}.json`).then(response => navigate("/"))
  }

  return ( 

    <div>
      <form className="ArticleCreate" onSubmit={onSubmit}>
        <h2>
          Are you sure?
        </h2>
          <button>
            Yes
          </button>
      </form>
    </div>
  );
}

export default ArticleDelete;