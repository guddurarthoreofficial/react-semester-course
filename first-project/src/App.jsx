import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movies.json"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <>

    {/* ================ header components ============= */}

      <Header />

      {/* =================== rander the movies components ============= */}
      <Wrapper>
      {movies.map((data) => (
        <Movie
          key={data.imdbID}
          Title={data.Title}
          Poster={data.Poster}
          imdbID={data.imdbID}
          url={data.url}
        />
      ))}
      </Wrapper>

      {/*  ======================= footer components ================ */}
      <Footer/>



    </>
  );
}

export default App;
