import { Route, Routes } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate/ArticleCreate";
import ArticleDelete from "./components/ArticleList/ArticleDelete/ArticleDelete";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleSingle from "./components/ArticleList/ArticleSingle/ArticleSingle";
import ArticleUpdate from "./components/ArticleList/ArticleUpdate/ArticleUpdate";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<ArticleCreate/>} />
        <Route path="/" element={<ArticleList/>} />
        <Route path="/:id" element={<ArticleSingle/>} />
        <Route path="/update/:id" element={<ArticleUpdate />} />
        <Route path="/delete/:id" element={<ArticleDelete />} />
      </Routes>
    </div>
  );
}

export default App;
