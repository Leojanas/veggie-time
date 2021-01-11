import {React, Component} from 'react';
import Nav from '../Nav/nav';

class Home extends Component{
    
    render() {
        return(
        <div>
            <Nav />
            <h2>VeggieTime</h2>
            <p>Heres how it works</p>
            <p>The main function of Veggie Time is to help schedule all tasks related to growing a vegetable garden.
                You should begin by selecting all the vegetables you want to grow from the dropdown menu, or entering them
                manually if they are not yet in the system.  The app will then give you the recommended month to plant each
                vegetable.  It will also give more information on the vegetables, including germination time, time to harvest,
                and requirements for watering and thinning.  Once you are ready to plant something, simply record the actual
                plant date for each type of vegetable, and the app will automatically schedule out estimated sprout dates,
                watering and thinning intervals (as needed), and an estimated date to begin harvsting.  Obviously, due to 
                differences in weather, soil, sunlight exposure, and other growing factors, all dates provided may have some
                small error, but should be close based on the average growth rates for each vegetable. 
            </p>
        </div>
    )}
}

export default Home;