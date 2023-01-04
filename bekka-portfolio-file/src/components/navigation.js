 export default function Navigation({setPage}) {
    return (
        <nav className="nav">
            <a href="/" className="site-name">Rebecca Nuñez</a>
            <ul>
                <li>
                    <a href="#" onClick={()=>setPage('about')}>About Me</a>
                </li>
                <li>
                    <a href="#" onClick={()=>setPage('portfolio')}>Portfolio</a>
                </li>
                <li>
                    <a href="#" onClick={()=>setPage('contact')}>Contact</a>
                </li>
                <li>
                    <a href="#" onClick={()=>setPage('resume')}>Resume</a>
                </li>
            </ul>
        </nav>
    )
}