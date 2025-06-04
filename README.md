# Bem vindo à Akademika
## Do seu jeito, no seu ritmo.

![Home page](https://github.com/user-attachments/assets/0389e739-76f0-411d-8eb1-3a82a089bef5)


Já pensou em estruturar seus estudos de forma eficaz e com o uso de IA? Com a Akademika, organizar seus estudos é mamão com açúcar. O app permite que qualquer estudante mantenha suas anotações, tópicos de estudo e datas importantes perfeitamente organizados, sem a necessidade de sistemas complexos ou montes de papéis. Com apenas alguns passos, você pode ficar despreocupado e focar no que realmente importa: aprender. além disso, nós trazemos uma funcionalidade única: Uma Ia totalmente ao seu dispor.

[Link do figma](https://www.figma.com/design/q9mR5Wp2TJW44F6dgbJxMd/Akademika?node-id=44-21&t=scNMNx8ve1yYBw8p-0)

[Link do Trello](https://trello.com/b/bSx1z2P8/akademika)
[Link da apresentação](https://www.canva.com/design/DAGpHsDjYZk/guk5QJ28E735uNUbMpuuAg/edit)
## Sobre o projeto
![logo](https://github.com/user-attachments/assets/17fcbafc-b4b7-4306-ae2f-408124106195)

## Funcionalidades (1º release)

### Cadastro e login de usuários

Permite que os usuários acessem seus recursos de estudo de forma segura e prática, mantendo seu aprendizado garantido.
![Cadastro form](https://github.com/user-attachments/assets/c1b4a13e-9ae1-4d5e-8abc-a1ee24742747)
[Link do figma](https://www.figma.com/proto/q9mR5Wp2TJW44F6dgbJxMd/Akademika?node-id=218-394&p=f&t=c0IokIbE7aeIyFyC-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=44%3A21)

[Link do Trello](https://trello.com/b/bSx1z2P8/akademika)

### Gerenciamento de disciplinas

As disciplinas são o fundamento da organização dos seus estudos na Akademika, o app permite que você crie as disciplinas para agrupar suas notas, atividades e outras informações importantes.

Você pode gerenciar as disciplinas com extrema facilidade, com uma interface limpa, simples e intuitiva.

![Subject dashboard](https://github.com/user-attachments/assets/59035132-a161-43bd-aff3-026bb6c030ca)

[Link do figma](https://www.figma.com/proto/q9mR5Wp2TJW44F6dgbJxMd/Akademika?node-id=254-425&p=f&t=c0IokIbE7aeIyFyC-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=44%3A21)

[Link do Trello](https://trello.com/b/bSx1z2P8/akademika)

## Perfil de Disciplina
O perfil de disciplina é responsável por mostrar ao usuário quais são as informações fornecidas daquela matéria,informando de forma rápida e prática acerca de dados, atividades e provas daquela disciplina.
![Subject information](https://github.com/user-attachments/assets/ce2a9052-8b96-404b-8baa-08f814edfe7e)
[Link do figma](https://www.figma.com/proto/q9mR5Wp2TJW44F6dgbJxMd/Akademika?node-id=307-628&p=f&t=c0IokIbE7aeIyFyC-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=44%3A21)

[Link do Trello](https://trello.com/b/bSx1z2P8/akademika)

## Diagrama de atividades

```mermaid
flowchart TD
    A[Início] --> B{Usuário já possui conta?}
    B -- Sim --> C[Fazer login]
    B -- Não --> D[Realizar cadastro]
    D --> C
    C --> E{Login bem-sucedido?}
    E -- Sim --> F[Redirecionar para Dashboard]
    E -- Não --> C2[Exibir erro e tentar novamente]
    C2 --> C
    F --> G{Deseja criar uma disciplina?}
    G -- Sim --> H[Preencher formulário de nova disciplina]
    H --> I[Salvar disciplina]
    I --> F
    G -- Não --> J{Deseja editar disciplina?}
    J -- Sim --> K[Selecionar disciplina para edição]
    K --> L[Atualizar dados]
    L --> F
    J -- Não --> M{Deseja excluir disciplina?}
    M -- Sim --> N[Selecionar disciplina para exclusão]
    N --> O[Confirmar e excluir]
    O --> F
    M -- Não --> P{Deseja sair do sistema?}
    P -- Sim --> Q[Fazer logout]
    Q --> R[Fim]
    P -- Não --> F


```

Pair programming: Não foi usado na maior parte dos nossos processos em razão do conflito de horários com os membros. Optamos por alinhamentos assíncronos na maior parte do desenvolvimento (O que se mostrou bem efetivo).
![Imagem da reunião do grupo](https://github.com/user-attachments/assets/c2082936-9a35-4650-bc21-d0d8ee00ecee)



