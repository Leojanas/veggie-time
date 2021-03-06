import {React, Component} from 'react';
import './add-event-form.css';

class AddEventForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            event_type: 'planting',
            event_date: null,
            completed: false,
            notes: '',
            error: null
        }
    }
    handleChangeEventType = (event) => {
        let event_type = event.target.value;
        this.setState({event_type})
    }
    handleChangeDate = (event) => {
        let event_date = new Date(event.target.value);
        this.setState({event_date})
    }
    handleChangeCompleted = (event) => {
        let completed = event.target.value;
        this.setState({completed})
    }
    handleChangeNotes = (event) => {
        this.setState({notes: event.target.value})
    }
    handleAddEvent = () => {
        let event = this.state;
        if(!event.event_type || !event.event_date || !event.notes){
            this.setState({error: (<p>Must fill out all fields before submitting.</p>)})
        }else{
            this.props.handleAddEvent(event);
            this.setState({
                event_type: 'planting',
                event_date: null,
                completed: false,
                notes: ''
            })
        }
    }
    render(){
        return (
            <div className='form'>
            <form>
                <label htmlFor='event_type'>Event Type: </label>
                <select id='event_type' onChange={this.handleChangeEventType}>
                    <option value='planting'>Planting</option>
                    <option value='thinning'>Thinning</option>
                    <option value='watering'>Watering</option>
                    <option value='weeding'>Weeding</option>
                    <option value='harvesting'>Harvesting</option>
                </select>
                <br />
                <label htmlFor='completed'>Completed:</label>
                <select id='completed' onChange={this.handleChangeCompleted}>  
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>
                <br />
                <label htmlFor='notes'>Notes: </label>
                <input id='notes' value={this.state.notes} onChange={this.handleChangeNotes}/>
                <br />
                <label htmlFor='event_date'>Event Date:</label>
                <input id='event_date' type='date' onChange={this.handleChangeDate} />
                <br />
                {this.state.error}
                <br />
                <div className='group bottom'>
                    <button type='button' onClick={this.handleAddEvent}>Add Event</button>
                    <button type='button' onClick={this.props.toggleAddEvent}>Cancel</button>
                </div>

            </form>
            </div>
        )
    }
}

export default AddEventForm;