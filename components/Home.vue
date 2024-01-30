<template>
    <div class="grid">
        <div class="flex flex-column col-6">
            <h2 class="text-4xl">Impulsionando Grandes Empresas</h2>
            <p class="text-4xl">
                <strong class="text-green-300">Solução de Problemas Complexos</strong> com Abordagens Modernas e Eficientes.
            </p>
            <p>
                Uma combinação inovadora de Tecnologia, Desenvolvimento de Software e Expertise Profissional, 
                pronta para elevar seu produto no mercado.
            </p>
            <div>
                <Button label="Sobre mim" />
                <Button class="ml-2" label="Experiências" />
                <Button class="ml-2" label="Contato" />
            </div>
        </div>
        <div class="col-6">
            <img src="../assets/images/Developer.png" class="w-10">
        </div>
    </div>
    <span class="text-green-300 text-2xl flex justify-content-center mt-4">Quem sou eu?</span>
    <div class="flex justify-content-center mt-4">
        <div class="shadow-2 grid my-card w-10">
            <div class="col-4">
                <img class="w-12" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1380&t=st=1706364687~exp=1706365287~hmac=bbe166a8f06e890c60b2809a09d2439bdaac0bb51cb0e2bf96ade3672f0a40ea" alt="Maicon Douglas Mendes Alves">
            </div>
            <div class="flex flex-column col-8">
                <span class="text-xl font-bold">Maicon Douglas Mendes Alves</span>
                <span class="text-lg">Desenvolvedor Fullstack</span>
                <p class="text-md">
                    Como Engenheiro de Software, possuo uma sólida experiência profissional de 2 anos, especializando-me no desenvolvimento de sistemas avançados e automações. Minha jornada no mercado de tecnologia é marcada por uma paixão profunda por inovação e eficiência, onde tenho aplicado minhas habilidades para criar soluções sofisticadas que atendem às necessidades complexas do mundo moderno.
                </p>
            </div>
        </div>
    </div>
    <span class="text-green-300 text-2xl flex justify-content-center mt-4">Experiências</span>
    <div class="flex justify-content-center mt-4">
        <div class="shadow-2 grid my-card w-10">
            <div class="col-4">
                <div>
                    <Menu :model="items" />
                </div>
            </div>
            <div class="flex flex-column col-6">
                Na experiência de Desenvolvedor Fullstack, desempenhei um papel fundamental no processo de concepção e arquitetura de sistemas robustos, proporcionando avanços significativos nas operações logísticas da empresa. Esses sistemas, desenhados com a precisão que a área demanda, beneficiaram milhares de usuários e resultaram em economias substanciais para a empresa.
                Além das economias financeiras diretas, os sistemas que desenvolvi também trouxeram uma melhoria na eficiência operacional. Ao otimizar os processos, consegui reduzir significativamente o tempo necessário para as tarefas dos usuários. Esta otimização não apenas economizou recursos financeiros, mas também liberou o valioso tempo dos nossos usuários, permitindo-lhes focar em outras atividades estratégicas.
            </div>
        </div>
    </div>
    <span class="text-green-300 text-2xl flex justify-content-center mt-4">Projetos</span>
    <div class="flex justify-content-center mt-4">
        <div class="shadow-2 grid my-card w-10">
            <div class="col-4">
                <div>
                    <Menu :model="item" />
                </div>
            </div>
            <div class="flex flex-column col-6">
                Na experiência de Desenvolvedor Fullstack, desempenhei um papel fundamental no processo de concepção e arquitetura de sistemas robustos, proporcionando avanços significativos nas operações logísticas da empresa. Esses sistemas, desenhados com a precisão que a área demanda, beneficiaram milhares de usuários e resultaram em economias substanciais para a empresa.
                Além das economias financeiras diretas, os sistemas que desenvolvi também trouxeram uma melhoria na eficiência operacional. Ao otimizar os processos, consegui reduzir significativamente o tempo necessário para as tarefas dos usuários. Esta otimização não apenas economizou recursos financeiros, mas também liberou o valioso tempo dos nossos usuários, permitindo-lhes focar em outras atividades estratégicas.
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        label: '3M Company',
                    },
                    {
                        label: 'Iniciação científica',
                    }
                ],
                item:[
                    {label:'Conectando Causas'},
                    {label:'PCDIN'},
                    {label:'Física Fácil'},
                ]
            };
        }
    };
</script>
<style scoped>
    .my-card{
        background-color: rgb(24, 24, 24);

    }
    :deep(.p-menu){
        border: none;
    }
</style>