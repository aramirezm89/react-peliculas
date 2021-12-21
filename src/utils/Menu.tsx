export default function Menu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" >React Peliculas</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item"></li>
                        <a className="nav-link" href="/generos">
                            Generos
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}