<template>
  <div class="container">
    <div class="row">
        <DateForm />
    </div>

    <div class="row">
      <div class="col-md-4" >
        <Date :date="d" class="my-2"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  name: 'Home',
  setup() {
    return {
      dates: computed(() => AppState.date),
    }
  }
}
</script>

<style scoped lang="scss">

</style>
