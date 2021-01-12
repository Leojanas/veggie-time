import {React, Component} from 'react';

class ListItem extends Component {
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
                <p>Not Planted Yet</p>
            )
        }
        return(
            <div>
                <p>{this.props.veggie.name}</p>
                {dates}
            </div>

        )
    }
}

export default ListItem;