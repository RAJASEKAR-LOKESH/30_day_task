import Navbar from "./Navbar"

function Layout({children}){
    return(
        <>
        <Navbar/>
        <main style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/winter-light-blue-gradient-vector-background_53876-126054.jpg?auto=format&fit=crop&w=315&h=220')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex', 
                flexDirection: 'column', 
            }}>
                {children}
            </main>
        </>
    )
}
export default Layout