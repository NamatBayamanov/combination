import axios from "axios";
function ArticleCreate() {
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // alert(`${formData.get("title")} ${formData.get("description")}`);
    axios.post("https://combination-309b1-default-rtdb.firebaseio.com/articles.json", Object.fromEntries(formData.entries()))
  }
  return ( 
    <>
      <form className="ArticleCreate" onSubmit={onSubmit}>
          <div>
            <label>
              title:
              <input type="text" name="title" required />
            </label>
          </div>
          <div>
            <label>
              description:
              <textarea name="description" required />
            </label>
          </div>
          <button>
            Submit
          </button>
      </form>
    </>
  );
}

export default ArticleCreate;