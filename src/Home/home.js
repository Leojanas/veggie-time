import {React, Component} from 'react';
import Nav from '../Nav/nav';
import './home.css';

class Home extends Component{
    
    render() {
        return(
        <div>
            <Nav />
            <h2>VeggieTime</h2>
            <h3>The Basics</h3>
            <p className='narrow'>The main function of Veggie Time is to help schedule all tasks related to growing a vegetable garden.
                You should begin on the Veggie List page, where you can use the dropdown menu to select all the veggies that you want
                to grow. 
            </p>
            <p className='narrow'>The app will then give more information on the vegetables, including spacing, germination time, time to harvest,
                and requirements for thinning.  Once you are ready to plant something, simply record the actual
                plant date for each type of vegetable, and the app will automatically schedule out estimated sprout dates, thinning intervals (as needed), 
                and an estimated date to begin harvsting.  Obviously, due to 
                differences in weather, soil, sunlight exposure, and other growing factors, all dates provided may have some
                small error, but should be close based on the average growth rates for each vegetable. 
            </p>
            <p className='narrow'>
                The Timeline page will then automatically fill in as you set your planting dates and reflect the estimated dates
                for sprouting, thinning, and harvsting.  You can also manually add events to the timeline to track things
                such as watering and weeding. Each event defaults to not being completed, and when you actually perform the task 
                you can easily mark it complete.
            </p>
        </div>
    )}
}

export default Home;