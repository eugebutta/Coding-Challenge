
# Prueba técnica — React developer

Para levantar el proyecto : 
Parado en la carpeta principal (/pruebachedoc) 
```shell
$ npm i 
```
```shell
$ npm start
```



Trate de mantener un diseño basico, eficiente y modularizado del codigo. 

La aplicación fue levantada con create-react-app --template typescript, por su facilidad y rapidez. utilizo taypscript para tener un mejor control de las type props 
Luego creé la carpeta components. Donde se encuentran un conjunto de carpetas , cada carpeta tiene su archivos tsx y su archivo de estilos css correspondiente. 

Luego creé la carpeta de Redux , donde se crea el store y el reducer donde vamos a tener nuestro estados globales. 
Las acciones, al ser bastante simples fueron realizadas desde los componentes a traves de un dispatch directo al reducer. 

El pedido al JSON se lo hace desde el archivo APP y se dispaacha, para tener la info guardado en el estado global desde el primer momento y mejorar la performance .

En el archivo APP el componente Header y Footer no tienen ruteo porque se muestran en todas las screem. 

Agregue un theme dark and ligth mode , para practicar un poco, me pareció divertido.

Creo que podria mejorar el sort con regex o algo mas especifico para el caso alfanumerico. 
Tabambien mejorar un poco el style general .

Con un poco mas de timpo podria haber agreagado el testeo e2e  


## Diploy en **[Prueba Chedoc](https://prueba-chedoc.netlify.app/)**.
