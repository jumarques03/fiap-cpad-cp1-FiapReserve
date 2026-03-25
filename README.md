# FiapReserve

## a) Sobre o Projeto

**Nome do app:** FiapReserve

**Descrição do problema que resolve:** A dificuldade e a perda de tempo na busca por espaços de estudo e laboratórios disponíveis no edifício. O aplicativo centraliza a visualização e a reserva de salas, evitando conflitos de horários e a frustração de encontrar uma sala ocupada.

**Qual operação da FIAP foi escolhida e por quê:** Escolhemos a **Gestão de Infraestrutura e Recursos Acadêmicos** (especificamente, a reserva de salas e laboratórios). Escolhemos essa operação porque, como alunos, sabemos da alta demanda por espaços específicos (como Salas Maker e Laboratórios) para o desenvolvimento de CPs, projetos e trabalhos em grupo. Otimizar esse processo melhora diretamente a experiência do aluno e facilita o controle por parte da faculdade.

**Funcionalidades implementadas:**
* **Interface de Login:** Tela inicial de autenticação do usuário via RM ou Email institucional.
* **Listagem de Salas em Tempo Real:** Tela de visualização rápida do status das salas (Livre / Ocupado).
* **Sistema de Reserva (Context API):** Tela dedicada para reservar salas disponíveis. A ação utiliza o gerenciamento de estado global (Context API) para atualizar instantaneamente a disponibilidade da sala escolhida em todas as abas do aplicativo, sem necessidade de recarregar a tela.
* **Navegação por Abas:** Roteamento estruturado utilizando `expo-router` (Tabs Navigation).

---

## b) Nome dos integrantes

* Isabelle Dias Belini
* Júlia Souza Marques
* Manoella dos Santos Ginez

---

## c) Como Rodar o Projeto

Siga as instruções abaixo para configurar o ambiente e rodar o projeto *FiapReserve* em sua máquina

**1. Pré-requisitos:**

Antes de começar, certifique-se de ter instalado:
* **Node.js**: Versão 18 ou superior (LTS recomendada).
* **Gerenciador de Pacotes**: npm (instalado com o Node) ou Yarn.
* **Expo Go**: Aplicativo instalado no seu celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [iOS](https://apps.apple.com/br/app/expo-go/id982107779)).
* **Git**: Para clonar o repositório.
 
**2. Passo a Passo para Execução**

* **Clonar o repositório:**
Abra o seu terminal (ou o terminal do VS Code) e execute:
git clone [https://github.com/jumarques03/fiap-cpad-cp1-FiapReserve.git](https://github.com/jumarques03/fiap-cpad-cp1-FiapReserve.git)
* **Instalar dependências:** npm install --legacy-peer-deps
* **Iniciar o projeto:** npx expo start
* **Abrir o app:** celular > escaneie o QR Code no terminal usando o app Expo Go / emulador > pressione a para Android ou i para iOS (Mac)

---

## d) Demonstração

**Telas do app:**

<img src="fiap-reserve/assets/login.png" width="180"/>
<img src="fiap-reserve/assets/salas.png" width="180"/>
<img src="fiap-reserve/assets/reservar.png" width="180"/>
<img src="fiap-reserve/assets/minhas.png" width="180"/>

#### **Demonstração do fluxo principal do app:**
[Clique aqui para assistir a demonstração](https://youtube.com/shorts/NA5JFH0ez3c?feature=share)

---

## e) Decisões Técnicas

**Breve descrição de como o projeto foi estruturado:** O aplicativo foi estruturado utilizando o Expo Router com o padrão de rotas baseadas em arquivos, conforme apresentado em aula. A tela inicial de login foi implementada no arquivo index.js, separada das demais rotas da aplicação, para permitir a simulação de um fluxo de autenticação antes do acesso às telas principais do sistema. As funcionalidades centrais (Salas, Reservar e Minhas Reservas) foram organizadas dentro da pasta (tabs).
Toda a estilização da interface foi desenvolvida utilizando o **StyleSheet** do React Native, garantindo padronização visual e melhor organização do código.

**Quais hooks foram usados e para quê:**
* **useRouter:** utilizado para realizar a navegação programática entre as telas.
* **useContext:** utilizado para compartilhamento global de informações relacionadas às reservas entre diferentes telas do aplicativo, permitindo atualização imediata dos dados exibidos.
* **useState:** utilizado para gerenciamento de estados locais das telas, como seleção de salas e horários.

**Como a navegação foi organizada:** A navegação principal do aplicativo foi estruturada utilizando **Tabs Navigation**, proporcionando uma experiência mais intuitiva e acesso direto às telas Salas, Reservar e Minhas Reservas.
O fluxo de utilização ocorre de forma sequencial e objetiva: inicialmente o usuário acessa a tela de login e, após a entrada no sistema, pode visualizar a disponibilidade das salas na aba Salas. Em seguida, é possível realizar uma reserva selecionando a sala e o horário desejado na tela Reservar. Por fim, o usuário pode acompanhar a confirmação e consultar os detalhes da reserva realizada na seção Minhas Reservas.


## f) Próximos Passos

Caso houvesse mais tempo para a continuidade do projeto, o grupo implementaria as seguintes melhorias:

* **Integração com Backend e Banco de Dados:** Substituir a Context API (armazenamento em memória) por uma API real (como Firebase ou Node.js) para persistência definitiva das reservas.
* **Autenticação Real:** Validar as credenciais de login (RM e Senha) com um banco de usuários.
* **Gestão de "Minhas Reservas":** Dar funcionalidade à aba de histórico, permitindo ao usuário visualizar suas reservas ativas e a opção de cancelá-las.
* **Filtros Avançados:** Permitir a busca de salas por tipo (Andar, Laboratório, Maker, Teórica), capacidade de alunos e seleção de blocos de horários específicos.