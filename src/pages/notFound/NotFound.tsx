import Footer from "pages/partials/footer/Footer";
import Header from "pages/partials/header/Header";
import { Link } from "react-router-dom";
import style from "./NotFound.module.css"


const NotFound = () => {
    return (
        <>
            <Link to={"/"}>
                <section className={style.anim}>
                    {/* background img to anim with mediaQueries */}
                </section>
            </Link>
        </>

    )
}

export default NotFound;