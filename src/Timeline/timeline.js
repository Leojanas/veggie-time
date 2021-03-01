import {React, Component} from 'react';
import Nav from '../Nav/nav';
import TimelineDay from '../TimelineDay/timeline-day';
import apiService from '../Services/api-service';

class Timeline extends Component {
    constructor(props){
        super(props);
        this.state={fullView: false, events: []}
    }
    componentDidMount(){
        this.getEvents();
    }
    getEvents = () => {
        console.log('get events called')
        apiService.getEvents()
        .then(response => {
            console.log(response)

        })
    }
    toggleView = () => {
        this.state.fullView
            ?  this.setState({fullView: false})
            :  this.setState({fullView: true})
    }
    render() {
        let days = [];
        let viewButton = (<button type='button' onClick={this.toggleView}>Full View</button>);
        if(this.state.fullView){
            viewButton = (<button type='button' onClick={this.toggleView}>Day View</button>)
            for(let i=0; i<this.state.events.length; i++){
                days.push(<TimelineDay view={'full'} key={i} date={this.state.events[i].date} items={this.state.events[i].items}/>)
            }
        }else{
            if(this.state.events.length === 0){
                days = (<p>No events scheduled.</p>)
            }else{
                days = (<TimelineDay view={'day'} key={0} date={this.state.events[0].date} items={this.state.events[0].items} />)
            }
        }
        return (
            <div>
                <Nav />
                Timeline
                {viewButton}
                {days}
            </div>
        )
    }
}

export default Timeline;