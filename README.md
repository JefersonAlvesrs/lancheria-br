# LANCHERIA BR — Site demonstrativo

Landing page responsiva para uma lancheria e bar de bairro, com destaque para pastéis de carne durante a semana e frango inteiro assado acompanhado de 10 polentas fritas aos domingos.

## Tecnologias
- HTML5 semântico
- CSS3 (Grid, Flexbox, media queries)
- JavaScript puro

## Funcionalidades
- Menu responsivo no celular
- Seções de especialidades, bebidas, informações e contato
- Botões de WhatsApp com mensagens pré-preenchidas (ativados após configurar um número autorizado)
- Link para Google Maps (ativado após configuração)
- Horários e endereço configuráveis
- Ajustes de acessibilidade: navegação por teclado, skip link, textos alternativos e redução de movimento

## Como executar
Abra `index.html` no navegador ou use a extensão **Live Server** no VS Code.

## Como personalizar
Abra `script.js` e edite o objeto `CONFIG` no início do arquivo:

- `whatsapp`: número autorizado com código do país + DDD, somente dígitos.
- `endereco`: endereço completo.
- `googleMapsUrl`: link do local no Google Maps.
- `horarioSemana`: horário durante a semana.
- `horarioDomingo`: horário de domingo.

**Importante:** não configure um número fictício que possa pertencer a outra pessoa. Enquanto o número estiver vazio, os botões permanecem em modo de demonstração.

## Imagens
As imagens em `assets/` foram recortadas de uma composição visual ilustrativa gerada por IA. Não representam necessariamente os produtos, o ambiente ou as marcas comercializadas pela lancheria. Substitua por fotografias reais antes de divulgar o site como representação fiel do estabelecimento.

## Próximos passos
- Confirmar preços, endereço, horários e telefone
- Substituir imagens ilustrativas por fotos reais, se disponíveis
- Testar em aparelhos reais e diferentes navegadores
- Publicar via GitHub Pages ou serviço de hospedagem estática

Projeto demonstrativo de portfólio.


## Dados atualizados (versão 1.1)
- Endereço informado: BR-116, km 145, nº 15945, CEP 95059-520, Caxias do Sul - RS. Link para pesquisa no Google Maps (local exato ainda não verificado).
- Horário aproximado: todos os dias a partir das 6h, geralmente até as 18h; pode variar conforme movimento.
- WhatsApp de teste: (54) 99161-6996.
- Frango assado: reservas exclusivamente por telefone fixo; número ainda não confirmado, portanto **nenhum telefone fictício clicável foi publicado**.
- Ajustes de responsividade: menu móvel a partir de 980px, cartões e tipografia para telas menores.

Para testar o WhatsApp, abra o site, clique em “Falar no WhatsApp” e confirme o envio na conversa aberta.
