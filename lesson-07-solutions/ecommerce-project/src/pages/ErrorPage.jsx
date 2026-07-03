import { Header } from "../components/Header";
import "./ErrorPage.css";

export function ErrorPage({ cart }) {
    return (
        <>
        <Header cart={cart}/>
        <div className="notfound">
            <div className="stars"></div>

            <div className="content">
                <span className="error-code">404</span>

                <h1>Oops! Page Not Found</h1>

                <p>
                    The page you are looking for does not exist or may have been moved.
                </p>

           
            </div>
        </div>
        </>
    );
}