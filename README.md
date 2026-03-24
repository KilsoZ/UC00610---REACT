# PsicólogoFinder

Website desenvolvido para a UC00610 que permite pesquisar psicólogos por localização geográfica, ver os seus perfis e encontrar consultórios num mapa interativo.

O tema está alinhado com o PsyFlow (projeto final UC00615) — os componentes desenvolvidos aqui serão reutilizados no sistema real quando o backend estiver pronto.

## Tecnologias

- React + Vite
- Bootstrap 5
- Mapbox GL JS via react-map-gl v7
- Dados mock em JSON que simulam a futura API REST do PsyFlow

## Funcionalidades

- Mapa interativo com marcadores dos consultórios presenciais
- Popup com foto e nome do psicólogo e endereço ao clicar no marcador
- Clicar na foto de um psicólogo faz zoom no mapa para o seu consultório
- Listagem de psicólogos em cards responsivos
- Página de detalhe de cada psicólogo
- Consultórios online identificados sem marcador no mapa

## Como executar

Criar um ficheiro `.env` na raiz do projeto com o token do Mapbox:
```
VITE_MAPBOX_TOKEN=pk.xxxxxxxxxxxxxxx
```
https://docs.mapbox.com/api/guides/

Depois:
```bash
npm install
npm run dev
```
