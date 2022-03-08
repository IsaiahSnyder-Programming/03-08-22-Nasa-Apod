
<template>
    <div class="card">
        <div class="position-absolute" style="">
            <img :src="date.img" class="date-image">
            <div class="card-body">
                <h3 class="d-flex align-items-center justify-content-between">
                    <span>{{date.title}}</span>
                </h3>
                <p class="clip-text">
                    {{date.desc}}
                </p>
            </div>
        </div>
    </div>
</template>


<script>
import { Date } from "../Models/Date"
export default {
    props: {
        date: {
            type: Date,
            required: true
        }
    },
    setup() {
        
    },
}
</script>