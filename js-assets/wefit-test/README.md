# WeFit Test - Transformações JavaScript

Este projeto demonstra transformações dinâmicas do DOM usando JavaScript puro, conforme especificado nos prints de referência.

## Transformações Implementadas

### 1. Header
- **Antes**: Tema claro com texto alinhado à esquerda e botão azul
- **Depois**: Tema escuro com texto alinhado à direita e botão verde

### 2. Cards
- **Antes**: Ordem: Animais, Tecnologia, Pessoas, Natureza
- **Depois**: Ordem: Natureza, Animais, Pessoas, Tecnologia
- **Mudança adicional**: Botão do card "Animais" alterado de azul para verde

### 3. Lista
- **Antes**: 3 itens com "Primeiro item" destacado
- **Depois**: 5 itens com "Quarto item" destacado

### 4. Menu
- **Antes**: Menu vertical (botões empilhados)
- **Depois**: Menu horizontal (botões lado a lado)

## Como Testar

### Opção 1: Servidor Local
```bash
# Na pasta wefit-test
python -m http.server 8000
# ou
npx serve .
```

Acesse: http://localhost:8000

### Opção 2: Abrir Diretamente
Abra o arquivo `index.html` diretamente no navegador.

## Verificação das Transformações

Abra o Console do navegador (F12) para ver as mensagens de log que confirmam cada transformação:

1. **Header**: "Header transformado: tema escuro, alinhamento à direita e botão verde"
2. **Cards**: "Cards reordenados: Natureza, Animais, Pessoas, Tecnologia"
3. **Lista**: "Lista expandida: 5 itens com 'Quarto item' destacado"
4. **Menu**: "Menu convertido de vertical para horizontal"

## Estrutura do Código

- `index.html`: Estrutura HTML inicial
- `js/main.js`: Script com todas as transformações
- `css/main.css`: Estilos CSS
- `css/bootstrap.css`: Framework Bootstrap

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Bootstrap 4
- jQuery (para compatibilidade)

## Funcionalidades do JavaScript

### Funções Principais:
- `transformHeader()`: Aplica tema escuro e alinhamento à direita
- `transformCards()`: Reordena cards e altera cor do botão
- `transformList()`: Adiciona itens e muda destaque
- `transformMenu()`: Converte menu vertical para horizontal
- `verifyTransformations()`: Verifica se todas as transformações foram aplicadas

### Eventos:
- `DOMContentLoaded`: Garante que o DOM esteja carregado antes das transformações

## Resultado Esperado

Após carregar a página, você deve ver:
- Header com fundo escuro e conteúdo alinhado à direita
- Cards reordenados com o botão do card "Animais" em verde
- Lista expandida com 5 itens e "Quarto item" destacado
- Menu horizontal com botões lado a lado
