<template>
    <router-view />
</template>
<script>
import { mapState } from 'vuex'
import { Header, Footer } from '@comps'
export default {
    components: {
        'k-header': Header,
        'k-footer': Footer
    },
    computed: {
        //vuex order命名空间
        ...mapState('order', ['orders'])
    },
    mounted() {
        console.log(this.orders)
    }
}
</script>

