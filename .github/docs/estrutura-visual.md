# `Parte 2 - Estrutura Visual`

## Notas Importantes

- não é recomendado incluir código CSS dentro do arquivo `_document.tsx`.
- O arquivo `_app` funciona como um _container_ das páginas da aplicação. Logo, é como se fosse um componente que é carregado junto com qualquer página da aplicação. Por isso, as configurações globais de CSS podem ser incluídas antes da função principal `App()`. É necessário que o método `globalStyles()` fique por fora do componente pois não precisam ser recarregadas.
- É obrigatório incluir as propriedades  `width={}` e `height={}` dentro do componente nativo `<Image/>` do Next. Do contrário, haverá erros.
- As estilizações devem ser criadas em uma pasta separada para se evitar a criação de rotas no aplicativo. Ex: `src/styles/...`.

## Conceitos

- `LCP - Largest Contentful Paint` LCP significa "Largest Contentful Paint" (Pintura do Maior Conteúdo Visível, em tradução livre) e é uma métrica de desempenho usada para medir o tempo que leva para o maior elemento de conteúdo visível em uma página da web ser renderizado na tela. Em termos simples, o LCP mede o tempo que leva para o elemento mais significativo e perceptível pelo usuário ser exibido. O maior elemento de conteúdo visível pode ser uma imagem, um vídeo, um bloco de texto ou qualquer outro elemento na página. O LCP é importante porque está relacionado à experiência do usuário e à percepção de velocidade de carregamento de uma página. Um LCP rápido é geralmente desejável, pois ajuda a transmitir a sensação de que a página está carregando rapidamente e torna a experiência do usuário mais satisfatória. O Google, em particular, usa o LCP como uma das métricas principais em seu algoritmo de classificação de página. Páginas com um LCP mais rápido têm mais chances de obter uma classificação mais alta nos resultados de pesquisa, uma vez que o Google considera a experiência do usuário e o desempenho da página ao determinar a relevância dos resultados de pesquisa. É importante otimizar o LCP para melhorar o desempenho da página. Isso pode envolver técnicas como otimização de imagens, carregamento tardio (lazy loading) de conteúdo, redução do tempo necessário para obter recursos do servidor e outras práticas recomendadas de desempenho da web.

## Recomendações

### `<img/>` ou `<Image/>`? Qual utilizar?

Usar a tag `<img>` em HTML pode resultar em tempos de LCP mais lentos e consumo de largura de banda maior. Para lidar com esses problemas, você mencionou o componente `<Image />` do pacote `next/image`, que é comumente usado com o framework Next.js.

O componente `<Image />` fornecido pelo `next/image` oferece otimização automática de imagens e diversos benefícios de desempenho. Veja como ele pode ajudar a melhorar o LCP e reduzir o consumo de largura de banda:

1. Otimização automática: Ao usar o componente `<Image />`, o Next.js otimiza automaticamente as imagens para diferentes dispositivos e tamanhos de tela. Ele gera várias versões da imagem em diferentes tamanhos e formatos, e serve a mais apropriada com base no dispositivo do usuário, viewport e condições de rede. Essa otimização garante que as imagens sejam entregues de forma eficiente, reduzindo o impacto no LCP.

2. Imagens responsivas: O componente `<Image />` permite especificar várias fontes de imagem com dimensões e resoluções diferentes. O Next.js escolhe a fonte de imagem apropriada com base no tamanho do contêiner e na resolução da tela do dispositivo. Ao fornecer imagens que correspondem ao tamanho necessário, ele evita o uso desnecessário de largura de banda e melhora o LCP, reduzindo a necessidade de redimensionamento no navegador.

3. Carregamento tardio (lazy loading): Por padrão, o componente `<Image />` implementa o carregamento tardio. Ele carrega as imagens somente quando estão prestes a entrar na visualização, em vez de carregar todas as imagens de uma vez. Essa técnica melhora o tempo de carregamento inicial e o LCP, pois apenas as imagens essenciais são carregadas inicialmente.

4. Suporte a placeholders: O Next.js oferece suporte integrado para placeholders de imagem. Enquanto a imagem real está carregando, é exibido um espaço reservado para melhorar o desempenho percebido. Essa abordagem melhora a experiência do usuário, dando a impressão de que a página está carregando mais rápido.

Em resumo, usar o componente `<Image />` do `next/image` pode melhorar significativamente o LCP e reduzir o consumo de largura de banda, ao otimizar automaticamente as imagens, fornecer imagens responsivas, implementar o carregamento tardio e suportar placeholders de imagem. É uma abordagem recomendada para projetos do Next.js para aprimorar o desempenho de sites com muitas imagens.
