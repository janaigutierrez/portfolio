export const metodologiesAgils = {
    id: 'metodologies-agils',
    category: 'backend',
    code: 'PM01',

    metadata: {
        difficulty: 'intermediate',
        priority: 'high',
        estimatedTime: '15 min',
        status: 'published',
        tags: ['agile', 'scrum', 'kanban', 'management', 'projects'],
        relatedBlogs: [],
        version: '1.0',
        lastUpdate: '2025-01-26'
    },

    content: {
        ca: {
            title: 'Guia Completa de Metodologies Àgils: Scrum i Kanban',
            slug: 'metodologies-agils',
            excerpt: 'Descobreix com aplicar metodologies àgils als teus projectes. Aprèn Scrum, Kanban, sprints, backlogs i totes les eines per treballar de forma eficient.',
            readTime: '15 min',
            content: `
# 1. Què és Agile?

Agile és una mentalitat de desenvolupament que prioritza la flexibilitat, col·laboració i lliuraments incrementals. En lloc de fer un gran llançament al final, Agile proposa lliurar software funcional de manera contínua.

## Principis Bàsics d'Agile

Els principis fonamentals d'Agile són:
- Treballar en iteracions curtes (sprints)
- Prioritzar funcionalitats segons valor
- Mantenir comunicació constant amb l'equip i el client
- Adaptar-se ràpidament als canvis

**Al final de cada sprint tens software funcionant** que pots ensenyar al client. No codi a mitges, features completes que funcionin.

## El Backlog: Llista de Tasques Prioritzades

El **Product Backlog** és simplement la llista de tot el que s'ha de fer, ordenat per prioritat.

Està format per **User Stories** (casos d'usuari): funcionalitats explicades des del punt de vista de qui les usarà.

### Estructura Típica d'un Backlog

🔴 **Part superior (Prioritat ALTA)**: User Stories ben definides, requisits clars, llestes per fer
🟡 **Part mitjana (Prioritat MITJANA)**: User Stories menys definides
🟢 **Part inferior (Prioritat BAIXA)**: User Stories ambigües, idees per explorar

### User Stories i Tasks

Cada User Story es desglossa en tasks concretes.

**Exemple:** Story "Afegir targeta de crèdit"
- Task 1: Crear formulari (Frontend)
- Task 2: Validar dades
- Task 3: Guardar targeta encriptada (Backend)
- Task 4: Tests

## CI/CD: Automatització del Desplegament

**CI (Continuous Integration)**: Els developers integren el seu codi al repositori principal freqüentment. Cada vegada que algú fa push, tests automàtics s'executen per detectar errors ràpid.

**CD (Continuous Delivery/Deployment)**: Si els tests passen, el codi es desplega automàticament a staging o producció.

**Per què és important per Agile?** Permet entregues freqüents i petites. En lloc de desplegar manualment cada mes, fas desplegar automàticament cada dia.

**DevOps**: És el rol/cultura que s'encarrega d'automatitzar tot això. Eines populars: GitHub Actions, GitLab CI, Jenkins, CircleCI.

## Planning Poker: Estimar Tasques

Com saps quant trigarà una tasca? **Planning Poker** és una tècnica per estimar en equip.

**Com funciona:**
1. Product Owner explica una User Story
2. Cada developer escull una carta amb story points (1, 2, 3, 5, 8, 13...)
3. Tots ensenyen les cartes alhora
4. Si hi ha diferències → debat
5. Es torna a votar

**Story points NO són hores**, són una mesura relativa de complexitat/esforç.

## Deute Tècnic

**Deute tècnic** és codi de baixa qualitat o tasques posposades per complir deadlines.

És com un préstec: guanyes temps ara, però pagaràs (amb interessos) després.

**És acceptable?** A vegades sí, però cal gestionar-lo:
- No deixar que s'acumuli massa
- Dedicar temps en futurs sprints a pagar-lo
- Entendre que frena el desenvolupament futur

---

# 2. SCRUM: El Framework Estructurat

Scrum agafa els principis d'Agile i els estructura en:
- **3 rols** concrets
- **4 cerimònies** (reunions) definides
- **3 artefactes** específics
- **Sprints** de durada fixa

És el framework àgil més popular, especialment per projectes nous amb deadlines.

## Els 3 Rols de Scrum

### Product Owner (PO)
**Responsabilitat:** Decideix QUÈ es fa i PER QUÈ
- Prioritza el Product Backlog
- Defineix User Stories
- Accepta/rebutja el treball fet
- Representa les necessitats del negoci/client

### Scrum Master (SM)
**Responsabilitat:** COM funciona l'equip
- Facilita les cerimònies
- Elimina blocatges i obstacles
- S'assegura que l'equip segueixi Scrum
- **NO és un cap**, és un facilitador

### Development Team
**Responsabilitat:** FER el treball
- Inclou developers, testers, dissenyadors
- Qualsevol rol necessari per entregar software

## Els 3 Artefactes de Scrum

**Product Backlog**: Llista prioritzada de tot el treball del projecte (gestionat pel PO)

**Sprint Backlog**: Llista d'elements per aquest sprint (creat al Sprint Planning)

**Increment**: El software funcionant resultant d'un sprint. Ha de complir la **Definition of Done (DoD)**

### Exemple de DoD:
✅ Codi escrit i funcionant
✅ Tests unitaris passant
✅ Code review aprovada
✅ Documentació actualitzada
✅ Testejar en staging
✅ Sense errors crítics

## Les 4 Cerimònies de Scrum

### 1. Sprint Planning (Planificació)
**Quan:** Primer dia del sprint
**Durada:** 2-4h per sprint de 2 setmanes
**Participants:** Tot l'equip Scrum

**Objectiu:** Decidir què es farà aquest sprint i com

**Resultat:** Compromís clar de què s'entregarà

### 2. Daily Scrum (Reunió Diària)
**Quan:** Cada dia
**Durada:** 15 minuts MÀXIM
**Participants:** Development Team

**Format:** 3 preguntes:
1. Què vaig fer ahir?
2. Què faré avui?
3. Tinc algun bloqueig?

**Important:** NO és una reunió de status per al cap. És per sincronitzar l'equip.

### 3. Sprint Review (Demo)
**Quan:** Últim dia del sprint
**Durada:** 30-60 min
**Participants:** Equip + stakeholders

**Objectiu:** Mostrar el software funcionant (no PowerPoint!)

### 4. Sprint Retrospective (Retrospectiva)
**Quan:** Després de la Review
**Durada:** 30-45 min
**Participants:** NOMÉS equip Scrum

**Format:**
- 😊 **QUÈ HA ANAT BÉ?** Bona comunicació, Tests ben fets...
- 😔 **QUÈ HA ANAT MALAMENT?** PRs triguen massa, Servidor caigut...
- 💡 **QUÈ MILLOREM?** Revisar PRs en 4h, Tech meeting setmanal...

## Eines Visuals de Scrum

**Task Board (Tauler)**: TO DO | IN PROG | REVIEW | DONE

**Burndown Chart**: Gràfic del treball restant dia a dia

---

# 3. KANBAN: El Flux Continu

**Origen:** Creat per Taiichi Ohno a Toyota als anys 40-50 per gestionar producció de cotxes.

**Principi Just-In-Time:** Produir només el que es necessita, quan es necessita.

## Diferència Clau amb Scrum

**Scrum:** Sprints de durada fixa (2 setmanes). Al final, reset i nou sprint.

**Kanban:** Flux continu. No hi ha sprints, no hi ha reset. Les tasques entren i surten constantment.

## Principis de Kanban

### 1. Visualització del treball
Fer visible el treball invisible amb un tauler Kanban

### 2. Límit WIP (Work In Progress)
WIP = Nombre de tasques en curs simultàniament
**Principi clau:** Limitar el WIP per augmentar el focus

### 3. Sistema Pull (no Push)
- **Push:** Manager imposa tasques → Developer saturat
- **Pull:** Developer acaba tasca → Agafa següent del backlog
- **Avantatge:** L'equip controla la seva capacitat. No burnout.

### 4. Millora contínua
Analitzar constantment mètriques i optimitzar el flux

## El Tauler Kanban

**Bàsic:** TO DO | DOING | DONE

**Avançat:** BACKLOG | READY | DEV | REVIEW | TESTING | DONE
- Amb límits WIP per columna (ex: màx 3 tasques en DEV)

**Cada card representa:**
- Ticket (genèric)
- Bug
- User Story
- Task

## Mètriques de Kanban

**Lead Time:** Temps des que es crea una tasca fins que s'acaba (inclou espera)

**Cycle Time:** Temps des que comences fins que acabes (només treball)

**Throughput:** Nombre de tasques completades per setmana/mes

**WIP:** Nombre de tasques en curs
- WIP alt = multitasking = res s'acaba

---

# Resum Final

**AGILE** és la mentalitat general.

**SCRUM:**
- Sprints fixos
- Rols clars
- 4 cerimònies
- Ideal per projectes amb deadline

**KANBAN:**
- Flux continu
- Límits WIP
- Pull system
- Ideal per serveis continus

**SCRUMBAN:** Híbrid dels dos

**La clau:** Entendre què aporta cadascuna i adaptar-la al teu context.
            `,
            tips: [
                'Comença amb sprints curts (1-2 setmanes) per aprendre ràpid',
                'El Daily Scrum ha de ser de 15 minuts, no més',
                'Dedica temps a la Retrospectiva, és on més s\'aprèn',
                'Limita el WIP en Kanban per augmentar el focus',
                'No acumulis deute tècnic sense planificar com pagar-lo'
            ],
            warnings: [
                'Scrum NO és fer reunions sense sentit',
                'Planning Poker no són hores reals, són story points',
                'No saltis les Retrospectives, són essencials',
                'WIP alt = multitasking = baixa qualitat',
                'El Scrum Master NO és un cap'
            ]
        },

        es: {
            title: 'Guía Completa de Metodologías Ágiles: Scrum y Kanban',
            slug: 'metodologies-agils',
            excerpt: 'Descubre cómo aplicar metodologías ágiles a tus proyectos. Aprende Scrum, Kanban, sprints, backlogs y todas las herramientas para trabajar de forma eficiente.',
            readTime: '15 min',
            content: `
# 1. ¿Qué es Agile?

Agile es una mentalidad de desarrollo que prioriza la flexibilidad, colaboración y entregas incrementales. En lugar de hacer un gran lanzamiento al final, Agile propone entregar software funcional de manera continua.

## Principios Básicos de Agile

Los principios fundamentales de Agile son:
- Trabajar en iteraciones cortas (sprints)
- Priorizar funcionalidades según valor
- Mantener comunicación constante con el equipo y el cliente
- Adaptarse rápidamente a los cambios

**Al final de cada sprint tienes software funcionando** que puedes enseñar al cliente. No código a medias, features completas que funcionan.

## El Backlog: Lista de Tareas Priorizadas

El **Product Backlog** es simplemente la lista de todo lo que se ha de hacer, ordenado por prioridad.

Está formado por **User Stories** (casos de usuario): funcionalidades explicadas desde el punto de vista de quien las usará.

### Estructura Típica de un Backlog

🔴 **Parte superior (Prioridad ALTA)**: User Stories bien definidas, requisitos claros, listas para hacer
🟡 **Parte media (Prioridad MEDIA)**: User Stories menos definidas
🟢 **Parte inferior (Prioridad BAJA)**: User Stories ambiguas, ideas para explorar

### User Stories y Tasks

Cada User Story se desglosa en tasks concretas.

**Ejemplo:** Story "Añadir tarjeta de crédito"
- Task 1: Crear formulario (Frontend)
- Task 2: Validar datos
- Task 3: Guardar tarjeta encriptada (Backend)
- Task 4: Tests

## CI/CD: Automatización del Despliegue

**CI (Continuous Integration)**: Los developers integran su código al repositorio principal frecuentemente. Cada vez que alguien hace push, tests automáticos se ejecutan para detectar errores rápido.

**CD (Continuous Delivery/Deployment)**: Si los tests pasan, el código se despliega automáticamente a staging o producción.

**¿Por qué es importante para Agile?** Permite entregas frecuentes y pequeñas. En lugar de desplegar manualmente cada mes, despliegas automáticamente cada día.

**DevOps**: Es el rol/cultura que se encarga de automatizar todo esto. Herramientas populares: GitHub Actions, GitLab CI, Jenkins, CircleCI.

## Planning Poker: Estimar Tareas

¿Cómo sabes cuánto tardará una tarea? **Planning Poker** es una técnica para estimar en equipo.

**Cómo funciona:**
1. Product Owner explica una User Story
2. Cada developer escoge una carta con story points (1, 2, 3, 5, 8, 13...)
3. Todos enseñan las cartas a la vez
4. Si hay diferencias → debate
5. Se vuelve a votar

**Story points NO son horas**, son una medida relativa de complejidad/esfuerzo.

## Deuda Técnica

**Deuda técnica** es código de baja calidad o tareas pospuestas para cumplir deadlines.

Es como un préstamo: ganas tiempo ahora, pero pagarás (con intereses) después.

**¿Es aceptable?** A veces sí, pero hay que gestionarlo:
- No dejar que se acumule demasiado
- Dedicar tiempo en futuros sprints a pagarlo
- Entender que frena el desarrollo futuro

---

# 2. SCRUM: El Framework Estructurado

Scrum agarra los principios de Agile y los estructura en:
- **3 roles** concretos
- **4 ceremonias** (reuniones) definidas
- **3 artefactos** específicos
- **Sprints** de duración fija

Es el framework ágil más popular, especialmente para proyectos nuevos con deadlines.

## Los 3 Roles de Scrum

### Product Owner (PO)
**Responsabilidad:** Decide QUÉ se hace y POR QUÉ
- Prioriza el Product Backlog
- Define User Stories
- Acepta/rechaza el trabajo hecho
- Representa las necesidades del negocio/cliente

### Scrum Master (SM)
**Responsabilidad:** CÓMO funciona el equipo
- Facilita las ceremonias
- Elimina bloqueos y obstáculos
- Se asegura de que el equipo siga Scrum
- **NO es un jefe**, es un facilitador

### Development Team
**Responsabilidad:** HACER el trabajo
- Incluye developers, testers, diseñadores
- Cualquier rol necesario para entregar software

## Los 3 Artefactos de Scrum

**Product Backlog**: Lista priorizada de todo el trabajo del proyecto (gestionado por el PO)

**Sprint Backlog**: Lista de elementos para este sprint (creado en el Sprint Planning)

**Increment**: El software funcionando resultante de un sprint. Debe cumplir la **Definition of Done (DoD)**

### Ejemplo de DoD:
✅ Código escrito y funcionando
✅ Tests unitarios pasando
✅ Code review aprobado
✅ Documentación actualizada
✅ Testear en staging
✅ Sin errores críticos

## Las 4 Ceremonias de Scrum

### 1. Sprint Planning (Planificación)
**Cuándo:** Primer día del sprint
**Duración:** 2-4h por sprint de 2 semanas
**Participantes:** Todo el equipo Scrum

**Objetivo:** Decidir qué se hará este sprint y cómo

**Resultado:** Compromiso claro de qué se entregará

### 2. Daily Scrum (Reunión Diaria)
**Cuándo:** Cada día
**Duración:** 15 minutos MÁXIMO
**Participantes:** Development Team

**Formato:** 3 preguntas:
1. ¿Qué hice ayer?
2. ¿Qué haré hoy?
3. ¿Tengo algún bloqueo?

**Importante:** NO es una reunión de status para el jefe. Es para sincronizar el equipo.

### 3. Sprint Review (Demo)
**Cuándo:** Último día del sprint
**Duración:** 30-60 min
**Participantes:** Equipo + stakeholders

**Objetivo:** Mostrar el software funcionando (¡no PowerPoint!)

### 4. Sprint Retrospective (Retrospectiva)
**Cuándo:** Después de la Review
**Duración:** 30-45 min
**Participantes:** SOLO equipo Scrum

**Formato:**
- 😊 **¿QUÉ HA IDO BIEN?** Buena comunicación, Tests bien hechos...
- 😔 **¿QUÉ HA IDO MAL?** PRs tardan demasiado, Servidor caído...
- 💡 **¿QUÉ MEJORAMOS?** Revisar PRs en 4h, Tech meeting semanal...

## Herramientas Visuales de Scrum

**Task Board (Tablero)**: TO DO | IN PROG | REVIEW | DONE

**Burndown Chart**: Gráfico del trabajo restante día a día

---

# 3. KANBAN: El Flujo Continuo

**Origen:** Creado por Taiichi Ohno en Toyota en los años 40-50 para gestionar producción de coches.

**Principio Just-In-Time:** Producir solo lo que se necesita, cuando se necesita.

## Diferencia Clave con Scrum

**Scrum:** Sprints de duración fija (2 semanas). Al final, reset y nuevo sprint.

**Kanban:** Flujo continuo. No hay sprints, no hay reset. Las tareas entran y salen constantemente.

## Principios de Kanban

### 1. Visualización del trabajo
Hacer visible el trabajo invisible con un tablero Kanban

### 2. Límite WIP (Work In Progress)
WIP = Número de tareas en curso simultáneamente
**Principio clave:** Limitar el WIP para aumentar el foco

### 3. Sistema Pull (no Push)
- **Push:** Manager impone tareas → Developer saturado
- **Pull:** Developer acaba tarea → Agarra siguiente del backlog
- **Ventaja:** El equipo controla su capacidad. No burnout.

### 4. Mejora continua
Analizar constantemente métricas y optimizar el flujo

## El Tablero Kanban

**Básico:** TO DO | DOING | DONE

**Avanzado:** BACKLOG | READY | DEV | REVIEW | TESTING | DONE
- Con límites WIP por columna (ej: máx 3 tareas en DEV)

**Cada card representa:**
- Ticket (genérico)
- Bug
- User Story
- Task

## Métricas de Kanban

**Lead Time:** Tiempo desde que se crea una tarea hasta que se acaba (incluye espera)

**Cycle Time:** Tiempo desde que empiezas hasta que acabas (solo trabajo)

**Throughput:** Número de tareas completadas por semana/mes

**WIP:** Número de tareas en curso
- WIP alto = multitasking = nada se acaba

---

# Resumen Final

**AGILE** es la mentalidad general.

**SCRUM:**
- Sprints fijos
- Roles claros
- 4 ceremonias
- Ideal para proyectos con deadline

**KANBAN:**
- Flujo continuo
- Límites WIP
- Pull system
- Ideal para servicios continuos

**SCRUMBAN:** Híbrido de los dos

**La clave:** Entender qué aporta cada una y adaptarla a tu contexto.
            `,
            tips: [
                'Empieza con sprints cortos (1-2 semanas) para aprender rápido',
                'El Daily Scrum debe ser de 15 minutos, no más',
                'Dedica tiempo a la Retrospectiva, es donde más se aprende',
                'Limita el WIP en Kanban para aumentar el foco',
                'No acumules deuda técnica sin planificar cómo pagarla'
            ],
            warnings: [
                'Scrum NO es hacer reuniones sin sentido',
                'Planning Poker no son horas reales, son story points',
                'No te saltes las Retrospectivas, son esenciales',
                'WIP alto = multitasking = baja calidad',
                'El Scrum Master NO es un jefe'
            ]
        },

        en: {
            title: 'Complete Guide to Agile Methodologies: Scrum and Kanban',
            slug: 'metodologies-agils',
            excerpt: 'Discover how to apply agile methodologies to your projects. Learn Scrum, Kanban, sprints, backlogs and all the tools to work efficiently.',
            readTime: '15 min',
            content: `
# 1. What is Agile?

Agile is a development mindset that prioritizes flexibility, collaboration and incremental deliveries. Instead of making a big launch at the end, Agile proposes delivering functional software continuously.

## Basic Principles of Agile

The fundamental principles of Agile are:
- Working in short iterations (sprints)
- Prioritizing functionalities by value
- Maintaining constant communication with team and client
- Adapting quickly to changes

**At the end of each sprint you have working software** that you can show to the client. Not half-done code, complete features that work.

## The Backlog: Prioritized Task List

The **Product Backlog** is simply the list of everything that needs to be done, ordered by priority.

It's made up of **User Stories**: functionalities explained from the user's point of view.

### Typical Backlog Structure

🔴 **Top part (HIGH Priority)**: Well-defined User Stories, clear requirements, ready to do
🟡 **Middle part (MEDIUM Priority)**: Less defined User Stories
🟢 **Bottom part (LOW Priority)**: Ambiguous User Stories, ideas to explore

### User Stories and Tasks

Each User Story breaks down into concrete tasks.

**Example:** Story "Add credit card"
- Task 1: Create form (Frontend)
- Task 2: Validate data
- Task 3: Save encrypted card (Backend)
- Task 4: Tests

## CI/CD: Deployment Automation

**CI (Continuous Integration)**: Developers integrate their code into the main repository frequently. Each time someone pushes, automatic tests run to detect errors quickly.

**CD (Continuous Delivery/Deployment)**: If tests pass, code is automatically deployed to staging or production.

**Why is it important for Agile?** Allows frequent and small deliveries. Instead of deploying manually every month, you deploy automatically every day.

**DevOps**: The role/culture in charge of automating all this. Popular tools: GitHub Actions, GitLab CI, Jenkins, CircleCI.

## Planning Poker: Task Estimation

How do you know how long a task will take? **Planning Poker** is a technique for team estimation.

**How it works:**
1. Product Owner explains a User Story
2. Each developer chooses a card with story points (1, 2, 3, 5, 8, 13...)
3. Everyone shows cards at once
4. If there are differences → debate
5. Vote again

**Story points are NOT hours**, they're a relative measure of complexity/effort.

## Technical Debt

**Technical debt** is low-quality code or postponed tasks to meet deadlines.

It's like a loan: you gain time now, but you'll pay (with interest) later.

**Is it acceptable?** Sometimes yes, but it must be managed:
- Don't let it accumulate too much
- Dedicate time in future sprints to pay it
- Understand that it slows future development

---

# 2. SCRUM: The Structured Framework

Scrum takes Agile principles and structures them into:
- **3 concrete roles**
- **4 defined ceremonies** (meetings)
- **3 specific artifacts**
- **Fixed-duration Sprints**

It's the most popular agile framework, especially for new projects with deadlines.

## The 3 Scrum Roles

### Product Owner (PO)
**Responsibility:** Decides WHAT is done and WHY
- Prioritizes the Product Backlog
- Defines User Stories
- Accepts/rejects work done
- Represents business/client needs

### Scrum Master (SM)
**Responsibility:** HOW the team works
- Facilitates ceremonies
- Removes blockages and obstacles
- Ensures team follows Scrum
- **NOT a boss**, a facilitator

### Development Team
**Responsibility:** DOING the work
- Includes developers, testers, designers
- Any role necessary to deliver software

## The 3 Scrum Artifacts

**Product Backlog**: Prioritized list of all project work (managed by PO)

**Sprint Backlog**: List of items for this sprint (created at Sprint Planning)

**Increment**: The working software resulting from a sprint. Must meet the **Definition of Done (DoD)**

### Example of DoD:
✅ Written and working code
✅ Passing unit tests
✅ Approved code review
✅ Updated documentation
✅ Testing in staging
✅ No critical errors

## The 4 Scrum Ceremonies

### 1. Sprint Planning
**When:** First day of sprint
**Duration:** 2-4h per 2-week sprint
**Participants:** Entire Scrum team

**Objective:** Decide what will be done this sprint and how

**Result:** Clear commitment of what will be delivered

### 2. Daily Scrum
**When:** Every day
**Duration:** 15 minutes MAXIMUM
**Participants:** Development Team

**Format:** 3 questions:
1. What did I do yesterday?
2. What will I do today?
3. Do I have any blockers?

**Important:** It's NOT a status meeting for the boss. It's to synchronize the team.

### 3. Sprint Review (Demo)
**When:** Last day of sprint
**Duration:** 30-60 min
**Participants:** Team + stakeholders

**Objective:** Show working software (not PowerPoint!)

### 4. Sprint Retrospective
**When:** After Review
**Duration:** 30-45 min
**Participants:** ONLY Scrum team

**Format:**
- 😊 **WHAT WENT WELL?** Good communication, Tests well done...
- 😔 **WHAT WENT WRONG?** PRs take too long, Server down...
- 💡 **WHAT TO IMPROVE?** Review PRs in 4h, Weekly tech meeting...

## Scrum Visual Tools

**Task Board**: TO DO | IN PROG | REVIEW | DONE

**Burndown Chart**: Graph showing remaining work day by day

---

# 3. KANBAN: Continuous Flow

**Origin:** Created by Taiichi Ohno at Toyota in the 40s-50s to manage car production.

**Just-In-Time principle:** Produce only what is needed, when it's needed.

## Key Difference with Scrum

**Scrum:** Fixed duration sprints (2 weeks). At the end, reset and new sprint.

**Kanban:** Continuous flow. No sprints, no reset. Tasks come in and out constantly.

## Kanban Principles

### 1. Work visualization
Make invisible work visible with a Kanban board

### 2. WIP Limit (Work In Progress)
WIP = Number of tasks in progress simultaneously
**Key principle:** Limit WIP to increase focus

### 3. Pull System (not Push)
- **Push:** Manager imposes tasks → Developer saturated
- **Pull:** Developer finishes task → Takes next from backlog
- **Advantage:** Team controls its capacity. No burnout.

### 4. Continuous improvement
Constantly analyze metrics and optimize flow

## The Kanban Board

**Basic:** TO DO | DOING | DONE

**Advanced:** BACKLOG | READY | DEV | REVIEW | TESTING | DONE
- With WIP limits per column (ex: max 3 tasks in DEV)

**Each card represents:**
- Ticket (generic)
- Bug
- User Story
- Task

## Kanban Metrics

**Lead Time:** Time from task creation until it's finished (includes waiting)

**Cycle Time:** Time from when you start working until you finish (only work time)

**Throughput:** Number of completed tasks per week/month

**WIP:** Number of tasks in progress
- High WIP = multitasking = nothing gets done

---

# Final Summary

**AGILE** is the general mindset.

**SCRUM:**
- Fixed sprints
- Clear roles
- 4 ceremonies
- Ideal for projects with deadlines

**KANBAN:**
- Continuous flow
- WIP limits
- Pull system
- Ideal for continuous services

**SCRUMBAN:** Hybrid of the two

**The key:** Understanding what each one brings and adapting it to your context.
            `,
            tips: [
                'Start with short sprints (1-2 weeks) to learn quickly',
                'Daily Scrum should be 15 minutes, no more',
                'Dedicate time to Retrospective, that\'s where you learn most',
                'Limit WIP in Kanban to increase focus',
                'Don\'t accumulate technical debt without planning how to pay it'
            ],
            warnings: [
                'Scrum is NOT about meaningless meetings',
                'Planning Poker are not real hours, they\'re story points',
                'Don\'t skip Retrospectives, they\'re essential',
                'High WIP = multitasking = low quality',
                'Scrum Master is NOT a boss'
            ]
        }
    }
}