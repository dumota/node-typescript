import {StormGlass} from '@src/clients/StormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_wather_3_hours.json';
import stormGlassNormalizeWeather3HoursFixture from '@test/fixtures/stormGlass_normalizes_response_3_hours.json'
jest.mock('axios');

describe('StormGlass client',()=>{
    it('should return the normalized forecast from the stormGlass service', async()=>{
        const lat = -33.779879456;
        const lng = 151.6565659;

        axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture)

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalizeWeather3HoursFixture);
    })
})