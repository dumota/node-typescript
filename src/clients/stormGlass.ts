import { AxiosStatic } from "axios";

export class StormGlass{

    readonly stormGlassApiParamns ='swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed'
    readonly stormGlassApiSource = 'noaaa'
    constructor(protected request: AxiosStatic){}

    public async fetchPoints(lat:number, lng:number):Promise<{}>{
        return this.request.get(`https://api.stormglass.io/v2/weather/point?params=${this.stormGlassApiParamns}source=${this.stormGlassApiSource}&end=1592113802&lat=${lat}&lng=${lng}`)
    
    }
}