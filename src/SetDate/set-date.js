import {React, Component} from 'react';

class SetDate extends Component {
    render() {
        return (
            <div className='pop-up'>
                <div className='pop-up-content'>
                    <input type='date' onChange={this.props.handleChangeDate}/>
                    <button onClick={this.props.togglePopUp}>Record Plant Date</button>
                    <button onClick={this.props.togglePopUp}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default SetDate;