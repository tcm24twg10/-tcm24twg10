# Produto Final
Netlify link - https://tcm24twg10.netlify.app/

## Descrição
  O produto é um site denominado "Sins & Suitcases", que tem como tema central os sete pecados capitais, aplicados a viagens personalizadas. O blog é apresentado por três pessoas, que partilham as suas experiências de viagem a vários destinos. O site inclui páginas dedicadas aos destinos visitados, uma secção "Sobre" e uma página de contacto. Também conta com um formulário, imagens e informações de contacto, entre outros recursos.

## Instruções de Instalação e Configuração
Para utilizar o site, é necessário dispor de navegadores modernos que suportem HTML5, CSS3 e JavaScript. Existem diversas formas de executar o site. A primeira consiste em extrair o conteúdo em formato ZIP e abrir o ficheiro index.html diretamente no navegador. Outra alternativa é utilizar o GitHub, instalando os ficheiros separados numa pasta local para acesso ao site. Contudo, importa referir que algumas funcionalidades do site podem não ser exibidas corretamente desta forma, uma vez que o XML não permite determinadas integrações.
Uma abordagem mais completa seria abrir o projeto no Visual Studio Code e utilizar a extensão Live Server, que permite criar um servidor local para visualizar o site de forma dinâmica e funcional, simulando o seu ambiente de produção. A extensão Live Server é particularmente útil, pois atualiza automaticamente a visualização do site sempre que são feitas alterações no código.
Por fim, o site também pode ser acedido diretamente através da sua hospedagem na plataforma Netlify, permitindo uma experiência completa e integrada para os utilizadores.

## Configurações
Caso deseje alterar as imagens, basta substituir os ficheiros na pasta fotos, mantendo os mesmos nomes dos ficheiros originais para evitar qualquer problema com o funcionamento do código. Para alterar cores, fontes ou outros aspectos visuais, pode personalizar o ficheiro style.css, onde estão definidas todas as configurações de design do site. Os textos podem ser editados diretamente nos ficheiros HTML, ajustando os conteúdos de acordo com as necessidades. Os ícones utilizados são provenientes do site Ionic e podem ser substituídos ou adaptados, caso deseje incorporar novos ícones ou alterar os já existentes. 

Além disso, para personalizar o layout das páginas, é possivél ajustar a estrutura do HTML, adicionando ou removendo elementos. No caso de querer adicionar novas funcionalidades, como animações ou imterações, poderá incluir bibliotecas JavaScript adicionadas ou criar scripts personalizados. 

Se desejar incluir novos estilos ou temas para site, pode criar diferentes ficheiros CSS e alterná-los no cabeçalho dos ficheiros HTML. Para adicionar novas páginas ao site, crie um ficheiro HTML com o layout desejado e adicione os links para navegar até essa página no menu ou e outros locais relevantes. 

## Regras de Utilização
Uma das principais limitações do website reside no facto de o formulário de contacto não estar integrado com uma base de dados funcional, o que dificulta o envio de mensagens através dessa ferramenta. Embora tenhamos tentado implementar uma solução utilizando a plataforma Formspree, o que inicialmente parecia uma boa alternativa, não obtemos os resultados esperados. Após várias tentativas e ajustes, decidimos, por enquanto, optar por uma abordagem mais simples: substituímos o formulário por um pop-up de agradecimento. Este pop-up aparece após o utilizador submeter o formulário, transmitindo a mensagem "Obrigada" como confirmação da tentativa de envio. Embora esta solução seja temporária e não permita o envio de mensagens, ela serve para dar um retorno imediato ao utilizador, mantendo o site funcional enquanto trabalhariamos numa solução mais permanente.

## Ajuda à Navegação
Com o principal objetivo de auxiliar a navegação do utilizador, o menu do site inclui links diretos para as páginas principais do projeto: Home, About Us, Sins, Contact.

## Validação do formulário
O formulário presente na página **Contacto** não realiza validação, uma vez que seria necessário configurar uma base de dados para armazenar e processar as informações submetidas pelos utilizadores. Contudo, o grupo não possui, atualmente, os conhecimentos técnicos necessários para implementar essa funcionalidade. 

Como resultado, o formulário é meramente ilustrativo, sem qualquer funcionalidade prática de envio ou armazenamento de dados.

## Validação XML e HTML
O código foi validado em ferramentas como o **W3C HTML Validator**, o **W3C CSS Validator** e também em validadores de **XML** e **XSD**. DUrante o processo, foram identificados alguns erros e avisos, que foram devidamente corrigidos para garantir a conformidade com os padrões da web e da estrturação de dados.

## Detalhes de Implementação
O projeto tem como objetivo a criação de um layout versátil, desenvolvido utilizando as tecnologias **HTML5**, **CSS3** e **JavaScript**, garantindo que a interface seja funcional e acessível. Para tornar a experiência mais interativa, foi implementado o uso de JavaScript em funconalidades como a página de **Contactos**, onde, ao clicar em enviar o formulário, surge um pop-up com o agradecimento. 

A tipografia utiizada foi a **Outfit**, exportada do google fonts. Foi também utilizada uma biblioteca de ícones, como já referido anteriormente. As imagens encontram-se organizadas numa pasta específica denominada "img", permitindo uma gestão eficiente e facilitando eventuais alterações ou substituições.
 
 O esquema de cores foi pensado de forma simbólica e intencional, o **vermelho**, como cor predominante, representa a transgressão associada aos **7 Pecados Capitais**. Para complementar, foram escolhidas cores harmoniosas e tonalidades próximas, que criam uma identidade visual coesa e alinhada com o conceito do projeto.
