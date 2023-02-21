/* eslint-disable max-len */
import projectPixelsArt from './videos/projectPixelsArt.gif';
import shoppingCart from './videos/shoppingcart.gif';
import tryunfo from './videos/tryunfo.gif';

export const projectsData = [
  {
    name: 'Pixels Art',
    gif: projectPixelsArt,
    description: 'Um dos meus primeiros projetos unindo HTML, CSS e JavaScript. Ele consiste em um quadro de pixels que pode ser colorido de acordo com a vontade do usuário. Todas as funções do projeto foram feitas usando apenas JavaScript puro.',
    link: 'https://wallacerodrigo.github.io/trybe-project-pixel-art/',
    github: 'https://github.com/WallaceRodrigo/trybe-project-pixel-art',
  },

  {
    name: 'Shopping Cart',
    gif: shoppingCart,
    description: 'Um carrinho de compras completamente funcional, feito usando JavaScript e o framework Vite. A aplicação conta com funções para adicionar itens ao carrinho, removê-los, contador preciso de valor dos itens e consulta de CEP com o uso de APIs.',
    link: 'https://wallace-rodrigo-shopping-cart.vercel.app/',
    github: 'https://github.com/WallaceRodrigo/shopping-cart',
  },

  {
    name: 'Tryunfo',
    gif: tryunfo,
    description: 'Meu primeiro projeto com ReactJS, um deck de cartas no estilo SuperTrunfo com o tema Pokémon. A aplicação conta com funções para adicionar nome, descrição, imagem, status e tipo do Pokémon escolhido. Além disso, também possui filtros de pesquisa por nome, raridade e tipo.',
    link: 'https://wallace-rodrigo-tryunfo.vercel.app/',
    github: 'https://github.com/WallaceRodrigo/project-tryunfo',
  },

];
