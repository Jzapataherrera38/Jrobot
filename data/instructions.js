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
<h1>Level 2: Introduction Continued (& Variables)</h1>

<h2>HUD and Properties Tab</h2>
In the top right corner of the screen you'll see some helpful info in a <b>Heads Up Display:</b><br>
The robot's health and energy, how many coins the robot's collected and the position of the mouse.<br>
These will make it more convenient to play the game.<br><br>
There's also the <b>Properties Tab</b>, it shows more detailed information about the robot.<br>
You won't really need these just yet but it's useful to know they exist for later!

<h2>Practice Mode</h2>
<h3>Keyboard Controls</h3>
In the top left, you'll see a button that looks like the arrow keys on a keyboard, this turns on the robot's <b>Keyboard Controls</b><br>
Go ahead and click it, now you can control the robot from the keyboard, the default controls are:
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
You will have noticed after turning on <b>Keyboard Controls</b> that a "Practice Mode" message appeared.<br>
<b>Practice Mode</b> is when you're practicing a level before writing the code for it.<br>
The objective of the game is to solve the levels entirely using only code written in the <b>Script Tab</b>.<br><br>

You will enter Practice Mode if you use Keyboard Controls, the Console Tab, or pause the currently running script.<br>
So when you're done practicing and want to finish the level, run your script and avoid the Console and Keyboard Controls.
<br><br>

<h3>Controlling The Robot From The Console</h3>
The Console can send commands to the robot, try them out:
	<table>
	<tr><td>
	<code>robot.move(<i>n</i>)</code>
	</td><td>
	Where <b><i>n</i></b> is a number from <b>-40</b> to <b>40</b>.
	Robot moves forward or backward <b><i>n</i></b> pixels.
</td></tr><tr><td>
	<code>robot.jump(<i>n</i>)</code>
	</td><td>
	Where <b><i>n</i></b> is a number from <b>-10</b> to <b>10</b>.
	Robot jumps forward or backward at speed <b><i>n</i></b>. 
</td></tr><tr><td>
	<code>robot.jump()</code>
	</td><td>
	Robot jumps straight up. Equivalent to <b>robot.jump(0)</b>
</td></tr><tr><td>
	<code>robot.turn()</code>
	</td><td>
	Robot turns around, this does not affect the direction of the previous two commands, it only affects <b>robot.shoot()</b>
</td></tr><tr><td>
	<code>robot.shoot()</code>
	</td><td>
	Robot shoots gun!
</td></tr></table>


<h2>Keyboard Shortcuts</h2>
	<table>
	<tr><td>
<b>Instructions Tab: </b>
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
If you're on a Mac use Command instead of Ctrl

<h2>Data Types</h2>
Data types are central to the operation of programming languages, the most basic built-in data types are called primitives.<br>
A full list of primitives in JavaScript is:
	<table>
	<tr><td>
<b>Number</b>
	</td><td>
	Any number (both integers and floating points, positive or negative).<br>
	Examples: <code>12</code> <code>7.25</code> <code>0</code> <code>-10023</code>
</td></tr><tr><td>
	<b>String</b>
	</td><td>
	Any collection of characters surrounded by single or double quotes.<br>
	The choice of single or double quotes makes no difference as long as the opening and closing quotes match.
	Examples: <code>'Look, fireworks!'</code> <code>"Sub-total: $25"</code>
</td></tr><tr><td>
	<b>Boolean</b>
	</td><td>
	A boolean can be either <code>true</code> or <code>false</code>, pretty simple.
</td></tr><tr><td>
	<b>undefined</b>
	</td><td>
	<code>undefined</code> is a weird one, when something is <b>undefined</b> that means that it doesn't have a value.<br>
	Most of the times you encounter <b>undefined</b> it means that something has gone wrong.
</td></tr><tr><td>
	<b>null</b>
	</td><td>
	At first glance, you might think: "Why would we need a <code>null</code> data type if we already have <b>undefined</b>?"<br>
	Well the difference between the two is intention, <b>undefined</b> means this <i>thing</i> has no value for some reason.
	<br>On the other hand, <b>null</b> means this <i>thing</i> has no value, I recognise this and it's the way I would like it to be.

</td></tr></table>

You can use <code>typeof()</code> to get the type of a piece of data.<br>
Try the following commands in the console:
<table><tr><td>
<code>typeof(51.72)</code>
	</td><td>Should output
	<code class="console-out">&larr; "number"</code>
</td></tr><tr><td>
<code>typeof('I like jello')</code>
	</td><td>Should output
	<code class="console-out">&larr; "string"</code>
</td></tr><tr><td>
<code>typeof(true)</code>
	</td><td>Should output
	<code class="console-out">&larr; "boolean"</code>
</td></tr><tr><td>
<code>typeof(undefined)</code>
	</td><td>Should output
	<code class="console-out">&larr; "undefined"</code>
</td></tr><tr><td>
<code>typeof(null)</code>
	</td><td>Should output
	<code class="console-out">&larr; "object"</code><br>
	This is regarded by many as a mistake in the language.<br>
	It's too late to fix it now so we'll have to deal with it.
</td></tr></table>

<br><h3>A Crash Course in Objects:</h3>

Primitives can be combined to make more complex data types called <b>objects</b>.<br>
You've seen objects before: <code>robot.action = {type: 'move', amount: 40}</code><br><br>
Here we have an object that represents an action:<br>
it consists of a string <b>property</b> called <code>type</code> and a number property called <code>amount</code>.
	<br><br>
	We will discuss Objects in more detail later, so don't worry if you're not comfortable with them just yet.

<br><br>
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Variable_types" target="_blank" class="learn-more">Learn More About Data Types</a>
<br><br>

<h2>Variables</h2>

A variable is a name that refers to a value, take for example <code>favoriteFood = 'Lasagne';</code>.<br>
Here we have a variable called <code>favoriteFood</code> with a string value of <code>'Lasagne'</code>.<br><br>

A variable can have any data type as its value, number, string or boolean, even undefined and null!<br>
<code>favoriteColor = null;</code> In this example we have a variable set to <b>null</b>, we are basically saying:<br>
"Hey look, I have this <b>favoriteColor</b> variable, but I don't have a favorite color, I'll let you know later if I choose one."
<br><br>
Now what about <code>undefined</code>, when would we set a variable to <b>undefined</b>? Well, never, at least not on purpose.<br>
Ok, so far, we've been creating variables like this <code><i>variable</i> = <i>value</i></code>.<br>But that's not quite the proper way of doing it.<br><br>

In JavaScript, the proper way is <code>var <i>variable</i> = <i>value</i>;</code>. Where the cruical step is the <b>var</b> keyword.<br>
<b>var</b> basically means: "Make me a variable called: ". So we can split the previous statement into two parts:<br>
	<code>var <i>variable</i>;</code> and <code><i>variable</i> = <i>value</i>;</code>.<br><br>

The technical name for creating a variable (the first statement) is <b>declaration</b>.<br>
Whereas the process of assigning a value to a variable for the first time (the second statement) is called <b>definition</b>.<br>
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
<h1>Level 3: Math and Control Flow</h1>

<h2>Math</h2>
<h3>Arithmetic Operators</h3>
JavaScript supports the basic arithmetic operations: <code>+  -  *  /  %  **</code>.<br>
Addition, subtraction, multiplication, division, modulo (remainder after division), and exponential.<br><br>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank" class="learn-more">Learn More About Arithmetic Operators</a>
<br><br>	

<h3>Assignment Operators</h3>
As it turns out, in programming the following operations are exceedingly popular: <code>i = i + 1;</code>, <code>m = m / 2;</code>.<br>
So a shorthand notation was developed, the previous two expressions can be rewritten as: <code>i += 1;</code> and <code>m /= 2;</code><br>
The two operations <code>i += 1;</code> and <code>i -= 1;</code> are probably the most often used in programming, so they were shortened even further to <code>i++;</code> and <code>i--;</code><br><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" target="_blank" class="learn-more">Learn More About Assignment Operators</a>
<br><br>	

<h3>String Concatenation</h3>
Adding strings isn't quite math, but it's very useful. You can add multiple strings together with the <code>+</code> operator:<br>
<code>"Robots " + "are " + "cool" + '!'</code> and this gives the string <code>"Robots are cool!"</code><br><br>
Numbers can be added to strings, the explicit way to do this is using the <b>String()</b> constructor.<br>
<code>String(47)</code> turns the number 47 into the string "47". And then we can perform string concatenation with the result.<br>
<code>"There are " + String(47) + " jellybeans in this packet."</code><br><br>
But very often it's quite obvious what we're trying to do, so the following works just as well in JavaScript:<br>
<code>"There are " + 47 + " jellybeans in this packet."</code> The rule is: adding a number and a string together first converts the number to a string.<br><br>
So this makes sense, but in some cases it's not as helpful as we'd like. Take for example <code>"7" + 3</code> this gives the string <code>"73"</code> which might not be what you expected so take care.

	<br><br>
<h3>Parsing Strings to Numbers</h3>
Hmmmm, what happens if instead of adding we tried to subtract, so say <code>"7" - 3</code>. Try it, you should get <code>4</code>.<br>
Well, this is interesting, JavaScript knew that the string "7" was actually a number in disguise.<br>
Now although this is a useful answer, and JavaScript is a very smart cookie, we want to avoid using number and strings together like this.<br>
If you know that you have a string that contains a number, convert it to number data type using one of the following functions:<br>
<table>
<tr><td>
	<code>Number.parseInt()</code>
</td><td>
	Converts a string representing an integer to a number, ignores any extra characters.<br>
	Calling <code>Number.parseInt()</code> on <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> and <code>"3 apples."</code>
	<br>Gives <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7</code>
	<code class="console-out">&larr; 1</code>
	<code class="console-out">&larr; 3</code>

</td></tr><tr><td>
	<code>Number.parseInt()</code>
</td><td>
	Converts a string representing a floating point number to a number, ignores any extra characters.<br>
	Calling <code>Number.parseFloat()</code> on <code>"23"</code> <code>"7.25 litres"</code> <code>"1.995"</code> <code>"3 apples."</code><br>
	Gives <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7.25</code>
	<code class="console-out">&larr; 1.995</code>
	<code class="console-out">&larr; 3</code>
</td></tr></table>

<br><br>
<h3>NaN</h3>
So what happens when we try and do something silly with our numbers?<br>
For example <code>'orange' - 4</code> <code>Number.parseInt('football');</code> <code>0 / 0</code> <code> (-1) ** 0.5</code><br>
Well, we get a <code class="console-out">&larr; NaN</code>, which stands for <b>Not a Number</b>. <br><br>
<b>NaN</b> is interesting, <code>typeof(NaN);</code> gives us <code class="console-out">&larr; "number"</code>... So Not a Number is in fact a number.<br>
There's a built-in function for testing for NaN values, <code>Number.isNaN()</code>.<br>

<h3>Infinity</h3>
Some properties of <code>Infinity</code>:
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

<h3>Advanced Math Functions</h3>
	<table><tr><td>
<code>Math.round(<i>number</i>)</code> 
	</td><td>
	Returns <i>number</i> rounded to the nearest integer.
	</td></tr><tr><td>
<code>Math.abs(<i>number</i>)</code> 
	</td><td>
	Returns the absolute value of <i>number</i>.
	</td></tr><tr><td>
<code>Math.sin(<i>number</i>)</code> 
	</td><td>
	Returns the sine of <i>number</i>.
	</td></tr><tr><td>
<code>Math.cos(<i>number</i>)</code> 
	</td><td>
	Returns the cosine of <i>number</i>.
	</td></tr><tr><td>
<code>Math.sqrt(<i>number</i>)</code> 
	</td><td>
	Returns the square root of <i>number</i>.
	</td></tr><tr><td>
<code>Math.pow(<i>base</i>, <i>exponent</i>)</code> 
	</td><td>
	Returns <i>base</i> to the <i>exponent</i> power.
	</td></tr><tr><td>
<code>Math.log(<i>number</i>)</code> 
	</td><td>
	Returns the natural logarithm ln() of <i>number</i>.
	</td></tr><tr><td>
<code>Math.max(<i>x</i>, <i>y</i>, ...)</code> 
	</td><td>
	Returns the largest of the numbers passed in.<br><code>Math.min(<i>x</i>, <i>y</i>, ...)</code> returns the smallest.
	</td></tr></table>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Learn More About Math Functions</a><br><br>

<h2>Booleans</h2>
The following operators return <code>true</code> or <code>false</code>, these will be essential to make use of Control Flow which is the main concept of this level.
<br><br>

	<h3>Equality Operators</h3>
<table><tr><td>
	<code><i>a</i> == <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are equal in value, false otherwise.<br>
	Note that <i>a</i> and <i>b</i> can have different types and still be equal.<br>
	Examples:
	<code>3.25 == 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 == "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 == 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> === <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are equal in value <b>and have the same type</b>, false otherwise.<br>
	Examples:
	<code>3.25 === 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 === "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 === 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> != <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are not equal in value, regardless of type, false otherwise.<br>
	Examples:
	<code>3.25 != 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 != "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 != 0.2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> !== <i>b</i></code>
</td><td>
	Returns true if <i>a</i> and <i>b</i> are either not equal in value or type, false otherwise.<br>
	Examples:
	<code>3.25 !== 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 !== "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 !== 0.2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Comparison Operators</h3>
	
<table><tr><td>
	<code><i>a</i> < <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is less than <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 < 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 < 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 < 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> <= <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is less than or equal to <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 <= 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> > <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is greater than <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 > 2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> >= <i>b</i></code>
</td><td>
	Returns true if <i>a</i> is greater than or equal to <i>b</i>, false otherwise.<br>
	Examples: 
	<code>1 >= 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 >= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 >= 2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Logical Operators</h3>
	
<table><tr><td>
	<code>!<i>a</i></code>
</td><td>
	The <b>NOT</b> operator, flips true to false and vice versa.<br>
	Examples: 
	<code>!true</code> <code class="console-out">&larr; false</code> , 
	<code>!false</code> <code class="console-out">&larr; true</code>

</td></tr><tr><td>
	<code><i>a</i> && <i>b</i></code>
</td><td>
	The <b>AND</b> operator, returns true if both <i>a</i> and <i>b</i> are true, and false if either of them is false.<br>
	Examples: 
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


<h2>Control Flow</h2>
<h3>If-Else</h3>
Control flow statements allow a program to execute different code based on a condition.<br>
If a certain condition is true, one piece of code is executed; if it's false another piece of code is executed.<br>
<br>
The following code is an example of an <b>if-else</b> statement:
<div class="code">var rollsOfToiletPaper = 5;
if (rollsOfToiletPaper <= 1) {
	console.log("I need to buy more toilet paper!");
} else if (rollsOfToiletPaper > 50){
	console.log("Why did I buy this much toilet paper??");
} else {
	console.log("All good.");
}</div>
This program should be easy to understand:<br>
If the value of <code>rollsOfToiletPaper</code> is less than or equal to 1, the code inside the first pair of curly braces is executed.<br> If it's greater than 50, the code between the second pair of curly braces is executed.<br>
Otherwise the codein the last set of braces is executed.<br><br>
<b>Note:</b> Code that's written between curly braces is called a <b>block</b> of code.
<br><br>

To give a more formal definition, the <code>if</code> keyword is always followed by condition inside a pair of parentheses <code>(<i>condition</i>)</code>, after the condition we place a block of code <code>{ <i>do something here</i> }</code>.<br>
Optionally, afterwards we can place an <code>else if</code> which behaves the same as an <code>if</code> or just an <code>else</code> which doesn't take a condition, just a block.
<br>
Once the first condition is met the block following it is executed, the blocks for all the other <code>else</code> statements are ignored.

	<br><br>
<h3>Switch</h3>
Sometimes we have to write programs like this:
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
	console.log('Unsupported letter, please try again');
}</div>

It gets tedious and difficult to read, a much more convenient and appealing way of writing the same program is with a <code>switch</code> statement:
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

<h3>Conditional Operator (or the Ternary Operator)</h3>
<code><i>condition</i> ? <i>statement1</i> : <i>statement2</i>;</code><br><br>
If <i>condition</i> evaluates to true then <i>statement1</i> is executed, otherwise <i>statement2</i> is executed.<br>
Consider the following code:
<div class="code">var milkExpired = false;
if (milkExpired) {
	console.log("I'm not having breakfast today :(");
} else {
	console.log("Cereal time!");
}</div>

Using the conditional operator, it can be shortened to:
<div class="code">var milkExpired = false;
milkExpired ? console.log("I'm not having breakfast today.") : console.log("Cereal time!");
</div>
Actually it can be shortened even further:
<div class="code">var milkExpired = false;
console.log( milkExpired ? "I'm not having breakfast today." : "Cereal time!");
</div>

<h2>Time to Play The Level</h2>
It's pretty obvious the robot will have to jump, try it out, go to the <b>Console Tab</b> and type in:<br>
<code>robot.jump(10);</code> That's the furthest forward the robot can jump.
<br><br>
Try to alternate between jumping and moving forward? <code>robot.move(40);</code>
<br>
By the way, when the text input is selected in the console, use the up and down keys to go back and forth in your executed commands history.
<br><br>
If you can, try to write your solution in the <b>Script Tab</b>.<br><br>

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
<h1>Level 4</h1>

<h3>I haven't written the instructions for this level yet :(</h3>
<h3>If you would like to help out tweet me <a href="https://twitter.com/reaalkhalil/">@reaalkhalil</a></h3>

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



