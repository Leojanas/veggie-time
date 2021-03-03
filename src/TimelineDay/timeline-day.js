import {React, Component} from 'react';
import apiService from '../Services/api-service';

class TimelineDay extends Component {
    handleMarkComplete = (event) => {
        apiService.patchEvent(event.target.id)
        .then((response) => {
            this.props.getEvents()
        })
    }
    render() {
        console.log(this.props)
        let titleArea = (<h3>{this.props.date.toDateString()}</h3>)
        if(this.props.view === 'day'){
            titleArea = (<div>
                <button type='button' onClick={this.props.handlePreviousDay}>Previous Day</button>
                <h3>{this.props.date.toDateString()}</h3>
                <button type='button' onClick={this.props.handleNextDay}>Next Day</button>
                </div>)
        }
        let items = [];
        for(let i=0; i<this.props.items.length; i++){
            let completed = (<button type='button' id={this.props.items[i].id} onClick={this.handleMarkComplete}>Mark Complete</button>);
            if(this.props.items[i].completed){
                completed = (<p>Task Complete</p>)
            }
            items.push(<li key={i}>
                <p>{this.props.items[i].event_type}</p>
                <p>{this.props.items[i].notes}</p>
                {completed}
            </li>)
        }
        return (
            <div>
                {titleArea}
                <div>
                    <h3>Tasks Today</h3>
                    <ul>
                    {items}
                    </ul>
                </div>

            </div>
        )
    }
}

export default TimelineDay;