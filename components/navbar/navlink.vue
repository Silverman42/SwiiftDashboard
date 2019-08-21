<template>
    <nuxt-link :to="navlink.link" tag="li" exact active-class="active" class="nav-item">
        <a href="#" class="nav-link">
            <i :class="[(navlink.icon || 'typcn typcn-document')]"></i>{{navlink.linkName || ''}}
        </a>
    </nuxt-link>
</template>

<script>
/**
 * Navlink Component
 */
export default {
    props:{
        navlink:{
            type: Object,
            default(){
                return {
                    linkName: '',
                    link: ''
                }
            }
        }
    }
}
</script>
