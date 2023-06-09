# Parte 4 - Produtos & Checkout

## Notas Importantes

- No arquivo `src\styles\pages\home.ts`, a referência do `styles()` da tag html `<a>` foi alterada para o próprio `<Link/>` do Next.js. Dessa forma o componente estilizado `<Product>` assume suas funcionalidades.`

### `src/pages/index.tsx`

- `const response = await stripe.products.list({...})` - retorna a listagem dos produtos cadastrados no Sripe.

### `src/pages/product/[id].tsx`

- `const product = await stripe.products.retrieve(productId, {expand: ["default_price"],})` - busca os produtos de dentro do Stripe, passando o id do produto como parâmentro.
- `getStaticPaths` - método que devolve os ids dos produtos e especifica quais páginas estáticas devem ser geradas durante o build do nosso app.

## Recomendações

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

## Navegação no Next.js

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

## Qual a função do método `getStaticPaths`?

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
