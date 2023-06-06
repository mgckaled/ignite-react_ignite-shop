# `Parte 2 - Estrutura Visual`

- não é recomendado incluir código CSS dentro do arquivo `_document.tsx`
- O arquivo `_app` funciona como um _container_ das páginas da aplicação. Logo, é como se fosse um componente que é carregado junto com qualquer página da aplicação. Por isso, as configurações globais de CSS podem ser incluídas antes da função principal `App()`. É necessário que o método `globalStyles()` fique por fora do componente pois não precisam ser recarregadas.
