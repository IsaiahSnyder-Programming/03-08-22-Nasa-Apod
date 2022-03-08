
<template>
    <div class="card">
        <div class="position-absolute" style="right: 0">
            <!-- <img :src="date.img"> -->
            <div class="card-body">
                <h3 class="d-flex align-items-center justify-content-between">
                    <span>{{}}</span>
                </h3>
                <p class="clip-text">
                    {{}}
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