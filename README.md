# Helmana Macêdo — site React

Site institucional de fonoaudiologia construído com React + Vite, com layout responsivo para celular, tablet e desktop.

## Requisitos
- Node.js 18 ou superior
- npm

## Executar localmente
```bash
npm install
npm run dev
```
Abra o endereço local mostrado pelo Vite no terminal.

## Validar a versão de produção
```bash
npm run build
npm run preview
```
Os arquivos prontos para publicação são gerados na pasta `dist/`.

## Imagens e arquivos
Copie os arquivos originais para dentro de `public/`, preservando esta estrutura:
```text
public/
  fotos/
    foto-marca-consulta.jpeg
    perfil.jpeg
    foto-localização.jpeg
    resultado.1.jpeg
    resultado2.jpeg
    resultado3-2.jpeg
  ebook/
    EbookEstimule (1).pdf
```
O projeto inclui um fallback visual caso a foto de perfil ou as imagens de resultados ainda não estejam na pasta.

## Personalizar contato
No início de `src/App.jsx`, altere `WHATSAPP_NUMBER` e `WHATSAPP_MESSAGE` para atualizar o contato e a mensagem padrão.

## Publicar
Pode ser publicado em Vercel, Netlify ou outro serviço compatível com aplicações Vite. Na Vercel, selecione o framework Vite; o comando de build é `npm run build` e a pasta de saída é `dist`.

## Acessibilidade e robustez incluídas
- Navegação móvel acessível com botão de abrir/fechar
- Link para pular diretamente ao conteúdo
- Estados de foco visíveis por teclado
- Layout fluido e breakpoints para telas pequenas e grandes
- Preferência `prefers-reduced-motion`
- Metadados básicos para mecanismos de busca
- Links externos com `rel="noreferrer"`
- Mapa com título acessível e carregamento preguiçoso
- Imagens com texto alternativo e estados de fallback

## Observações
- O site é estático; não coleta nem armazena dados de pacientes.
- Antes de publicar depoimentos ou imagens de pacientes, confirme as autorizações necessárias e revise o conteúdo para preservar privacidade.
- Confirme o endereço, o número de WhatsApp, as credenciais profissionais e a disponibilidade do PDF antes de colocar o site no ar.
