# Parte 4 - Produtos & Checkout

## Notas Importantes

No arquivo `src\styles\pages\home.ts`, a referência do `styles()` da tag html `<a>` foi alterada para o próprio `<Link/>` do Next.js. Dessa forma o componente estilizado `<Product>` assume suas funcionalidades.`

## Conceitos

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
