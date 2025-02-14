/* Visual crossing API key =  NMNT3RLNJR5DDLMQP9S378A3B  */

/*
Tokyo Japan 
- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tokyo%2C%20Japan?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json

Richmond, VA 
- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Richmond%20VA?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json
- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Richmond%2CVirginia?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json

Brookline MA
- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Brookline%20Massachusetts?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json

Massachusetts
- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Massachusetts?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json

Maryland
- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Maryland?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json
*/

/*
Goal 1:
Create code that will take an input such as from a input bar with a button and be able to receive the data from the weather API 
via the fetch() function and check out what returns from this after being parsed to JSON such as if its an array etc. 
-data.resolved address = returns string with the address of the location (can be used as one of the text items in the weather app)
-data.days returns an array containing 15 objects representing the next 15 days compared to when it was logged this array contains a day that includes information such as:
a. conditions
b.temp = current temperature, tempmax/tempmin = highest and lowest temp
c. preciprob = for chance of precipitation

Goal 2:
FIgure out if you can create a forecast object containing the methods commented out in the code or if you need to create different async functions to call each portion of the data

*/

const p = document.querySelector(".weather");
const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", ()=>{
    const input = document.getElementById("weather-input").value;
    let address = formatAddress(input);
    setLocation(address);


})

function formatAddress(user_input){
    if (user_input.includes(",")){
        const formattedInput = user_input.split(",");
        return formattedInput;
    }else{
        const formattedInput = user_input.split(" ");
        return formattedInput;
    }
};

async function getData(address){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address[0]}%20${address[1]}?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json`, {mode:"cors"});
    const data = await response.json();
    return data;
}


async function setLocation(address){
    const locationData = await getData(address);
    p.textContent = locationData.resolvedAddress;
    
}

