# Vectofy Icons

**Vectofy Icons** es una base para librerías de íconos vectoriales escalables para desarrolladores y diseñadores. Utiliza archivos SVG para generar una fuente web completa y archivos CSS que permiten el uso fácil de los íconos en aplicaciones web.

## Requisitos

Antes de empezar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema. Puedes verificar si lo tienes instalado ejecutando:

```bash
node -v
```
Si no tienes Node.js, descárgalo e instálalo desde su sitio web oficial.

### Instalación

Sigue los siguientes pasos para instalar las dependencias necesarias y configurar el proyecto.

Instala las dependencias del proyecto ejecutando el siguiente comando:

```bash
npm install
```

Compilación: Para generar la fuente web y los archivos CSS a partir de los íconos SVG, ejecuta el siguiente comando:

```bash
npm run build
```

Este comando utiliza svgtofont para procesar los archivos SVG dentro de la carpeta icons/ y genera la fuente y los archivos CSS en la carpeta public/.

Estructura del Proyecto
- `public/`: Los archivos generados (fuentes y CSS) después de ejecutar el comando npm run build.
- `src/icons/`: Contiene los archivos SVG que serán convertidos en íconos de fuente web.
- `src/styles/`: plantillas para generar archivos CSS, LESS, SCSS y STYL automáticamente, [Mas Ejemplos](https://github.com/jaywcjlove/svgtofont/tree/master/examples/templates/styles).
- `src/index.mjs`: Contiene el script de configuración y otros recursos del proyecto.
- `package.json`: Contiene información del proyecto y las dependencias necesarias.
Uso de los Iconos

Después de la compilación, puedes usar los íconos generados en tu proyecto web. Para ello, incluye el archivo CSS generado (public/vectofy.css) en tu HTML:

```html
<link rel="stylesheet" href="dist/vectofy.css">
```

Luego, puedes usar las clases CSS en tu HTML para mostrar los íconos:

```html
<i class="vectofy comment-solid"></i>
<i class="vectofy heart-solid"></i>
```