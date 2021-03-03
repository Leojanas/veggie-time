import {React, Component} from 'react';
import Nav from '../Nav/nav';
import AddEventForm from '../AddEventForm/add-event-form';
import TimelineDay from '../TimelineDay/timeline-day';
import apiService from '../Services/api-service';

class Timeline extends Component {
    constructor(props){
        super(props);
        this.state={fullView: false, events: {}, addEventPressed: false, dates: [], dateIndex: 0}
    }
    componentDidMount(){
        this.getEvents();
    }
    getEvents = () => {
        apiService.getEvents()
        .then(response => {
            if(response.status === 200){
                let events = {};
                let dates = [];
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
        let addEvent = (<button type='button' onClick={this.toggleAddEvent}>Add Event</button>)
        if(this.state.fullView){
            viewButton = (<button type='button' onClick={this.toggleView}>Day View</button>)
            for(const date in this.state.events){
                let dateObj = new Date(date)
                days.push(<TimelineDay view={'full'} key={date} date={dateObj} items={this.state.events[date]} getEvents={this.getEvents}/>)
            }
        }else{
            if(Object.keys(this.state.events).length === 0){
                days = (<p>No events scheduled.</p>)
            }else{
                let date = new Date(this.state.dates[this.state.dateIndex])
                days = (<TimelineDay 
                            view={'day'} 
                            key={0} 
                            date={date} 
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
                Timeline
                {viewButton}
                {days}
                {addEvent}
            </div>
        )
    }
}

export default Timeline;