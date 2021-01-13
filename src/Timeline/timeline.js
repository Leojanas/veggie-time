import {React, Component} from 'react';
import Nav from '../Nav/nav';
import TimelineDay from '../TimelineDay/timeline-day';

class Timeline extends Component {
    constructor(props){
        super(props);
        this.state={fullView: false}
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
            for(let i=0; i<this.props.events.length; i++){
                days.push(<TimelineDay view={'full'} key={i} date={this.props.events[i].date} items={this.props.events[i].items}/>)
            }
        }else{
            days = (<TimelineDay view={'day'} key={0} date={this.props.events[0].date} items={this.props.events[0].items} />)
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