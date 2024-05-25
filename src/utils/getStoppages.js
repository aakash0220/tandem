export function processGPSData(data, threshold){
    threshold = threshold*60*1000 //to milisec
    let stoppages = [];
    let stoppage = null;
    data.forEach((ele)=>{
        if (ele.speed === 0){
            if (stoppage === null){
                stoppage = {
                    startTime: ele.eventGeneratedTime,
                    location: { lat: ele.latitude, lng: ele.longitude }                };
            }
        }
        else {
            if (stoppage !== null){
                if (ele.eventGeneratedTime-stoppage.startTime > threshold){
                    stoppage = {...stoppage, endTime:ele.eventGeneratedTime, duration:ele.eventGeneratedTime-stoppage.startTime}
                    stoppages.push(stoppage)
                }
                stoppage = null
            }
        }
    })
    return stoppages
}