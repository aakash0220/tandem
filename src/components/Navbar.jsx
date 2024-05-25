const Navbar = () => {
    const logoPath = 'https://www.intandem.co.in/assets/images/logo/logo.jpg'
    const brandSitePath = 'https://www.intandem.co.in'
    return (
        <>
        <header className="pb-3 mb-4 border-bottom container py-4">
            <a href={brandSitePath} className="d-flex align-items-center text-body-emphasis text-decoration-none text-black ">
                <img alt='tandem-logo' className=" pe-3" src={logoPath} style={{height:'50px'}}></img>
                <span className="fs-3">Tandem</span>
            </a>
        </header>
        </>
    )
}
export default Navbar