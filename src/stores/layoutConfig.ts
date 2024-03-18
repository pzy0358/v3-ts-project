import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLayoutConfigStore = defineStore('layoutConfig',()=>{
        const isCollapse = ref(false)

        const isDark = ref<boolean>(false)
        return{
            isCollapse,
            isDark
        }
},
{
    // persist:true //开启本地存储
}
)