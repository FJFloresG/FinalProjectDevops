import '../assets/imagerestaurant.png';
import '../styles/AboutUs.css';
import restaurant from '../assets/restaurant.png'; 

const redirecServices = () => {
    window.location.href = '/services';
}
export function AboutUs() {
    return (
        <section className="about-us">
            <div className="about-us-content">
                <div className="about-us-image">
                <img src={restaurant} alt="image" className="restaurant.-image" />
                </div>
                <h1>Welcome to our <span className="highlight">Aroma Gourmet </span></h1>
                <p>
                Our restaurant, opened on March 4, 2005, offers a unique blend of hospitality, 
                gastronomy, and event organization. With 30 rooms, 4 fully equipped halls, 
                and a restaurant that can accommodate 200 people, we provide an exceptional dining experience.
                We are proud to hold the International Quality Certification ISO 9001 since September 2011, 
                making us one of the two hotels in Bolivia with this prestigious certification. Our commitment
                to quality and excellence ensures that every guest enjoys their stay to the fullest.
                </p>
                <button className="find-more-button" onClick={redirecServices} >Find More</button>
            </div>
        </section>
    );
}



