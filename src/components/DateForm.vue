
<template>
    <form class="col-6" @submit.prevent="search">
        <div class="input-group m-3">
            <input 
                type="date"
                class="form-control"
                v-model="date"
            />
            <button class="btn btn-success" type="submit">
                <h4>Search</h4>
            </button>
        </div>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { datesService } from '../services/DatesService'
import { logger } from '../utils/Logger'
export default {
    setup() {
        const date = ref('')
        return {
            date,
            search() {
                datesService.search(date.value)
            }
        }
    },
}
</script>