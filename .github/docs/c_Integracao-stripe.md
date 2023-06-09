# Parte 3 - Integração com Stripe

## Notas Importantes

- As variáveis de ambiente no NextJS devem ser nomeadas como `.env.local`. O terminal do modo em desenvolvimento irá reconhecer o arquivo como nesse exemplo: `info Loaded env from C:**\**\ignite-shop\.env.local`
- a especificação de `images: {domains: ["files.stripe.com"],}` dentro do arquivo next.config.js serve para indicar que os arquivos de imagem e vídeo oriundos do Stripe podem ser otimizados.

### `src\lib\stripe.ts`

- É possível postfixar uma expressão com `!` para dizer ao TypeScript que você sabe que ele não é `null` ou `undefined`. Isso funciona da mesma forma que uma asserção `as`. Isso acontece pois o TypeScript não reconhece as variáveis e valores que colocamos nos arquivos de variável ambiente, então o TypeScript sempre considera que o valor pode ser uma `string` ou `undefined` caso você por exemplo não preencha o valor.
- Outra forma é incluir as chaves dentro da função nativa `String()`, para garantir a transformação do dado em uma `string`.
- O versionamento deve ser consultado [AQUI](https://stripe.com/docs/api/request_ids). É recomendado utilizar a última versão do API.

### `src\pages\index.tsx`

- `expand: ["data.default_price"]`: recomenda-se a utilização do `data` para expandir a lista de preços e garantir o acesso as propriedade dos preços dos produtos cadastrados na API do Stripe.
- `price = product.default_price as Stripe.Price`: tipagem das propriedade dos preços

## Conceitos

- `data fetching`: Data fetching é o processo de obter dados de uma fonte externa, como um servidor web, um banco de dados ou uma API. É uma operação comum em desenvolvimento de software, especialmente em aplicativos que dependem de dados em tempo real ou que precisam buscar informações de um servidor. O data fetching é essencial para a construção de aplicativos dinâmicos e interativos, pois permite que eles obtenham e exibam dados atualizados aos usuários. Ao implementar o data fetching, é importante considerar fatores como segurança, eficiência na transferência de dados e tratamento adequado de erros e exceções.

## Recomendações

### `getServerSideProps`

O `getServerSideProps` é uma função especial do Next.js que permite buscar dados no lado do servidor antes de renderizar o componente. Essa função é executada a cada requisição, ou seja, os dados são buscados sempre que a página é acessada.

Aqui está um exemplo básico de como usar o `getServerSideProps` para buscar dados no lado do servidor:

```jsx
// pages/my-page.js

function MyPage({ data }) {
  return <div>{data}</div>;
}

export async function getServerSideProps() {
  // Lógica para buscar os dados no lado do servidor
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default MyPage;
```

Neste exemplo, a função `getServerSideProps` é exportada juntamente com o componente `MyPage`. Ela faz uma requisição HTTP para buscar os dados da API (no exemplo, `https://api.example.com/data`). Em seguida, ela retorna um objeto com a propriedade `props` que contém os dados buscados.

No componente `MyPage`, você pode acessar os dados como uma propriedade. O Next.js irá pré-renderizar a página no servidor com os dados buscados antes de enviá-la para o cliente.

O `getServerSideProps` é útil quando você precisa buscar dados que são específicos para cada requisição, como dados que dependem de parâmetros da URL ou dados que estão sempre mudando. No entanto, é importante ter em mente que o uso do `getServerSideProps` pode afetar o desempenho do seu aplicativo, pois os dados são buscados a cada requisição.

Se você tiver dados que podem ser pré-renderizados e não precisam ser atualizados em tempo real, pode considerar o uso do `getStaticProps` em vez do `getServerSideProps`. O `getStaticProps` busca os dados no momento da construção da página e gera uma versão estática da página, que pode ser armazenada em cache e servida de forma mais eficiente.

Os dados são buscados no lado do servidor antes de renderizar a página e, portanto, são exibidos mesmo quando o JavaScript está desabilitado no navegador do cliente. Isso ocorre porque a busca dos dados acontece no servidor durante a construção da página e o HTML resultante é enviado para o cliente.

### É necessário gerar novo `build` ao atulizar uma página em SSG?

Não necessariamente, atualmente nós temos no NextJS o que chamamos de ISR, que é Incremental Static Generation e esse conceito permite que a gente gere novas versões das páginas sem necessariamente fazer um novo build, apenas revalidando o cache.

E uma das funcionalidades disso, é justamente o On demand revalidation que permite você revalidar a página sem necessidade de um novo build, a partir de uma chamada à API por exemplo.

Você pode dar uma lida nisso por aqui: <https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation>

Basta você implementar um webhook no stripe, que quando algum produto for atualizado, envie uma chamada para API por exemplo /revalidate, por lá você pode recuperar o id do produto e revalidar somente a página desse produto.

Aqui pelo fórum eu já dei um exemplo disso com Hygraph, mas é praticamente a mesma coisa, apenas mudaria pro stripe: <https://app.rocketseat.com.br/h/forum/react-js/7a2ef279-44d6-4b44-bd0c-c26c29f962e4>

PS: se Você alterou um link, nesse caso, se for uma alteração no código e não no conteúdo que está sendo gerado de forma dinâmica, vai precisar de um novo build sim.
