
<template>
    <div class="card">
        <Menubar :model="items" >
        </Menubar>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                items: [
                    {
                        label: 'Início',
                        command:()=>{
                            this.$router.push('/')
                        }
                    },
                    {
                        label: 'Contato',
                        command:()=>{
                            window.open('https://www.linkedin.com/in/maicon-alves-03700419b/', '_blank');
                        }
                    },
                    {
                        label: 'Currículo',
                        command: () => {
                            window.open('https://drive.google.com/file/d/14KdWW6EMFIDgo3cQvGttdt5wDw3RrgZ7/view?usp=sharing', '_blank');
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