
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
                        command: () => {
                            window.open('https://github.com/maicond02', '_blank');
                        }
                    },
                    {
                        label: 'Contact',
                        command: () => {
                            window.open('https://www.linkedin.com/in/maicon-alves-03700419b/', '_blank');
                        }
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