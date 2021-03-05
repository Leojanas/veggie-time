const eventService = {
    getEventDates(veggie) {
        let plantDate = new Date(veggie.plantDate);
        let germDate = new Date(veggie.plantDate);
        germDate.setDate(germDate.getDate() + veggie.daysUntil.germination);
        let harvestDate = new Date(veggie.plantDate);
        harvestDate.setDate(harvestDate.getDate() + veggie.daysUntil.harvest);
        let dates = [plantDate, germDate, harvestDate];
        if(veggie.daysUntil.thinning){
            let thinningDate = new Date(veggie.plantDate);
            thinningDate.setDate(thinningDate.getDate() + veggie.daysUntil.thinning)
            dates.push(thinningDate);
        }
        let formattedDates = dates.map(date => {
            return date.toJSON().split('T')[0]
        })
        return formattedDates;
    },
    generateEvents(dates, veggie){
        let event_types = ['planting', 'sprouting','harvesting', 'thinning'];
        let events = [];
        for(let i=0; i<dates.length; i++){
            let event = {
                event_type: event_types[i],
                event_date: dates[i],
                completed: false,
                notes:  `${event_types[i]} ${veggie.veggie_name}`
            }
            events.push(event);
        }
        return events
    }
};

export default eventService;
