# Referência visual - GeoPoint

Data da conferência técnica: 27/11/2026.
Situação: propriedades verificadas diretamente no arquivo Figma CHIAVE - Protótipo.

## 1. Fonte consultada

Arquivo enviado para a conferência:
https://www.figma.com/design/URbGgm66WeokwWRRh1BvCg/CHIAVE---Prot%C3%B3tipo?node-id=2260-412

Foram consultadas a página **Protótipo de alta fidelidade** (`2260:412`), a página **Componentes** (`16:34`) e os seguintes elementos:

| Elemento conferido | Identificador no Figma |
| --- | --- |
| Tela 1 - Login | `2260:513` |
| Tela 2 - Início | `2260:413` |
| Campo padrão | `2050:61` |
| Botão de ação primária | `196:95` |
| Conjunto de botões e estados | `2090:530` |
| Cartão de benefício | `2050:88` |

## 2. Cores confirmadas

| Aplicação observada no Figma | Valor confirmado | Onde foi observado |
| --- | --- | --- |
| Fundo das telas de Login e Início | `#18372E` | Telas `2260:513` e `2260:413` |
| Botão principal verde claro | `#83B29B` | Componente `196:95` e botão do Login |
| Texto claro das telas | `#F5F2E8` | Login e Início |
| Superfície menta | `#D5E9DD` | Cartão `2050:88` e botão secundário de alta fidelidade |
| Destaque cobre/laranja | `#A64E26` | Navegação ativa na tela Início e paleta da página Componentes |
| Fundo dos campos | `#FFFFFF` | Campo padrão e campos do Login |
| Borda dos campos e cartões | `#D1DDD4` | Campo padrão e cartão de benefício |
| Texto de apoio e placeholder | `#54645C` | Campo padrão e cartão de benefício |
| Verde forest | `#183F35` | Cartão, botões de alta fidelidade e paleta |
| Superfície paper | `#F4F6F1` | Botão de texto de alta fidelidade e paleta |
| Verde de sucesso | `#206449` | Paleta e indicador de navegação |
| Fundo suave de sucesso | `#E7F4EC` | Paleta e texto de apoio do Login |
| Fundo do botão secundário de ação | `#121A17` | Componente `196:97`, no conjunto `2090:530` |
| Texto do componente base de ação primária | `#08140F` | Componente `196:95` |

Há valores específicos por componente. Por exemplo, o texto do botão base de ação primária usa `#08140F`, enquanto os rótulos do campo padrão usam `#18372E`. Essas ocorrências não devem ser tratadas como um único valor global.

## 3. Tipografia confirmada

A família tipográfica usada nos elementos inspecionados é **Inter**.

| Elemento ou estilo | Tamanho | Peso | Altura de linha |
| --- | --- | --- | --- |
| CHIAVE Alta / Body | `16px` | Regular, `400` | `145%` / `1.45` |
| CHIAVE Alta / Small | `13px` | Regular, `400` | `145%` / `1.45` |
| CHIAVE Alta / Label | `16px` | Semi Bold, `600` | `130%` / `1.3` |
| CHIAVE Alta / Heading | `20px` | Semi Bold, `600` | `130%` / `1.3` |
| CHIAVE Alta / Caption | `12px` | Medium, `500` | `140%` / `1.4` |
| Título CLUBE DE BENEFÍCIOS, no Login | `24px` | Black, `900` | Normal no contexto exportado |
| Rótulos E-MAIL e SENHA, no Login | `16px` | Black, `900` | `145%` / `1.45` |
| Texto do componente base de ação primária | `24px` | Regular, `400` | Normal no contexto exportado |
| Texto ENTRAR, na instância do Login | `22px` | Black, `900` | Normal no contexto exportado |

Os estilos reutilizáveis de Body, Small, Label, Heading e Caption têm espaçamento entre letras igual a `0` nos dados consultados.

O protótipo contém ajustes por instância: o botão base tem texto de 24px Regular, enquanto a instância ENTRAR usa 22px Black. Ambos são valores existentes no arquivo, em elementos diferentes.

## 4. Campos confirmados

Referência principal: componente `2050:61` e seu campo interno `2050:63`.

| Propriedade | Valor confirmado |
| --- | --- |
| Largura do componente base | `354px` |
| Altura total do componente, incluindo rótulo e intervalo | `77px`, conforme o limite do componente |
| Altura do campo de entrada | `52px` |
| Raio dos cantos do campo | `12px` |
| Espessura da borda | `1px` |
| Cor da borda | `#D1DDD4` |
| Preenchimento horizontal | `14px` |
| Distância entre rótulo e campo no componente base | `6px` |
| Fonte do conteúdo do campo | Inter Regular, `16px`, altura de linha `145%` |
| Fonte do rótulo do componente base | Inter Regular, `13px`, altura de linha `145%` |

Na tela de Login, os campos têm largura de **349px**, altura de **52px** e cantos de **12px**. Seus rótulos foram alterados para Inter Black de **16px**. A diferença em relação ao componente base é um ajuste da tela.

## 5. Botões confirmados

| Elemento | Dimensões no Figma | Cantos | Texto |
| --- | --- | --- | --- |
| Ação primária, componente `196:95` | `354 × 48px` | `12px` | Inter Regular, `24px` |
| Ação secundária, componente `196:97` | `354 × 48px` | `12px` | Inter Regular, `24px` |
| Botão ENTRAR, instância `2260:1507` | `354 × 48px` | `14px` | Inter Black, `22px` |
| Botão secundário de alta fidelidade, `2050:52` | `354 × 52px` | `12px` | Inter Semi Bold, `16px` |
| Botão de texto de alta fidelidade, `2050:56` | `354 × 52px` | `12px` | Inter Semi Bold, `16px` |
| Botão primário carregando, `2050:48` | `354 × 52px` | `12px` | Inter Semi Bold, `16px` |

Os três botões de alta fidelidade com 52px de altura usam preenchimento horizontal de **16px**. O botão carregando tem intervalo de **10px** entre o indicador e o texto.

## 6. Cartão e espaçamentos confirmados

Referência: cartão de benefício `2050:88`.

| Propriedade | Valor confirmado |
| --- | --- |
| Dimensão do cartão | `354 × 152px` |
| Fundo | `#D5E9DD` |
| Raio dos cantos | `20px` |
| Borda | `1px`, cor `#D1DDD4` |
| Preenchimento interno | `16px` |
| Intervalo principal entre blocos | `12px` |
| Intervalo entre imagem e textos | `12px` |
| Intervalo na coluna de textos | `3px` |
| Nome do parceiro | Inter Semi Bold, `16px`, altura de linha `130%` |
| Informação secundária | Inter Regular, `13px`, altura de linha `145%` |
| Destaque do desconto | Inter Black, `20px`, altura de linha `130%` |
| Legenda inferior | Inter Medium, `12px`, altura de linha `140%` |

Os valores de 6px, 12px, 14px e 16px aparecem em contextos específicos descritos neste documento. O arquivo não foi tratado como se tivesse um único espaçamento para todos os elementos.

## 7. Dimensões das telas inspecionadas

| Tela | Dimensões confirmadas |
| --- | --- |
| Login, `2260:513` | `402 × 875px` |
| Início, `2260:413` | `402 × 874px` |

Esses são tamanhos de quadros móveis no Figma. Os limites de 1180px para conteúdo, 840px para formulário e os pontos de adaptação de 760px e 360px do CSS anterior são decisões do frontend, não propriedades extraídas desses quadros.

## 8. Aplicação ao CRUD GeoPoint

A referência confirmada para a implementação é a família **Inter**, a paleta registrada e os padrões de campos, botões e cartões descritos acima.

A escolha visual é manter o verde claro nas ações principais e usar o cobre/laranja como destaque para a exclusão. A associação do laranja à exclusão é uma decisão do CRUD, acompanhada de confirmação antes de apagar; o uso observado no protótipo inclui a navegação ativa.