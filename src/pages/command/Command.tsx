import CategoryProvider from "contexts/CategoryContext";
import Navbar from "pages/partials/navbar/Navbar";
import style from "pages/command/Command.module.css"


const Command = () => {

    return(
        <main className={style.commandMain}>
            {/* ⬇️ NAVBAR */}
            {/* 🔴 mais ne conduit pas au pages.. */}
            <div className={style.dFlex}>
                <CategoryProvider>
                    <Navbar />
                </CategoryProvider>

                <section>
                    <h1>WORK HERE DEAR!</h1>
                    <h1>WORK HERE DEAR!</h1>
                    <h1>WORK HERE DEAR!</h1>
                    <h1>WORK HERE DEAR!</h1>
                    <h1>WORK HERE DEAR!</h1>
                    <h1>WORK HERE DEAR!</h1>
                </section>

                <section>
                    <h1> I WANT TO WORK HERE DEAR!</h1>
                    <h1> I WANT TO WORK HERE DEAR!</h1>
                    <h1> I WANT TO WORK HERE DEAR!</h1>
                    <h1> I WANT TO WORK HERE DEAR!</h1>
                    <h1> I WANT TO WORK HERE DEAR!</h1>
                    <h1> I WANT TO WORK HERE DEAR!</h1>
                </section>
            </div>
        </main>

    )
}


export default Command;