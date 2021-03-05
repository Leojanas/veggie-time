import {React, Component} from 'react';
import {withRouter} from 'react-router-dom';
import Nav from '../Nav/nav';
import AddEventForm from '../AddEventForm/add-event-form';
import TimelineDay from '../TimelineDay/timeline-day';
import apiService from '../Services/api-service';
import tokenService from '../Services/token-service';
import eventService from '../Services/event-service';

class Timeline extends Component {
    constructor(props){
        super(props);
        this.state={fullView: false, events: {}, addEventPressed: false, dates: [], dateIndex: 0}
    }
    componentDidMount(){
        if(tokenService.getAuthToken() === null){
            this.props.history.push('/log-in')
        }else{
            this.getEvents();
        }
    }
    getEvents = () => {
        apiService.getGardenVeggies()
        .then(res => {
            if(res.status === 200){
                let events = {};
                let dates = [];
                for(const veggie of res.body){
                    if(veggie.plantDate){
                        let veggieDates = eventService.getEventDates(veggie);
                        let veggieEvents = eventService.generateEvents(veggieDates, veggie);
                        for(let i=0; i<veggieEvents.length; i++){
                            let date = veggieEvents[i].event_date;
                            if(events[date]){
                                events[date].push(veggieEvents[i])
                            }else{
                                events[date] = [veggieEvents[i]]
                                dates.push(date);
                            }
                        }
                    }
                }
                return {events, dates};
            }

        })
        .then(response => {
            let events = response.events;
            let dates = response.dates;
            apiService.getEvents()
            .then(response => {
                if(response.status === 200){
                    for(let i=0; i<response.body.length; i++){
                        let date = response.body[i].event_date.split('T')[0];
                        if(events[date]){
                            events[date].push(response.body[i])
                        }else{
                            events[date] = [response.body[i]]
                            dates.push(date);
                        }
                    }
                    dates.sort()
                    this.setState({events, dates})
                }
            })
        })

    }
    toggleView = () => {
        this.state.fullView
            ?  this.setState({fullView: false})
            :  this.setState({fullView: true})
    }
    toggleAddEvent = () => {
        this.setState({addEventPressed: true})
    }
    handleAddEvent = (event) => {
        apiService.addEvent(event)
        .then(() => {
            this.setState({addEventPressed: false})
            this.getEvents()
        })
    }
    handleNextDay = () => {
        if(this.state.dateIndex < (this.state.dates.length -1)){
            let index = this.state.dateIndex + 1;
            this.setState({dateIndex: index})
        }
    }
    handlePreviousDay = () => {
        if(this.state.dateIndex > 0){
            let index = this.state.dateIndex - 1;
            this.setState({dateIndex: index})
        }
    }
    render() {
        let days = [];
        let viewButton = (<button type='button' onClick={this.toggleView}>Full View</button>);
        let addEvent = (<div className='group bottom'><button type='button' onClick={this.toggleAddEvent}>Add Event</button></div>)
        if(this.state.fullView){
            viewButton = (<button type='button' onClick={this.toggleView}>Day View</button>)
            for(let i=0; i<this.state.dates.length; i++){
                let date = this.state.dates[i];
                let dateObj = new Date(date)
                dateObj.setMinutes(dateObj.getMinutes() + dateObj.getTimezoneOffset())
                days.push(<TimelineDay view={'full'} key={date} date={dateObj} items={this.state.events[date]} getEvents={this.getEvents}/>)
            }
        }else{
            if(Object.keys(this.state.events).length === 0){
                days = (<p>No events scheduled.</p>)
            }else{
                let dateObj = new Date(this.state.dates[this.state.dateIndex])
                dateObj.setMinutes(dateObj.getMinutes() + dateObj.getTimezoneOffset())
                days = (<TimelineDay 
                            view={'day'} 
                            key={0} 
                            date={dateObj} 
                            items={this.state.events[this.state.dates[this.state.dateIndex]]}
                            handleNextDay={this.handleNextDay}
                            handlePreviousDay={this.handlePreviousDay}
                            getEvents={this.getEvents}
                        />)
            }
        }
        if(this.state.addEventPressed){
            addEvent = <AddEventForm handleAddEvent={this.handleAddEvent}/>
        }
        return (
            <div>
                <Nav />
                <h2>Timeline</h2>
                <div id='viewButton'>
                {viewButton}
                </div>
                {days}
                {addEvent}
            </div>
        )
    }
}

export default withRouter(Timeline);