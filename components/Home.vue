<template>
    <div class="grid">
        <div class="flex flex-column col-6">
            <span class="text-4xl font-bold">Olá, eu sou o <strong class="text-green-300">Maicon Alves</strong></span>
            <span class="text-4xl font-bold">Sou um Desenvolvedor Fullstack Pleno.</span>
            <p class="text-md">
                Como Engenheiro de Software, possuo uma sólida experiência profissional de 2 anos, especializando-me no desenvolvimento de sistemas avançados e automações. Minha jornada no mercado de tecnologia é marcada por uma paixão profunda por inovação e eficiência, onde tenho aplicado minhas habilidades para criar soluções sofisticadas que atendem às necessidades complexas do mundo moderno.
            </p>
            <p>
                Aqui no meu portifólio você vai encontrar uma combinação inovadora de Tecnologia, Desenvolvimento de Software e Expertise Profissional, 
                pronta para elevar seu produto no mercado.
            </p>
            <div>
                <Button class="ml-2 p-button-lg" label="Contato" @click="redirectToLinkedin"/>
                <Button class="ml-2 p-button-lg" severity="secondary" label="Projetos" @click="redirectToGithub"/>
            </div>
        </div>
        <div class="col-6 border-round-sm flex justify-content-center">
            <img src="../assets/images/Developer.png" class="w-6">
        </div>
    </div>
    <Divider />
    <div class="grid">
        <div class="col-6 border-round-sm flex justify-content-center">
            <img src="../assets/images/Developer.png" class="w-6">
        </div>
        <div class="flex flex-column col-6">
            <span class="text-4xl font-bold"><strong class="text-green-300">Sobre mim</strong></span>
            <p class="text-md">
                Sou um estudante de Engenharia de Computação com experiência em desenvolvimento FullStack desde 2022.
                Experiência em projetar e implementar soluções avançadas usando TypeScript, Python, Node.js, Vue.js,
                React.js e React Native. Trabalhei em equipes multidisciplinares, entregando soluções escaláveis e eficientes.
                Comprometido com a atualização constante de habilidades para inovação e melhores práticas em engenharia
                de software.       
            </p>
            <strong class="text-green-300 mb-4">Minhas hard skills consistem em:</strong>
            <img src="https://skillicons.dev/icons?i=androidstudio,aws,azure,bootstrap,css,docker,git,github,html,js,linux,mongodb,mysql,nestjs,nextjs,nuxtjs,pinia,py,react,tailwind,vue&theme=dark" />
        </div>

    </div>
    <Divider />
    <div class="grid">
        <div class="flex flex-column col-6">
            <span class="text-4xl font-bold"><strong class="text-green-300">Experiências profissionais</strong></span>
            <p class="text-md">
                Na experiência de Desenvolvedor Fullstack na 3M, desempenhei um papel fundamental no processo de concepção e arquitetura de sistemas robustos, proporcionando avanços significativos nas operações logísticas da empresa. Esses sistemas, desenhados com a precisão que a área demanda, beneficiaram milhares de usuários e resultaram em economias substanciais para a empresa. Além das economias financeiras diretas, os sistemas que desenvolvi também trouxeram uma melhoria na eficiência operacional. Ao otimizar os processos, consegui reduzir significativamente o tempo necessário para as tarefas dos usuários. Esta otimização não apenas economizou recursos financeiros, mas também liberou o valioso tempo dos nossos usuários, permitindo-lhes focar em outras atividades estratégicas. 
            </p>
        </div>
        <div class="col-6 border-round-sm flex justify-content-center">
            <img src="../assets/images/3m.jpg" class="w-6">
        </div>
    </div>
    <Divider />
    <div class="grid">
        <div class="col-6 border-round-sm flex justify-content-center">
            <img src="../assets/images/respirar.png" class="w-6">
        </div>
        <div class="flex flex-column col-6">
            <span class="text-4xl font-bold"><strong class="text-green-300">Projetos desenvolvidos - RespirAr</strong></span>
            <p class="text-md">
                O projeto "RespirAr" surge como uma iniciativa inovadora no campo da saúde pública e tecnologia ambiental, mirando o desenvolvimento e a implementação de um sistema avançado de monitoramento e alerta da qualidade do ar, especialmente para ambientes de ensino público. Este sistema promete transformar o ambiente educacional, tornando-o mais saudável e seguro para estudantes e professores. Com a utilização de tecnologias de ponta, o projeto visa detectar uma ampla gama de poluentes - como dióxido de carbono, amônia e partículas alergênicas - fornecendo dados em tempo real essenciais para a tomada de decisões e a manutenção de um ar puro nas salas de aula.            
            </p>
            <strong class="text-green-300 mb-4 cursor-pointer" @click="redirectToGithub">Clique aqui para acessar o código do projeto</strong>
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
        },
        methods:{
            redirectToGithub(){
                window.open('https://github.com/maicond02/respirar', '_blank');
            },
            redirectToLinkedin(){
                window.open('https://www.linkedin.com/in/maicon-alves-03700419b/', '_blank');
            },
            redirectToGithub(){
                window.open('https://github.com/maicond02', '_blank');
            }
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