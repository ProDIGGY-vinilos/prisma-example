# Proof-of-Concept Prisma

## Table of Contents

- [Integrantes](#integrantes)
- [Setup](#setup)
- [Usage](#usage)
- [Prisma documentation](https://www.prisma.io/docs)
- [Docs sobre la PoC](https://docs.google.com/document/d/1cTENZ6i5wya5l31qnEf3rqBDuyELreoPG3Hk-yDR6As/edit?usp=drive_link)
- [Presentación PowerPoint de la PoC](https://docs.google.com/presentation/d/1OuE4DnnqZbrOC8WOobfeLSqWxMgC9Ze8/edit?usp=drive_link&ouid=115812546437887960992&rtpof=true&sd=true)

## Integrantes <a name = "integrantes"></a>

-Cristian Gerster -[Jose Socolsky](https://github.com/JosepSoc)

## Setup <a name = "setup"></a>

Para instalar las dependencias del proyecto primero hacemos:

```
pnpm install
```

Luego hay que generar el modelo de prisma en los modulos de node

```
npx prisma generate
```

El paso anterior dara un prompt para instalar prisma, se debe presionar `'y'`

Recuerde antes de iniciar el proyecto crear un archivo de variables de entorno `.env` que contenga la connection string de su BD de preferencia dentro de la variable `DATABASE_URL`.

## Usage <a name = "usage"></a>

Comentamos el metodo a usar y luego iniciamos con:

```
pnpm start
```
