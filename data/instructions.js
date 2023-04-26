/*jshint esversion: 6 */
define(['mozart'], function (mozart) {
	var instructionData = mozart(function(prototype, _, _protected, __, __private) {
		prototype.en = [

//////////// LEVEL 1 /////////////////////////////////////////////////////////
`
<h1>Level 1: Introducion</h1>
¡Beep boop!
JavaScript es un lenguaje de programación web muy popular.
Casi todos los sitios web (¡y obviamente éste!) utilizan JavaScript para mostrar cosas dinámicamente en tu navegador.
<br><br>
<h2>
La pestaña Consola
</h2>
Antes de hacer cualquier código, comenzaremos con lo básico: usar la consola. La consola es una herramienta que usan los
 desarrolladores para probar que un programa funciona correctamente, 
se usa para registrar la salida de un programa y permitirle interactuar con él.
<br><br>
En el
<b>Pestaña Consola</b>,
escribe <code>5 + 8</code>
en el campo de texto, presione Entrar y observe lo que sucede.<br>
			
La primera línea ( <code>&rarr; 5 + 8</code> ) es tu entrada,
y la segunda linea ( <code class="console-out">&larr; 13</code> ) es la salida después de que JavaScript ejecuta su entrada.
<br><br>
Ahora algo un poco más interesante. Correr <code>robot.info().x</code> en la consola, la salida 
<code class="console-out">&larr; 80</code> Es del robot <b>x</b> posición en el juego.<br><br>

Hay más propiedades para el robot, pruebe lo siguiente:<br>
<code>robot.info().y</code> <code>robot.info().health</code> <code>robot.info().energy</code> <code>robot.info().width</code>

<br><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Console" target="_blank" class="learn-more">Learn More About Console</a>
<br><br>
<h2>La pestaña Script</h2>
De acuerdo. Fresco. Así que ahora podemos hablar con la consola. Intentemos que el robot hable con la consola.<br>
En la <b> Pestaña Script</b> Verás el siguiente código:
<div class="code">function init(robot) {
	// your code goes here
}

function loop(robot) {
	// your code goes here
}</div>

¡Estas son funciones de JavaScript, así es como controlaremos el robot!
<br>
Las líneas que comienzan con dos barras
  <code>\/\/</code>
  son comentarios, son para que nosotros (los humanos) entendamos mejor el código que escribimos. Son inútiles para el programa, por lo que los ignora.<br><br>

El
<code>init(robot)</code>
  función es la abreviatura de inicializar, esta función se ejecuta una vez al inicio del programa.
<br>
El
<code>bucle(robot)</code>
  La función se ejecuta continuamente mientras se ejecuta el programa.
<br><br><br><br>
Editar el
  <code>init(robot)</code>
  función por lo que el código se ve así:
<br>
<div class="code">function init(robot) {
	console.log("Robot initializing...");
}

function loop(robot) {
	// your code goes here
}</div>
Haga clic en el <b>Botón Ejecutar(Run)</b> en la parte superior de la página, luego abra la <b>Pestaña Consola</b>.<br>
Notarás que la salida <code class="console-out">&larr; Robot inicializando...</code>.<br>
La línea <code>console.log(<i>algo</i>);</code> registrará lo que esté entre paréntesis en la consola.<br>
Haz clic en el <b>Botón Restablecer</b> en la parte superior de la página para restablecer el nivel y borrar la consola.

<br><br><br><br>
Ahora haz lo mismo con la función <code>loop(robot)</code>, tu código debería verse así:
<div class="code">function init(robot) {
	console.log("Robot initializing...");
}

function loop(robot) {
	console.log("Robot looping...");
}</div>
Haga clic en el botón <b>Ejecutar</b> y abra de nuevo la <b>pestaña Consola</b>.<br>
Debería ver <code class="console-out">&larr; Robot inicializando...</code> como antes, pero ahora <code class="console-out">&larr; Robot looping...</code> se escribe una y otra vez (tres veces por segundo).<br>
Presiona el <b>botón de pausa</b> y debería detenerse.
Haga clic en el <b>botón Restablecer</b> para borrar la consola<br><br>

<h2>Controlar el robot</h2>
El objetivo del juego es alcanzar la bandera al final de cada nivel. El robot puede sufrir daños y quedarse sin batería cuando ejecuta sus diversas acciones. Pierdes el nivel si el robot se queda sin energía o recibe demasiado daño.<br><br>
El robot tiene múltiples <b>acciones:</b> <code>mover</code><code>, <code>saltar</code>, <code>disparar</code>, <code>girar</code> y <code>esperar</code> <b>actions:</b> <code>move</code>, <code>jump</code>, <code>shoot</code>, <code>turn</code> and <code>wait</code>.<br><br>.<br><br>
La acción <code>move</code> requiere una <b>cantidad</b> entre <b>-40</b> y <b>40</b>. Una cantidad positiva mueve el robot hacia la derecha, una cantidad negativa hacia la izquierda.<br>
La acción <code>jump</code> también una <b>cantidad</b>, entre <b>-10</b> y <b>10</b>, y como antes una cantidad positiva le dice al robot para saltar a la derecha, negativo a la izquierda.<br><br>

Para controlar el robot, configure su acción como se muestra en la siguiente función de bucle:
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
Esto le indicará al robot que se mueva 40 píxeles a la derecha cada vez que ejecute la función de bucle, que es a una velocidad de tres veces por segundo.<br>Escriba el código proporcionado en la <b>pestaña Script</b> y haga clic en el <b>botón Run</b>.<br><br>
¡Tada!
`,


//////////// LEVEL 2 /////////////////////////////////////////////////////////
`
<h1>Nivel 2: Introducción Continuación (y Variables)</h1>

<h2>Pestaña HUD y Propiedades</h2>
En la esquina superior derecha de la pantalla, verá información útil en una <b>pantalla de advertencia:</b><br>
La salud y la energía del robot, cuántas monedas ha recogido el robot y la posición del ratón.<br>
Esto hará que sea más conveniente jugar el juego.<br><br>
También está la <b>pestaña de propiedades</b>, que muestra información más detallada sobre el robot.<br>
Realmente no los necesitarás todavía, ¡pero es útil saber que existen para más adelante!

<h2>Practice Mode</h2>
<h3>Controles del teclado</h3>
En la parte superior izquierda, verá un botón que se parece a las teclas de flecha de un teclado, esto activa los <b>Controles del teclado</b><br> del robot.
Continúe y haga clic en él, ahora puede controlar el robot desde el teclado, los controles predeterminados son:
	<table>
	<tr><td>
	Move Left
	</td><td>
	A
</td></tr><tr><td>
	Move Right
	</td><td>
	D
</td></tr><tr><td>
	Jump
	</td><td>
	W
</td></tr><tr><td>
	Jump Left
	</td><td>
	Q
</td></tr><tr><td>
	Jump Right
	</td><td>
	E
</td></tr><tr><td>
	Turn
	</td><td>
	T
</td></tr><tr><td>
	Shoot Gun
	</td><td>
	G
</td></tr></table>
Habrás notado después de activar los <b>Controles del teclado</b> que apareció un mensaje de "Modo de práctica".<br>
<b>Modo de práctica</b> es cuando estás practicando un nivel antes de escribir el código para él.<br>
El objetivo del juego es resolver los niveles por completo usando solo el código escrito en la <b>pestaña Script</b>.<br><br>

Entrará en el modo de práctica si usa los controles del teclado, la pestaña de la consola o pausa el script que se está ejecutando actualmente.<br>
Entonces, cuando haya terminado de practicar y quiera terminar el nivel, ejecute su script y evite los controles de consola y teclado.
<br><br>

<h3>Controlar el robot desde la consola</h3>
La Consola puede enviar comandos al robot, pruébelos:
	<table>
	<tr><td>
	<code>robot.move(<i>n</i>)</code>
	</td><td>
	Donde <b><i>n</i></b> es un número de <b>-40</b> a <b>40</b>.
El robot avanza o retrocede <b><i>n</i></b> píxeles.
</td></tr><tr><td>
	<code>robot.jump(<i>n</i>)</code>
	</td><td>
	Donde <b><i>n</i></b> es un número de <b>-10</b> a <b>10</b>.
El robot salta hacia adelante o hacia atrás a una velocidad <b><i>n</i></b>.
</td></tr><tr><td>
	<code>robot.jump()</code>
	</td><td>
El robot salta hacia arriba. Equivalente a <b>robot.jump(0)</b>
</td></tr><tr><td>
	<code>robot.turn()</code>
	</td><td>
	El robot gira, esto no afecta la dirección de los dos comandos anteriores, solo afecta a <b>robot.shoot()</b></td></tr><tr><td>
	<code>robot.shoot()</code>
	</td><td>
	¡Robot dispara arma!
</td></tr></table>


<h2>Métodos abreviados de teclado</h2>
	<table>
	<tr><td>
	<b>Pestaña de instrucciones: </b>
	</td><td>
	Ctrl + 1
</td></tr><tr><td>
<b>Script Tab: </b>
	</td><td>
	Ctrl + 2
</td></tr><tr><td>
<b>Console Tab: </b>
	</td><td>
	Ctrl + 3
</td></tr><tr><td>
<b>Properties Tab: </b>
	</td><td>
	Ctrl + 4
</td></tr><tr><td>
<b>Keyboard Controls: </b>
	</td><td>
	Ctrl + 5
</td></tr><tr><td>
<b>Run/Pause Script: </b>
	</td><td>
	Ctrl + Enter
</td></tr></table>
Si está en una Mac, use Comando en lugar de Ctrl

<h2>Tipos de datos</h2> 
Los tipos de datos son fundamentales para el funcionamiento de los
 lenguajes de programación, los tipos de datos integrados más básicos
  se denominan primitivos.<be> Una lista completa de primitivos en JavaScript es:
	<table>
	<tr><td>
<b>Número</b>
</td><td>
Cualquier número (tanto enteros como puntos flotantes, positivos o negativos).<br>
Ejemplos:<code>12</code> <code>7.25</code> <code>0</code> <code>-10023</code>
</td></tr><tr><td>
<b>Cadena</b>
</td><td>
Cualquier colección de caracteres entre comillas simples o dobles.<br>
La elección de comillas simples o dobles no hace ninguna diferencia siempre que las comillas de apertura y cierre coincidan.
Ejemplos: <code>'Look, fireworks!'</code> <code>"Sub-total: $25"</code>
</td></tr><tr><td>
<b>Booleano</b>
</td><td>
Un booleano puede ser cualquiera <code>true</code> or <code>false</code>, bastante simple.
</td></tr><tr><td>
<b>indefinido</b>
</td><td>
	<code>undefined</code> es raro, cuando algo es <b>indefinido</b> eso significa que no tiene un valor.<br>
	La mayoría de las veces que encuentra <b>indefinido</b> significa que algo salió mal.
	</td></tr><tr><td>
	<b>nulo</b>
	</td><td>
	A primera vista, podría pensar: "¿Por qué necesitaríamos un tipo de datos <code>null</code> si ya tenemos <b>indefinido</b>?"<br>
	Bueno, la diferencia entre los dos es la intención, <b>indefinido</b> significa que esta <i>cosa</i> no tiene valor por alguna razón.
	<br>Por otro lado, <b>null</b> significa que esta <i>cosa</i> no tiene valor, lo reconozco y es como me gustaría que fuera.
</td></tr></table>

Puedes usar <code>typeof()</code> para obtener el tipo de un dato.<br>
Pruebe los siguientes comandos en la consola:
<table><tr><td>
<code>typeof(51.72)</code>
	</td><td>Debería salir
	<code class="console-out">&larr; "number"</code>
</td></tr><tr><td>
<code>typeof('I like jello')</code>
	</td><td>Debería salir
	<code class="console-out">&larr; "string"</code>
</td></tr><tr><td>
<code>typeof(true)</code>
	</td><td>Debería salir
	<code class="console-out">&larr; "boolean"</code>
</td></tr><tr><td>
<code>typeof(undefined)</code>
	</td><td>Debería salir
	<code class="console-out">&larr; "undefined"</code>
</td></tr><tr><td>
<code>typeof(null)</code>
	</td><td>Debería salir
	<code class="console-out">&larr; "object"</code>
	<br>
	Esto es considerado por muchos como un error en el lenguaje.<br>
Es demasiado tarde para arreglarlo ahora, así que tendremos que lidiar con eso.
</td></tr></table>

<br><h3>Un curso acelerado de objetos:</h3>

Las primitivas se pueden combinar para crear tipos de datos más complejos llamados <b>objetos</b>.<br>
Has visto objetos antes:
 <code>robot.action = {type: 'move', amount: 40}</code>
 <br><br>
 Aquí tenemos un objeto que representa una acción:<br>
 consiste en una cadena <b>propiedad</b> llamada
<code>type</code> 
y una propiedad numérica llamada
 <code>amount</code>.
	<br><br>
	Discutiremos los Objetos con más detalle más adelante,
así que no se preocupe si todavía no se siente cómodo con ellos.

<br><br>
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Variable_types" target="_blank" class="learn-more">Learn More About Data Types</a>
<br><br>

<h2>Variables</h2>

Una variable es un nombre que se refiere a un valor, por ejemplo <code>favoriteFood = 'Lasagne';</code>.<br>
Aquí tenemos una variable llamada<code>favoriteFood</code> con un valor de cadena de <code>'Lasagne'</code>.<br><br>

Una variable puede tener cualquier tipo de dato como valor, número, cadena o booleano, ¡incluso indefinido y nulo!<br>
<code>favoriteColor = null;</code> En este ejemplo, tenemos una variable establecida en <b>null</b>, básicamente estamos diciendo:<br>
"Oye, mira, tengo esta variable <b>favoriteColor</b>, pero no tengo un color favorito, te avisaré más tarde si elijo uno".
<br><br>
ahora que tal<code>undefined</code>, ¿Cuándo estableceríamos una variable en <b>indefinida</b>? 
Bueno, nunca, al menos no a propósito.<br>
Ok, hasta ahora, hemos estado creando variables como esta <code><i>variable</i> = <i>value</i></code>.
<br>Pero esa no es la forma correcta de hacerlo..<br><br>

En JavaScript, la forma correcta es
<code>var <i>variable</i> = <i>value</i>;</code>.
 Where the cruical step is the <b>var</b> keyword.<br>
<b>var</b> básicamente significa: "Hazme una variable llamada:".
Entonces podemos dividir la declaración anterior en dos partes:<br>
	<code>var <i>variable</i>;</code> and <code><i>variable</i> = <i>value</i>;</code>.<br><br>

The technical name for creating a variable (the first declaración) is <b>declaration</b>.<br>
Whereas the process of assigning a value to a variable for the first time (the second declaración) is called <b>definition</b>.<br>
And now for the punch-line, before defining a variable, its value is... <code>undefined</code><br>

<br><br>
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable" target="_blank" class="learn-more">Learn More About Variables</a>
<br><br>

The winning code for this level is the same as the last one.<br>
The levels will get much more interesting once we've covered some more JavaScript, I promise!

<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>

`,



//////////// LEVEL 3 /////////////////////////////////////////////////////////
`
<h1>Nivel 3: Flujo de Control y Matemáticas</h1>

<h2>Matemáticas</h2>
<h3>Operadores aritméticos</h3>
JavaScript admite las operaciones aritméticas básicas: <code>+  -  *  /  %  **</code>.<br>
Suma, resta, multiplicación, división, módulo (resto después de la división) y exponencial.<br><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank" class="learn-more">Más información sobre los operadores aritméticos</a>
<br><br>	

<h3>Operadores de asignación</h3>
Resulta que, en la programación, las siguientes operaciones son extremadamente populares: <code>i = i + 1;</code>, <code>m = m / 2;</code>.<br>
Entonces se desarrolló una notación abreviada, las dos expresiones anteriores se pueden reescribir como: <code>i += 1;</code> and <code>m /= 2;</code><br>
Las dos operaciones <code>i += 1;</code> y <code>i -= 1;</code> son probablemente las más utilizadas en programación, por lo que se acortaron aún más a <code>i++;< /code> y <code>i--;</code><br><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" target="_blank" class="learn-more">Learn More About Assignment Operators</a>
<br><br>	

<h3>Concatenación de cadenas</h3>
Agregar cadenas no es del todo matemático, pero es muy útil. Puede agregar varias cadenas junto con el operador <code>+</code>:<br>
<code>"Los robots" + "son" + "geniales" + '!'</code> y esto da la cadena <code>"¡Los robots son geniales!"</code><br><br>
Se pueden agregar números a las cadenas, la forma explícita de hacerlo es usando el constructor <b>String()</b>.<br>
<code>String(47)</code> convierte el número 47 en la cadena "47". Y luego podemos realizar la concatenación de cadenas con el resultado.<br>
<code>"Hay " + String(47) + " gominolas en este paquete."</code><br><br>
Pero muy a menudo es bastante obvio lo que estamos tratando de hacer, por lo que lo siguiente funciona igual de bien en JavaScript:<br>
<code>"Hay " + 47 + " gominolas en este paquete".</code> La regla es: sumar un número y una cadena primero convierte el número en una cadena.<br><br>
Esto tiene sentido, pero en algunos casos no es tan útil como nos gustaría. Toma por ejemplo <code>"7" + 3</code> esto da la cadena <code>"73"</code> que podría no ser lo que esperabas, así que ten cuidado.
	<br><br>
	<h3>Análisis de cadenas a números</h3>
	Hmmmm, ¿qué sucede si en lugar de sumar intentamos restar, así que digamos <code>"7" - 3</code>? Pruébalo, deberías obtener <code>4</code>.<br>
	Bueno, esto es interesante, JavaScript sabía que la cadena "7" era en realidad un número disfrazado.<br>
	Ahora, aunque esta es una respuesta útil, y JavaScript es una cookie muy inteligente, queremos evitar usar números y cadenas juntos como este.<br>
	Si sabe que tiene una cadena que contiene un número, conviértala al tipo de datos de número usando una de las siguientes funciones:<br><table>
<tr><td>
	<code>Number.parseInt()</code>
</td><td>
Convierte una cadena que representa un número entero en un número, ignora cualquier carácter adicional.<br>
	Calling <code>Number.parseInt()</code> on <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> and <code>"3 apples."</code>
	<br>Gives <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7</code>
	<code class="console-out">&larr; 1</code>
	<code class="console-out">&larr; 3</code>

</td></tr><tr><td>
	<code>Number.parseInt()</code>
</td><td>
Convierte una cadena que representa un número de punto flotante en un número, ignora cualquier carácter adicional.<br>
	Calling <code>Number.parseFloat()</code> on <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> <code>"3 apples."</code><br>
	Gives <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7.25</code>
	<code class="console-out">&larr; 1.995</code>
	<code class="console-out">&larr; 3</code>
</td></tr></table>

<br><br>
<h3>NaN</h3>
Entonces, ¿qué sucede cuando tratamos de hacer algo tonto con nuestros números?<br>
Por ejemplo <code>'naranja' - 4</code> <code>Number.parseInt('football');</code> <code>0 / 0</code> <code> (-1) ** 0.5 </código><br>
Bueno, tenemos un <code class="console-out">&larr; NaN</code>, que significa <b>No es un número</b>. <br><br>
<b>NaN</b> es interesante, <code>typeof(NaN);</code> nos da <code class="console-out">&larr; "number"</code>... Así que Not a Number es de hecho un número.<br>
Hay una función incorporada para probar los valores de NaN, <code>Number.isNaN()</code>.<br>

<h3>Infinito</h3>
Algunas propiedades de <code>Infinity</code>:
	<table><tr><td>
<code>1 / 0</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr><tr><td>
<code>1 / Infinity</code> 
	</td><td>
	<code class="console-out">&larr; 0</code>
	</td></tr><tr><td>
<code>Infinity + 1</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr><tr><td>
<code>10 ** 1000</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr></table>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" class="learn-more">Learn More About the Number Object</a><br><br>

<h3>Funciones matemáticas avanzadas</h3>
<tabla><tr><td>
<code>Math.round(<i>número</i>)</code>
</td><td>
Devuelve <i>número</i> redondeado al entero más próximo.
</td></tr><tr><td>
<code>Math.abs(<i>número</i>)</code>
</td><td>
Devuelve el valor absoluto de <i>número</i>.
</td></tr><tr><td>
<code>Math.sin(<i>número</i>)</code>
</td><td>
Devuelve el seno de <i>número</i>.
</td></tr><tr><td>
<code>Math.cos(<i>número</i>)</code>
</td><td>
Devuelve el coseno de <i>número</i>.
</td></tr><tr><td>
<code>Math.sqrt(<i>número</i>)</code>
</td><td>
Devuelve la raíz cuadrada de <i>número</i>.
</td></tr><tr><td>
<code>Math.pow(<i>base</i>, <i>exponente</i>)</code>
</td><td>
Devuelve <i>base</i> a la potencia <i>exponente</i>.
</td></tr><tr><td>
<code>Math.log(<i>número</i>)</code>
</td><td>
Devuelve el logaritmo natural ln() de <i>número</i>.
</td></tr><tr><td>
<code>Math.max(<i>x</i>, <i>y</i>, ...)</code>
</td><td>
	Devuelve el mayor de los números pasados.<br><code>Math.min(<i>x</i>, <i>y</i>, ...)</code> devuelve el menor.
</td></tr></tabla>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Learn More About Math Functions</a><br><br>

<h2>Booleanos</h2>
Los siguientes operadores devuelven <code>true</code> o <code>false</code>, estos serán esenciales para hacer uso de Control Flow que es el concepto principal de este nivel.
<br><br>

<h3>Operadores de igualdad</h3>
<table><tr><td>
	<code><i>a</i> == <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> y <i>b</i> tienen el mismo valor; de lo contrario, devuelve falso.<br>
Tenga en cuenta que <i>a</i> y <i>b</i> pueden tener diferentes tipos y seguir siendo iguales.<br>
Ejemplos:
	<code>3.25 == 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 == "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 == 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> === <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> y <i>b</i> tienen el mismo valor <b>y tienen el mismo tipo</b>; de lo contrario, devuelve falso.<br>
Ejemplos:
	<code>3.25 === 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 === "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 === 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> != <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> y <i>b</i> no tienen el mismo valor, independientemente del tipo; de lo contrario, devuelve falso.<br>
Ejemplos:
	<code>3.25 != 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 != "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 != 0.2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> !== <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> y <i>b</i> no son iguales en valor o tipo; de lo contrario, devuelve falso.<br>
Ejemplos:
	<code>3.25 !== 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 !== "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 !== 0.2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Operadores de comparación</h3>
	
<table><tr><td>
	<code><i>a</i> < <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> es menor que <i>b</i>; de lo contrario, devuelve falso.<br>
Ejemplos:
	<code>1 < 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 < 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 < 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> <= <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> es menor o igual que <i>b</i>, falso en caso contrario.<br>
Ejemplos:
	<code>1 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 <= 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> > <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> es mayor que <i>b</i>, falso en caso contrario.<br>
Ejemplos:
	<code>1 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 > 2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> >= <i>b</i></code>
</td><td>
Devuelve verdadero si <i>a</i> es mayor o igual que <i>b</i>; de lo contrario, devuelve falso.<br>
Ejemplos: 
	<code>1 >= 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 >= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 >= 2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Logical Operators</h3>
	
<table><tr><td>
	<code>!<i>a</i></code>
</td><td>
El operador <b>NO</b> cambia de verdadero a falso y viceversa.<br>
Ejemplos:
	<code>!true</code> <code class="console-out">&larr; false</code> , 
	<code>!false</code> <code class="console-out">&larr; true</code>

</td></tr><tr><td>
	<code><i>a</i> && <i>b</i></code>
</td><td>
El operador <b>AND</b> devuelve verdadero si tanto <i>a</i> como <i>b</i> son verdaderos, y falso si alguno de ellos es falso.<br>
Ejemplos:
	<code>true && true</code> <code class="console-out">&larr; true</code> , 
	<code>true && false</code> <code class="console-out">&larr; false</code> , 
	<code>true && true</code> <code class="console-out">&larr; false</code>

</td></tr><tr><td>
	<code><i>a</i> || <i>b</i></code>
</td><td>
	The <b>OR</b> operator, returns true if both <i>a</i> and <i>b</i> are true, and false if either of them is false.<br>
	Examples: 
	<code>true || true</code> <code class="console-out">&larr; true</code> , 
	<code>true || false</code> <code class="console-out">&larr; true</code> , 
	<code>true || true</code> <code class="console-out">&larr; false</code>

</td></tr></table>

<h3>Falsy Values</h3>
A falsy value is one that acts as if it were <code>false</code>.
In JavaScript there are six "falsy" values:<br>
<ol><li>
<code>false</code> obviously<br>
	</li><li>
<code>0</code> and <code>-0</code><br>
	</li><li>
<code>""</code> or <code>''</code> the empty string<br>
	</li><li>
<code>NaN</code> i.e. Not a Number<br>
	</li><li>
<code>undefined</code><br>
	</li><li>
<code>null</code><br>
	</li></ol>

Try out the following commands with falsy values substituted in to see how they act like false:<br><br>
	<code>!(<i>value</i>)</code><br>
	<code><i>value</i> && true</code><br>
	<code><i>value</i> || false</code><br><br>
Then try them with regular numbers and strings and see how the behaviour changes.

<br><br><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank" class="learn-more">Learn More About Logical Operators and Falsy Values</a><br><br>


<h2>Flujo de control</h2>
<h3>If-Else</h3>
Las declaraciones de flujo de control permiten que un programa ejecute código diferente en función de una condición.<br>
Si cierta condición es verdadera, se ejecuta una pieza de código; si es falso, se ejecuta otra pieza de código.<br>
<br>
El siguiente código es un ejemplo de un 
<b>if-else</b>
 declaración:
<div class="code">var rollsOfToiletPaper = 5;
if (rollsOfToiletPaper <= 1) {
	console.log("I need to buy more toilet paper!");
} else if (rollsOfToiletPaper > 50){
	console.log("Why did I buy this much toilet paper??");
} else {
	console.log("All good.");
}</div>
Este programa debería ser fácil de entender:<br>
Si el valor de <code>rollsOfToiletPaper</code> es menor o igual a 1, se ejecuta el código dentro del primer par de llaves.<br> Si es mayor que 50, el código entre el segundo par de llaves se ejecuta. se ejecuta.<br>
De lo contrario, se ejecuta el código del último par de llaves.<br><br>
<b>Nota:</b> El código que se escribe entre llaves se llama <b>bloque</b> de código.
<br><br>

Para dar una definición más formal, el
<code>if</code>
la palabra clave siempre va seguida de una condición dentro de un par de paréntesis
 <code>(<i>condition</i>)</code>,
 después de la condición colocamos un bloque de código
  <code>{ <i>do something here</i> }</code>.<br>
  Opcionalmente, después podemos colocar un <code>else if</code>
que se comporta igual que un
<code>if</code>
o simplemente un
 <code>else</code>
 que no requiere una condición, solo un bloque.
<br>
Una vez que se cumple la primera condición, se ejecuta el bloque siguiente, los bloques para todas las demás declaraciones <code>else</code> se ignoran.
	<br><br>
	<h3>Interruptor</h3>
	A veces tenemos que escribir programas como este:
<div class="code">var letter = 'C';
if (letter === 'A') {
	console.log('A for Aligator');
} else if (letter === 'B') {
	console.log('B for Beaver');
} else if (letter === 'C') {
	console.log('C for Chameleon');
} else if (letter === 'D') {
	console.log('D for Dishwasher');
} else if (letter === 'E') {
	console.log('E for Elephant');
} else {
	console.log('Carta no admitida, inténtalo de nuevo');
}</div>

Se vuelve tedioso y difícil de leer, una forma mucho más conveniente y
forma atractiva de escribir el mismo programa es con un
 <code>switch</code>
 declaración:
<div class="code">var letter = 'C';
switch (letter) {
	case 'A':
		console.log('A for Aligator');
		break;
	case 'B':
		console.log('B for Beaver');
		break
	case 'C':
		console.log('C for Chameleon');
		break;
	case 'D':
		console.log('D for Dishwasher');
		break;
	case 'E':
		console.log('E for Elephant');
		break;
	default:
		console.log('Unsupported letter, please try again');
}</div>

<h3>Operadora condicional (o la operadora ternaria)</h3>
<code><i>condition</i> ? <i>declaración1</i> : <i>declaración2</i>;</code><br><br>
Si <i>condición</i> se evalúa como verdadero, entonces se ejecuta <i>instrucción1</i>; de lo contrario, <i>instrucción2</i>
se ejecuta.<br>
Considere el siguiente código:
<div class="code">var milkExpired = false;
if (milkExpired) {
	console.log("I'm not having breakfast today :(");
} else {
	console.log("Cereal time!");
}</div>

Usando el operador condicional, se puede acortar a:
<div class="code">var milkExpired = false;
milkExpired ? console.log("I'm not having breakfast today.") : console.log("Cereal time!");
</div>
En realidad, se puede acortar aún más:
<div class="code">var milkExpired = false;
console.log( milkExpired ? "I'm not having breakfast today." : "Cereal time!");
</div>

<h2>Es hora de jugar el nivel</h2>
Es bastante obvio que el robot tendrá que saltar, pruébalo, ve a la <b>pestaña Consola</b> y escribe:<br>
<code>robot.jump(10);</code> Eso es lo más lejos que puede saltar el robot.
<br><br>
¿Intentar alternar entre saltar y avanzar?<code>robot.move(40);</code>
<br>
Por cierto, cuando se selecciona la entrada de texto en la consola, use las teclas arriba y abajo para avanzar y retroceder en el historial de comandos ejecutados.<br><br>
Si puede, intente escribir su solución en la <b>pestaña Script</b>.<br><br>

Una cosa a tener en cuenta, si declara una variable dentro <code>function init()</code>,
no estará disponible en<code>function loop()</code>, la explicación detrás de esto vendrá en niveles posteriores.<br>
Por ahora, si desea crear una variable y acceder a ella más tarde, cree una propiedad en el <b>robot</b> object like this:<br>
	<code>robot.myNewProperty = "some value";</code>
	
	¡Buena suerte!<br><br>
	Si lo has estado intentando durante un tiempo y simplemente no puedes resolverlo, entonces:<br>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>

	<div id="solution">
<div class="code">function init(robot) {
	robot.jumpNext = true;
}

function loop(robot) {
	if (robot.jumpNext) {
		robot.action = {type: 'jump', amount: 10};
		robot.jumpNext = false;
	} else {
		robot.action = {type: 'move', amount: 40};
		robot.jumpNext = true;
	}
}</div>
</div>
`,





//////////// LEVEL 4 /////////////////////////////////////////////////////////
`
<h1>Nivel 4</h1>

<h3>Aún no he escrito las instrucciones para este nivel :(</h3>
<h3>Si quieres ayudar busca en  <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#variable_types"></a></h3>

<!--
	keyboard control
	function name(){}
	var name = function(){}
	parameters
	return
	declaration vs expression
	arrow
	built-in functions: String, Number, Math, [links to Mozilla]
-->


	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	if (400 < robot.info().x  && robot.info().x < 500) {
		robot.action = {type: 'jump', amount: 10};
	} else {
		robot.action = {type: 'move', amount: 40};
	}
}</div>
</div>
`,




//////////// LEVEL 5 /////////////////////////////////////////////////////////
`
<h1>Level 5</h1>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	let robotX = robot.info().x;
	let landmarks = [360, 500, 560, 760];
  
  	robot.action = {type: 'move', amount: 40};
 	if (landmarks[0] < robotX && robotX < landmarks[1] ||
		 landmarks[2] < robotX && robotX < landmarks[3]) {
      	robot.action = {type: 'jump', amount: 10};
	}
}</div>
	</div>
`,




//////////// LEVEL 6 /////////////////////////////////////////////////////////
`
<h1>Level 6</h1>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>
	<div id="solution">
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins % 2 == 1) {
		robot.action.amount = -40;
	}
}</div>
	</div>
`,





//////////// LEVEL 7 /////////////////////////////////////////////////////////
`
<h1>Level 7</h1>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>
	<div id="solution">
<div class="code">function init(robot) {
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins > robot.oldCoins ||
		 robot.info().energy > robot.oldEnergy) {
		robot.action = {type: 'jump', amount: 10};
	}
	robot.oldCoins = robot.info().coins;
	robot.oldEnergy = robot.info().energy;
} </div>
	</div>
`,




//////////// LEVEL 8 /////////////////////////////////////////////////////////
`
<h1>Level 8</h1>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>
	<div id="solution">
<div class="code">function init(robot) {
	robot.iterationsAfterCoin = 0;
}

function loop(robot) {
	if (robot.iterationsAfterCoin > 4) {
		robot.action = {type: 'jump', amount: 10};
	}
	if (robot.info().coins > 0) {
		robot.iterationsAfterCoin++;
	}
}</div>
	</div>
`,




//////////// LEVEL 9 /////////////////////////////////////////////////////////
`
<h1>Level 9</h1>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>
	<div id="solution">
<code>action-queue:</code>
<div class="code">module.exports = {
  	queue: [],
  	push: function(item, t){
		t = t || 1;
    	for (let i = 0; i < t; i++) {
			this.queue.push(item);
      }
	},
	pop: function(){
     	if(this.empty()){
			return null;
		}
     	return this.queue.splice(0, 1)[0];
	},
	peek: function(){
     	if(this.empty()){
			return null;
		}
     	return this.queue[0];
	},
	clear: function(){
		this.queue = [];
	},
	size: function(){
		return this.queue.length;
	},
	empty: function(){
		return (this.size() === 0);
	},
	log: function(){console.log(this.queue);}
};</div>

<br><br>
<code>level-9:</code>
<div class="code">function init(robot) {
	robot.actionQueue = require('action-queue');
  	robot.actionQueue.push({type: 'shoot'}, 12);
  	robot.actionQueue.push({type: 'move', amount: 40}, 4);
  	robot.actionQueue.push({type: 'jump', amount: 10});
  	robot.actionQueue.push({type: 'wait'}, 5);
  	robot.actionQueue.push({type: 'jump'});
  	robot.actionQueue.push({type: 'move', amount: 40}, 6);
}

function loop(robot) {
  	if (!robot.actionQueue.empty()) {
		robot.action = robot.actionQueue.pop();
   }
}</div>
	</div>
`,





//////////// LEVEL 10 /////////////////////////////////////////////////////////
`
<h1>Level 10</h1>

	<br><br>
	<a id="showSolution" class="show-solution">Show Solution</a>
	<br><br>
	<div id="solution">
<code>find:</code>
<div class="code">module.exports = {
  	closestNext:
    	function(x, y, items){
			let minDistance = null;
      		let closest = null;
    		for (let i = 0; i < items.length; i++) {
              	if (items[i].x <= x) continue;
            	let distance = Math.abs(x - items[i].x) + Math.abs(y - items[i].y);
              	if (minDistance == null ||
                    distance < minDistance) {
                	minDistance = distance;
                  	closest = items[i];
				}
        	}
        	return closest;
		}
};</div>
<code>level-10:</code>
<div class="code">function loop(robot) {
  	let onLift = false;
  	robot.on('collide', function(e){
    	if (e.with.t == 'lift') {
	  		onLift = true;
        }
    });
  
  	let closestNextLift = require('find').closestNext(robot.info().x,
                                                      robot.info().y,
                                                      Game.lifts);
  	if (closestNextLift == null) {
      	robot.action = {type: 'move', amount: 20};
    } else {
      	let xDist = closestNextLift.x - robot.info().x;
		let yDist = closestNextLift.y - robot.info().y;
      	if (onLift) {
      		if (robot.info().y > 90) {
      			robot.action = {type: 'wait'};
        	} else {
      			robot.action = {type: 'move', amount: 20};
            }
        } else if (xDist > 80 || yDist > 10) {
			robot.action = {type: 'move', amount: 20};
       	}
	}
}</div>
	</div>
`,


			];

	});
	return instructionData;
});



