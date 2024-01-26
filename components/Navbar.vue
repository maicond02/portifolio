
<template>
    <div class="card">
        <Menubar :model="items" >
            <template #end>
                <div>
                    <InputText placeholder="Buscar"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                items: [
                    {
                        label: 'Home',
                    },
                    {
                        label: 'About',
                    },
                    {
                        label: 'Projects',
                    },
                    {
                        label: 'Contact',
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    :deep(.p-menubar){
        background-color:transparent;
        border:none ;
    }
</style>