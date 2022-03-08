import { AppState } from "../AppState"
import { Date } from "../Models/Date"
import { logger } from "../utils/Logger"
import { dateApi } from "./AxiosService"


const baseQuery = {
    api_key: '2k8VkNBPJLbVo8BS566yruV3jUrr5lCXVXjYRolN',
    date: ''
}

class DatesService {
    async search(dateSearch) {
        baseQuery.date = dateSearch
        const res = await dateApi.get('', {params: baseQuery})
        const dates = new Date(res.data)
        AppState.date = dates
        logger.log(AppState.date)
    }
}

export const datesService = new DatesService()