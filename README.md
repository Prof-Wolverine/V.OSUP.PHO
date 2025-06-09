# PowerSuplementos - Site para Loja de Suplementos

## Descrição do Projeto

Este é um site completo desenvolvido para uma loja de suplementos alimentares, criado com HTML, CSS e JavaScript puros. O projeto inclui design responsivo, funcionalidades interativas e uma estrutura profissional para e-commerce de suplementos.

## Características Principais

### 🎨 Design e Layout
- **Design Responsivo**: Adaptável para desktop, tablet e mobile
- **Interface Moderna**: Layout limpo e profissional
- **Cores Temáticas**: Esquema de cores azul e laranja para transmitir confiança e energia
- **Tipografia**: Fontes Google (Roboto e Montserrat) para melhor legibilidade

### 📱 Estrutura do Site

#### Cabeçalho (Header)
- Logo da empresa "PowerSuplementos"
- Barra de pesquisa centralizada
- Menu horizontal com: Início, Quem Somos, Fale Conosco, Endereço, WhatsApp
- Ícones de usuário e carrinho de compras
- Menu hambúrguer para dispositivos móveis

#### Menu Lateral (Sidebar)
- **Categorias de Produtos**:
  - 🏋️ Wheys
  - 💪 Hipercalóricos
  - ⚡ Pré-treinos
  - 💊 Vitaminas
  - 🧪 Minerais
  - 🌟 Colágenos
  - 🔬 Funcionais
  - 🥗 Alimentos
- Seção de ofertas especiais
- Banner promocional lateral

#### Conteúdo Principal
- **Slider de Banners**: Carrossel automático com promoções
- **Produtos em Destaque**: Grid de produtos com badges (Mais Vendido, Promoção, Novo)
- **Seções por Categoria**: Produtos organizados por tipo com descrições dos benefícios
- **Seção de Benefícios**: Por que escolher a PowerSuplementos
- **Newsletter**: Cadastro para receber ofertas

#### Rodapé (Footer)
- Informações da empresa
- Links rápidos de navegação
- Categorias de produtos
- Informações de contato
- Redes sociais
- Formas de pagamento

### 📄 Páginas Incluídas

1. **index.html** - Página inicial com produtos e categorias
2. **quem-somos.html** - História, missão, visão e valores da empresa
3. **fale-conosco.html** - Formulário de contato e informações
4. **endereco.html** - Localização, horários e informações da loja física

### ⚡ Funcionalidades JavaScript

#### Interatividade
- **Menu Responsivo**: Menu hambúrguer para dispositivos móveis
- **Slider Automático**: Carrossel de banners com navegação manual
- **Navegação por Categorias**: Filtros e navegação suave
- **Botão Voltar ao Topo**: Aparece ao rolar a página
- **Validação de Formulários**: Validação em tempo real dos campos

#### Simulações de E-commerce
- **Adicionar ao Carrinho**: Contador de itens no carrinho
- **Notificações Toast**: Feedback visual ao adicionar produtos
- **Busca de Produtos**: Funcionalidade de pesquisa (estrutura preparada)
- **FAQ Accordion**: Perguntas frequentes expansíveis

### 🎯 Benefícios Destacados

- **Entrega Rápida**: Entregamos em todo o Brasil com rapidez e segurança
- **Produtos Originais**: Garantia de produtos 100% originais e de qualidade
- **Pagamento Seguro**: Diversas formas de pagamento com total segurança
- **Suporte Especializado**: Equipe de especialistas para tirar suas dúvidas

## Estrutura de Arquivos

```
suplementos/
├── index.html              # Página principal
├── quem-somos.html         # Página sobre a empresa
├── fale-conosco.html       # Página de contato
├── endereco.html           # Página de localização
├── css/
│   └── styles.css          # Estilos principais
├── js/
│   └── main.js             # Scripts JavaScript
└── img/                    # Imagens (placeholders)
    ├── logo.png
    ├── banner1.jpg
    ├── banner2.jpg
    ├── banner3.jpg
    └── [outros arquivos de imagem]
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia profissional

## Recursos CSS Avançados

### Variáveis CSS (Custom Properties)
- Cores padronizadas
- Espaçamentos consistentes
- Tipografia unificada
- Transições e animações

### Design Responsivo
- **Mobile First**: Desenvolvido priorizando dispositivos móveis
- **Breakpoints**: 576px, 768px, 1024px
- **Grid Flexível**: Layout adaptável para diferentes telas
- **Imagens Responsivas**: Otimizadas para cada dispositivo

### Animações e Transições
- Hover effects nos produtos
- Transições suaves nos menus
- Animações de entrada nos elementos
- Feedback visual nas interações

## Funcionalidades de Acessibilidade

- **Navegação por Teclado**: Todos os elementos são acessíveis via teclado
- **ARIA Labels**: Rótulos para leitores de tela
- **Contraste Adequado**: Cores que atendem padrões de acessibilidade
- **Estrutura Semântica**: HTML semântico para melhor interpretação

## Como Usar

1. **Abrir o Site**: Abra o arquivo `index.html` em qualquer navegador moderno
2. **Navegar**: Use o menu superior ou lateral para explorar as páginas
3. **Testar Funcionalidades**: 
   - Adicione produtos ao carrinho
   - Preencha o formulário de contato
   - Teste o menu responsivo em dispositivos móveis
   - Navegue pelas categorias de produtos

## Personalização

### Cores
As cores podem ser facilmente alteradas modificando as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #ff6600;
    /* outras variáveis */
}
```

### Conteúdo
- **Produtos**: Adicione novos produtos editando o HTML
- **Imagens**: Substitua os placeholders por imagens reais
- **Textos**: Personalize todos os textos conforme sua marca
- **Informações de Contato**: Atualize telefones, endereços e e-mails

### Funcionalidades
- **Integração com Backend**: O código está preparado para integração com APIs
- **Sistema de Pagamento**: Estrutura pronta para integração com gateways
- **Banco de Dados**: Formulários prontos para envio de dados

## Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, Tablet, Smartphone
- **Sistemas**: Windows, macOS, Linux, iOS, Android

## Próximos Passos (Sugestões)

1. **Integração com Backend**: Conectar com sistema de gerenciamento
2. **Sistema de Pagamento**: Implementar gateway de pagamento
3. **Banco de Dados**: Conectar com banco para produtos e pedidos
4. **SEO**: Otimizar para mecanismos de busca
5. **Analytics**: Implementar Google Analytics
6. **Chat Online**: Adicionar sistema de atendimento

## Suporte

Para dúvidas ou sugestões sobre este projeto, entre em contato através dos canais disponíveis na página "Fale Conosco" do site.

---

**Desenvolvido com ❤️ para PowerSuplementos**  
*Sua loja de suplementos alimentares para uma vida mais saudável*

