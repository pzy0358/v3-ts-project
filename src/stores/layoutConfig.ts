import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLayoutConfigStore = defineStore('layoutConfig',()=>{
        const isCollapse = ref(false)
        return{
            isCollapse
        }
})