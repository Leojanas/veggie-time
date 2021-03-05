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
        this.props.setPlantDate(this.state.plantDate ,this.props.index)
    }
    handleChangeDate = (event) => {
        let date = new Date(event.target.value);
        date.setHours(date.getHours() + date.getTimezoneOffset()/60)
        this.setState({plantDate: date})
    }
    render() {
        let dates;
        if(this.props.veggie.plantDate){
            let plantDate = new Date(this.props.veggie.plantDate)
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
                <p className='center'>Date Planted: {plantDate.toDateString()}</p>
                <p className='center'>Sprout Date: {germDate.toDateString()} </p>
                <p className='center'>Thinning Date: {thinning}</p>
                <p className='center'>Harvest Date: {harvestDate.toDateString()}</p>
                </div>
            )
        }else{
            dates = (
                <div>
                    <div className='group'>
                    <div className='item'>
                        <h4>Spacing</h4>
                        <p>Row: {this.props.veggie.spacing.row} inches</p>
                        <p>Plant: {this.props.veggie.spacing.plant} inches</p>
                    </div>
                    <div className='item'>
                        <h4>Days Until</h4>
                        <p>Germination: {this.props.veggie.daysUntil.germination}</p>
                        <p>Harvest: {this.props.veggie.daysUntil.harvest}</p>
                    </div>
                    </div>
                </div>
            )
        }
        return(
            <div className='list-item'>
                <h3 className='item-title'>{this.props.veggie.veggie_name}</h3>
                {dates}
                {this.state.showPopUp
                    ? <SetDate togglePopUp={this.togglePopUp} handleChangeDate={this.handleChangeDate}/>
                    : null
                }
                <div className='group'>
                    {this.props.veggie.plantDate
                        ? null
                        : <button type='button' onClick={this.setPlantDate}>Record Plant Date</button>
                    }
                <button type='button' onClick={() => this.props.handleRemoveVeggie(this.props.index)}>Remove</button>
                </div>
            </div>

        )
    }
}

export default ListItem;