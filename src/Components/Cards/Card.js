import AuthDetails from './AuthDetails'
import ImportantLinks from './ImportantLink'
import OurServices from "./OurServices"


const Card = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <AuthDetails />
            <OurServices />
            <ImportantLinks />
        </div>
    )
}

export default Card