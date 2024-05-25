const Footer = () => {
    const brandSitePath = 'https://www.intandem.co.in'
    return (
        <>
        <div className="bg-dark text-secondary px-4 py-5 text-center ">
            <div className="py-5 ">
                <h1 className="display-5 fw-bold text-white">Tandem</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">This site demonstates the working of a GPS data processing into a map visualization using react-leaflet and made as a part of intern hiring for Tandem at National Institute of Technology Karnataka, Surathkal</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href={brandSitePath}>
                        <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Visit Tandem</button>
                        </a>
                    </div>
                </div>
            </div>
            <p className=" text-secondary ">May-2024 Batch: 2025</p>
        </div>
        </>
    )
}
export default Footer