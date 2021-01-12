import {React, Component} from 'react';
import SetDate from '../SetDate/set-date';
import './list-item.css';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {showPopUp: false, plantDate: null}
    }
    setPlantDate = () => {
        this.setState({showPopUp: true})
    }
    togglePopUp = () => {
        this.setState({showPopUp: false})
        this.props.setPlantDate(this.state.plantDate ,this.props.veggie.name)
    }
    handleChangeDate = (event) => {
        let date = new Date(event.target.value);
        date.setHours(date.getHours() + date.getTimezoneOffset()/60)
        this.setState({plantDate: date})
    }
    render() {
        let dates;
        if(this.props.veggie.plantDate){
            let germDate = new Date(this.props.veggie.plantDate);
            germDate.setDate(germDate.getDate() + this.props.veggie.daysUntil.germination);
            let harvestDate = new Date(this.props.veggie.plantDate);
            harvestDate.setDate(harvestDate.getDate() + this.props.veggie.daysUntil.harvest);
            let thinning;
            if(this.props.veggie.daysUntil.thinning){
                let thinningDate = new Date(this.props.veggie.plantDate);
                thinningDate.setDate(thinningDate.getDate() + this.props.veggie.daysUntil.thinning)
                thinning = thinningDate.toDateString();
            }else{
                thinning = 'Thinning is not required.'
            }
            dates = (
                <div>
                <p>Date Planted: {this.props.veggie.plantDate.toDateString()}</p>
                <p>Sprout Date: {germDate.toDateString()} </p>
                <p>Thinning Date: {thinning}</p>
                <p>Harvest Date: {harvestDate.toDateString()}</p>
                </div>
            )
        }else{
            dates = (
                <div>
                <p>Row spacing: {this.props.veggie.spacing.row} inches   Plant spacing: {this.props.veggie.spacing.plant} inches</p>
                <p>Days to germination: {this.props.veggie.daysUntil.germination}</p>
                <p>Days to harvest: {this.props.veggie.daysUntil.harvest}</p>
                <button type='button' onClick={this.setPlantDate}>Record Plant Date</button>
                </div>
            )
        }
        return(
            <div className='list-item'>
                <p>{this.props.veggie.name}</p>
                {dates}
                {this.state.showPopUp
                    ? <SetDate togglePopUp={this.togglePopUp} handleChangeDate={this.handleChangeDate}/>
                    : null
                }
                <button type='button' onClick={() => this.props.handleRemoveVeggie(this.props.index)}>Remove</button>
            </div>

        )
    }
}

export default ListItem;