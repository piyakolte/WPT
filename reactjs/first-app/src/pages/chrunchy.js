function App(){
    return(
        <>
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand"><img src={require("./assets/imgs/chrunchyroll.jpg")} height={20}></img></a>
                    <form class="d-flex">
                        <button type="button" class="btn btn-dark">Log in</button>
                        <button type="button" class="btn btn-outline-light">Explore</button>
                    </form>
                </div>
            </nav>
            <div className="bg-imaage">
                <img src={require("./assets/imgs/chrunchyroll.jpg")} height={"100%"}></img>
            </div>
        </header>
        </>
    )
}