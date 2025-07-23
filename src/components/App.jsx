import "./App.css";
import MainPage from "./MainPage/MainPage";
import MovieCardQuestion from "./MovieCardQuestion/MovieCardQuestion";
import MovieCardFace from "./MovieCardFace/MovieCardFace";

function App() {
    return (
        <>
            <div>
                <MainPage />
                <MovieCardQuestion />
                <MovieCardFace />
            </div>
        </>
    );
}

export default App;
