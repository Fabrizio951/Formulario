VER FORMULARIO: https://fabrizio951.github.io/

Descripción del Proyecto:
Este proyecto consiste en la creación de un formulario HTML. El formulario permite a los usuarios ingresar su nombre y correo electrónico, generando automáticamente un número aleatorio. Además se asegurar que los campos estén correctamente llenados antes de habilitar el botón de envío.

1.Estructura del Código:
El proyecto se compone de tres archivos principales: HTML, CSS y JavaScript.

2. Crear archivo HTML:
Una sección con la clase "Formulario" que envuelve todo el contenido.
Un encabezado (h1) que muestra el título "Formulario".
Un formulario (form) con un identificador "myForm".
Dentro del formulario, se encuentran tres etiquetas (label) con sus respectivos campos de entrada (input) para el nombre, correo y número aleatorio.
Además, se incluye un botón de envío (input type="submit") con el identificador "enviarBtn", el cual está inicialmente deshabilitado.

3. Crear archivo CSS:
Establecimiento de un fondo (background) para el cuerpo (body) con el color #F4F7F9.
Definición de estilos para la sección con la clase "Formulario", como el ancho (width), fondo (background), relleno (padding), margen (margin), radio del borde (border-radius), tipo de fuente (font-family) y color del texto (color).
Estilización del encabezado <h1> del formulario, incluyendo el tamaño de fuente (font-size), margen inferior (margin-bottom), margen superior (margin-top) y alineación del texto (text-align).
Estilos para los campos de entrada (<input>) con la clase "inputs", como el ancho (width), fondo (background), relleno (padding), radio del borde (border-radius), margen inferior (margin-bottom), borde (border), tamaño de fuente (font-size) y color del texto (color).
Estilización del botón de envío con la clase "Boton", incluyendo la visualización (display), margen izquierdo (margin-left), margen derecho (margin-right) y margen superior (margin-top).

4. Crear archivo JavaScript:
window.onload: Esta función se ejecuta cuando se ha cargado completamente la página. En ella, se ejecuta la función NumeroAleatorio() y se asignan los eventos de escucha a los campos de entrada de nombre y correo.
NumeroAleatorio(): Esta función genera un número aleatorio mediante el uso de Math.random() y Math.floor(). Luego, actualiza el valor del campo de entrada "numero" con el número aleatorio generado.
validarCampos(): Esta función se dispara cada vez que se realiza una entrada en los campos de nombre y correo. Verifica si ambos campos están llenos y si el nombre solo contiene letras mediante una expresión regular. Si se cumplen las condiciones
