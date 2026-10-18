@AGENTS.md

## Stack tècnic
- Frontend: Next.js 15 (App Router) + TypeScript
- Contingut: Markdown (gray-matter + next-mdx-remote)
- Estils: Tailwind CSS

## Skills instal·lades i quan usar-les

### `taste-skill` (Leonxlnx)
Fes servir aquesta skill sempre que generis o modifiquis interfícies noves
(pàgines, components, seccions). Abans de crear disseny, llegeix el context:
indústria, audiència, to i família de layout, per evitar l'aspecte genèric
típic de IA (Inter per tot arreu, degradats porpra-blau, targetes niades).

### `impeccable` (pbakaus)
Fes servir aquesta skill per revisar i polir qualsevol UI ja existent:
- `/impeccable audit` → abans de donar per bo un component o pàgina
- `/impeccable polish` → per millorar l'aspecte visual d'una UI ja funcional
- `/impeccable critique` → quan vulguis una revisió crítica abans de fer merge

Executa `/impeccable init` la primera vegada en un projecte nou perquè
generi el context (fes-ho ara si encara no s'ha fet en aquest repo).

### `emil-design-eng` / `review-animations` (emilkowalski)
Fes servir per dissenyar i afinar animacions i micro-interaccions (easing,
timing, jerarquia de moviment), i per revisar-les de manera estricta abans
de donar-les per bones.

## Components UI (21st.dev)
Quan calgui un component d'interfície comú (formularis, modals, navbars,
cards, taules), prioritza buscar-lo a 21st.dev abans de crear-lo des de
zero. S'instal·la amb:
```
npx shadcn add <url-del-component>
```
Adapta sempre el component resultant als tokens de disseny i convencions
ja existents en aquest projecte (no dupliquis estils ni introdueixis
llibreries innecessàries si ja tenim una solució equivalent).

## Convencions de codi
- TypeScript, amb punt i coma
- Components funcionals amb hooks, no classes
- Nomenclatura de fitxers: kebab-case per carpetes, PascalCase per components

## Migracions i canvis de codi
Aquest projecte prové sovint de migracions parcials o incompletes.
Quan revisis o repassis codi ja existent:
1. Abans de donar una solució per tancada, pregunta si falta algun
   fragment de codi rellevant (fitxers relacionats, imports, config).
2. Llista explícitament els errors detectats i els canvis suggerits,
   no els apliquis directament sense mostrar-los primer.
3. Marca clarament què és una suposició vs. què està confirmat pel codi
   que has vist.
