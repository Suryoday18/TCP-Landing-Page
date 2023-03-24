import AboutUs from './AboutUs'
// import AuthDetails from './AuthDetails'
// import ImportantLinks from './ImportantLink'
import NewsAndHighlights from './NewsAndHighLight'
// import OurServices from "./OurServices"


const Card = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {/* <AuthDetails />
            <OurServices />
            <ImportantLinks /> */}
            <AboutUs />
            <NewsAndHighlights />
        </div>
    )
}

export default Card