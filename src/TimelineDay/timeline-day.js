import {React, Component} from 'react';
import apiService from '../Services/api-service';
import './timeline-day.css';

class TimelineDay extends Component {
    handleMarkComplete = (event) => {
        apiService.patchEvent(event.target.id)
        .then((response) => {
            this.props.getEvents()
        })
    }
    render() {
        let titleArea = (<h3>{this.props.date.toDateString()}</h3>)
        if(this.props.view === 'day'){
            titleArea = (<div id='title-area'>
                <button type='button' onClick={this.props.handlePreviousDay}>Previous Day</button>
                <h3>{this.props.date.toDateString()}</h3>
                <button type='button' onClick={this.props.handleNextDay}>Next Day</button>
                </div>)
        }
        let items = [];
        for(let i=0; i<this.props.items.length; i++){
            let completed = (<div className='group'><button type='button' id={this.props.items[i].id} onClick={this.handleMarkComplete}>Mark Complete</button></div>);
            if(this.props.items[i].completed){
                completed = (<p>Task Complete</p>)
            }
            items.push(<li key={i} className='event'>
                <p className='center'><b>{this.props.items[i].event_type}</b></p>
                <p className='center'>{this.props.items[i].notes}</p>
                {completed}
            </li>)
        }
        return (
            <div className='day'>
                {titleArea}
                <div className='group'>
                    <ul>
                    {items}
                    </ul>
                </div>

            </div>
        )
    }
}

export default TimelineDay;