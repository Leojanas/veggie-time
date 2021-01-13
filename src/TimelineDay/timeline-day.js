import {React, Component} from 'react';

class TimelineDay extends Component {
    render() {
        let titleArea = (<h3>{this.props.date.toDateString()}</h3>)
        if(this.props.view === 'day'){
            titleArea = (<div>
                <button type='button'>Previous Day</button>
                <h3>{this.props.date.toDateString()}</h3>
                <button type='button'>Next Day</button>
                </div>)
        }
        let items = [];
        for(let i=0; i<this.props.items.length; i++){
            let completed = (<button type='button'>Mark Complete</button>);
            if(this.props.items[i].completed){
                completed = (<p>Task Complete</p>)
            }
            items.push(<li key={i}>
                <p>{this.props.items[i].type}</p>
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