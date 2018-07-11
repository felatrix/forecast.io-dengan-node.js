const request = require('request');

var getWeather = (lat,lng,callback)=>{
request({
    url:`https://api.darksky.net/forecast/49228c54f565b862f73c1797dd1ff9c5/${lat},${lng}`,
    json:true
},(error,response,body)=>{
    if(error){
        callback('unable to forecast.io server');
    }
    else if(response.statusCode === 400){
        callback('unable to fetch weather.');
    } else if (response.statusCode === 200){
        callback(undefined,{
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};
module.exports.getWeather = getWeather;