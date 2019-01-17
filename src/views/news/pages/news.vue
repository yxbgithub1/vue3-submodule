<script>
/**
 * 新闻中心
 */
</script>
<template>
    <div>
        案例
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('order', ['orders'])
    },
    mounted() {
        console.log(this.orders)
    }
}
</script>