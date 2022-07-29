
import axios from "axios";

class weatherComponent {
    static api_key = process.env.api_id
    
    // Function to create a new User
    public static async search(req:any, res:any) {
        try {
            let token = process.env.tokenBussines;
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };            
            let citysQuery = req.query.citysQuery || null;
            if(!citysQuery){
                citysQuery = process.env.country
            }
            citysQuery = citysQuery.split(',');
            let coutrys:any={};
            for (let index = 0; index < citysQuery.length; index++) {
                const element = citysQuery[index];
                let countryWeather = await weatherComponent.searchWeather(element);
                let countryBussines = await weatherComponent.searchBussines(element,config);
                coutrys[element] = {
                    weather : countryWeather,
                    bussines:countryBussines
                }
            }
            return res.json(coutrys);
            
        } catch (error) {
            return res.json(error);
        }
        
    };
    public static async searchWeather(param:any) {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='+param+'&appid='+weatherComponent.api_key;
        let response:any = await  axios.get(url)
        response = response.data 
        if(response.status==404) {
            response = [];
        }
        return response;
    }

    public static async searchBussines(param:any,config:any) {
        let url = 'https://api.yelp.com/v3/businesses/search?location='+param;
        const responseBussines:any = await  axios.get(url,config)
        return responseBussines.data;
    }
}   

export default weatherComponent