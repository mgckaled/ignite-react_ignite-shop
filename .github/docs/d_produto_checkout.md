# Parte 4 - Produtos & Checkout

## Notas Importantes

- No arquivo `src\styles\pages\home.ts`, a referência do `styles()` da tag html `<a>` foi alterada para o próprio `<Link/>` do Next.js. Dessa forma o componente estilizado `<Product>` assume suas funcionalidades.`
- `src\pages\api\**` -  API routes: rotas que funcionam como uma rota back-end para podermos realizar ações a partir do server-side.

### `src/pages/index.tsx`

- `const response = await stripe.products.list({...})` - retorna a listagem dos produtos cadastrados no Sripe.
- `<Link prefetch={false} />` - Evita que os links façam pré-carregamentos. Recomenda-se usar esses recursos caso as páginas tenham muitos links que façam requisições para não alterar o desenpenho do servidor.

### `src/pages/product/[id].tsx`

- `const product = await stripe.products.retrieve(productId, {expand: ["default_price"],})` - busca os produtos de dentro do Stripe, passando o id do produto como parâmentro.
- `getStaticPaths` - método que devolve os ids dos produtos e especifica quais páginas estáticas devem ser geradas durante o build do nosso app.

## Conceitos

### `crawler`

Um "crawler" é um programa ou bot automatizado que percorre a internet de forma sistemática, visitando páginas da web e coletando informações sobre elas. Esses bots são usados pelos mecanismos de busca, como o Google, para indexar e catalogar páginas da web, permitindo que os usuários pesquisem e encontrem informações relevantes.

O crawler começa visitando uma ou mais páginas da web, seguindo os links contidos nessas páginas para acessar outras páginas. Esse processo é repetido em uma escala muito grande, abrangendo milhões de páginas da web. O objetivo principal do crawler é descobrir e registrar informações sobre o conteúdo das páginas, como texto, imagens, vídeos e outros elementos relevantes.

Os crawlers também podem ser usados para outros fins, como monitorar alterações em sites específicos, coletar dados para análise, verificar a disponibilidade de páginas da web ou buscar informações específicas em sites de comércio eletrônico. Eles desempenham um papel crucial na indexação da web e na disponibilização de informações para os usuários através dos mecanismos de busca.

### `intersection observer API`

A Intersection Observer API (Application Programming Interface) é uma API JavaScript que permite rastrear e observar mudanças na interseção entre um elemento HTML e o viewport do navegador ou um elemento pai contendo esse elemento. Ela fornece uma forma eficiente de detectar quando um elemento se torna visível ou deixa de ser visível na tela do usuário.

A principal finalidade da Intersection Observer API é permitir que os desenvolvedores monitorem o comportamento de rolagem e a visibilidade de elementos na página sem a necessidade de implementar lógica complexa ou utilizar eventos de rolagem. Isso é especialmente útil para casos em que é necessário carregar conteúdo sob demanda, executar animações ou realizar ações com base na visibilidade do elemento.

O Intersection Observer API trabalha com um objeto "observer" que você cria e registra em um ou mais elementos de destino. Esse observador verifica continuamente se o elemento-alvo está visível dentro do viewport ou do elemento pai e dispara um callback quando ocorrem mudanças na interseção. O callback pode ser configurado para executar ações específicas, como carregar conteúdo adicional, iniciar uma animação ou atualizar o estado de um elemento.

Essa API oferece uma maneira eficiente de rastrear a visibilidade de elementos, pois utiliza mecanismos internos do navegador para otimizar o desempenho. Ela evita a necessidade de verificar manualmente a posição dos elementos na página e atualizar os estados com base na rolagem, resultando em um código mais limpo e eficiente.

No entanto, é importante notar que a Intersection Observer API é suportada por navegadores mais recentes e pode não estar disponível em versões mais antigas. Portanto, ao utilizar essa API, é recomendável verificar a compatibilidade do navegador e fornecer uma solução alternativa para usuários com navegadores desatualizados, se necessário.

## Informações relevantes

### Uso do `<Link/> no Next.js`

Em Next.js, o componente `<Link/>` é usado para criar links entre páginas no seu aplicativo web. Ele fornece uma maneira conveniente de lidar com a navegação entre páginas sem recarregar a página inteira.

Você deve usar o `<Link/>` sempre que precisar criar um link entre diferentes páginas no seu aplicativo Next.js. Isso é particularmente útil ao navegar entre páginas estáticas ou dinâmicas, como quando você tem uma lista de itens e deseja criar links para exibir detalhes individuais desses itens.

Ao usar o `<Link/>`, você pode aproveitar os benefícios do roteamento do lado do servidor (Server-side Rendering - SSR) do Next.js, que carrega a página seguinte de forma eficiente, pré-renderiza-a e atualiza apenas a parte necessária da página. Isso resulta em uma experiência de navegação mais rápida e suave para os usuários.

Aqui está um exemplo básico de como usar o `<Link/>` no Next.js:

```jsx
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default HomePage;
```

Neste exemplo, ao clicar no link "About", o Next.js irá carregar a página "/about" sem recarregar a página inteira.

Lembre-se de que o `<Link/>` do Next.js é usado para navegação interna no aplicativo. Se você precisar criar um link externo para um site externo, você pode simplesmente usar um elemento `<a>` normal sem o `<Link/>`.

É importante notar que o `<Link/>` também possui várias opções adicionais, como pré-carregamento de páginas (`prefetch`), passagem de parâmetros dinâmicos na URL e muito mais. Você pode consultar a documentação oficial do Next.js para obter mais detalhes sobre esses recursos adicionais.

### Navegação no Next.js

A navegação dentro do Next.js é baseada em rotas e pode ser gerenciada usando várias abordagens. O Next.js oferece uma série de recursos e APIs para facilitar a navegação entre páginas.

Aqui estão algumas opções comuns para a navegação dentro do Next.js:

**Next.js Link**: O Next.js fornece o componente `Link` para navegação interna entre páginas. O componente `Link` permite criar links entre páginas sem recarregar completamente a página. Ele lida automaticamente com a pré-busca e pré-carregamento de páginas para melhorar o desempenho. Aqui está um exemplo de uso do `Link`:

```javascript
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default HomePage;
```

**Programaticamente com Router**: Você também pode usar o objeto `router` do pacote `next/router` para navegar programaticamente entre páginas. O objeto `router` fornece métodos como `push`, `replace`, `back`, etc., para controlar a navegação. Aqui está um exemplo de uso do `router`:

```javascript
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleButtonClick}>Go to About</button>
    </div>
  );
};

export default HomePage;
```

**Página Estática**: O Next.js permite a criação de páginas estáticas pré-renderizadas que podem ser acessadas diretamente por meio de uma URL. Isso é útil para criar páginas de conteúdo estático, como páginas de documentação ou páginas de ajuda. Basta criar um arquivo JavaScript ou TypeScript no diretório `pages` para cada página estática desejada.

Essas são apenas algumas das opções de navegação disponíveis no Next.js. Você também pode explorar recursos avançados, como rotas dinâmicas, parâmetros de rota, rotas aninhadas e muito mais. O Next.js possui uma documentação detalhada sobre navegação que pode ajudar a entender melhor todas as opções disponíveis: <https://nextjs.org/docs/routing/introduction>

### Qual a função do método `getStaticPaths`?

O método `getStaticPaths` é uma função que pode ser implementada ao criar páginas estáticas dinâmicas no Next.js. Ele faz parte do sistema de geração de páginas estáticas do Next.js e é usado para especificar quais caminhos (ou URLs) devem ser pré-renderizados no momento da construção.

Ao criar uma página estática dinâmica no Next.js, geralmente você precisa fornecer os caminhos possíveis para os quais deseja gerar as páginas estáticas. O `getStaticPaths` permite que você defina esses caminhos de forma dinâmica, com base em dados externos ou em qualquer outra lógica personalizada que você precise.

A função `getStaticPaths` deve ser exportada por uma página em um arquivo chamado `[slug].js` (ou qualquer outro nome dinâmico que você tenha definido), que é responsável por renderizar a página com base no valor do parâmetro dinâmico.

Dentro da função `getStaticPaths`, você precisa retornar um objeto com duas propriedades principais: `paths` e `fallback`. A propriedade `paths` deve ser um array de objetos, onde cada objeto representa um caminho possível que você deseja pré-renderizar. Cada objeto deve conter um parâmetro `params` que contém o valor do parâmetro dinâmico correspondente.

A propriedade `fallback` indica o comportamento do Next.js se o caminho solicitado não foi pré-renderizado. Ela pode ter um dos seguintes valores:

- `false`: Se um caminho não pré-renderizado for solicitado, o Next.js retornará uma página de erro 404.
- `true`: Se um caminho não pré-renderizado for solicitado, o Next.js tentará gerar a página no momento da solicitação.
- `'blocking'`: Semelhante a `true`, mas a geração da página ocorrerá no servidor, bloqueando a resposta até que a página esteja pronta.

A função `getStaticPaths` é usada em conjunto com `getStaticProps`, que é responsável por buscar os dados necessários para renderizar a página com base no valor do parâmetro dinâmico.

Em resumo, o `getStaticPaths` é usado no Next.js para especificar os caminhos possíveis para os quais você deseja gerar páginas estáticas dinâmicas e controlar o comportamento do Next.js quando um caminho não pré-renderizado é solicitado. Isso permite que você crie páginas dinâmicas e estáticas ao mesmo tempo, aproveitando os benefícios de desempenho da geração de páginas estáticas.

### `fallback` do SSG

No contexto do Next.js, o fallback (ou fallback behavior) se refere a uma funcionalidade do Static Site Generation (SSG) fornecida pelo framework. O fallback é uma opção que pode ser configurada para páginas geradas estaticamente (statically generated pages) quando essas páginas ainda não foram geradas.

Quando o fallback está habilitado para uma página específica, o Next.js renderiza uma versão de "carregamento" dessa página no servidor, em vez de retornar uma página em branco ou um erro 404. Isso permite que o Next.js exiba uma interface de carregamento ou uma página alternativa enquanto a página está sendo gerada.

O fallback é particularmente útil em cenários em que existem muitas páginas estáticas que precisam ser geradas e o processo de geração pode levar algum tempo. Sem o fallback, o usuário teria que esperar até que todas as páginas estejam prontas antes de visualizar qualquer conteúdo. Com o fallback, o usuário pode começar a ver o conteúdo básico da página enquanto o Next.js gera o restante do conteúdo no servidor.

A configuração do fallback é feita através da propriedade `fallback` no método `getStaticPaths` em um arquivo de página do Next.js. Existem três valores possíveis para essa propriedade:

- `false`: Se uma página não tiver sido gerada estaticamente no momento da solicitação, o Next.js retornará um erro 404.
- `true`: O Next.js tentará gerar a página no momento da solicitação, se não tiver sido gerada estaticamente. Isso pode levar a um atraso na renderização da página.
- `'blocking'`: O Next.js tentará gerar a página no servidor no momento da solicitação. Isso significa que o usuário terá que aguardar a conclusão da geração antes de ver a página, mas não receberá um erro 404.

Portanto, o fallback do SSG no Next.js oferece uma maneira flexível de lidar com páginas estáticas ainda não geradas, permitindo que os usuários vejam o conteúdo básico enquanto o restante da página é gerado no servidor.

### feature `prefetch` do `<Link/>`

O Next.js, um framework de desenvolvimento web baseado em React, possui uma funcionalidade chamada "prefetch" que permite pré-carregar (prefetch) páginas à partir do componente `Link`. O prefetching é uma técnica que permite carregar antecipadamente recursos, como páginas, para melhorar a experiência do usuário, especialmente em casos onde a navegação é rápida e fluida.

Ao utilizar o componente `Link` do Next.js, você pode adicionar a propriedade `prefetch` para pré-carregar a página vinculada quando o usuário interagir com o link. Por exemplo:

```tsx
import Link from 'next/link';

function MeuComponente() {
  return (
    <div>
      <Link href="/pagina">
        <a prefetch>Página</a>
      </Link>
    </div>
  );
}
```

Quando o usuário passar o mouse ou tocar no link, o Next.js iniciará o processo de pré-carregamento da página `/pagina`. Isso significa que o Next.js buscará os recursos necessários para essa página de forma antecipada, aumentando a velocidade de carregamento quando o usuário efetivamente acessar a página.

É importante observar que o prefetching só ocorre quando o JavaScript está ativado no navegador do usuário. Em navegadores sem suporte a JavaScript ou quando o JavaScript está desativado, o prefetching não será realizado.

O prefetching pode ser uma funcionalidade útil para otimizar a navegação do usuário em seu aplicativo Next.js, proporcionando transições mais suaves entre as páginas. No entanto, é importante considerar cuidadosamente onde e quando utilizar o prefetch, pois um uso excessivo pode resultar em desperdício de recursos e afetar negativamente o desempenho do aplicativo.
