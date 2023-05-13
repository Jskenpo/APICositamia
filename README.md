<p align="center">
    <img src="./src/imas/nike.jpg" alt="Descripción de la imagen" style="width: 200px; height: auto;"/>
</p>

# REPICACIÓN DE PÁGINA WEB (PROYECTO 1)

## Introducción
Este proyecto trata de replicar una página identicanmente mediannte una aplicación de react. Como soporte para este framework se utilizó webpack para poder compilar el entorno y babel para hacerlo accesisble a diferentes navegadores y diferentes versiones de javascript.
<br>
<br>
Adicionalemnte para el diseño se utilizó la librería de bootstrap y swiperJs para elementos de diseño dentro del proyecto tales como los navigation bars, los crrouseles y las listas.
<br>
<br>
Este proyecto es una réplica de la página https://www.nike.com/es/


## Tecnologías utilizadas

<ul>
    <li>
        <img src="./src/imas/react.png" style= "width: 30px; height: auto;"/> React
        <br>
        Documentación 
        <br>
        https://legacy.reactjs.org/docs/getting-started.html
    </li>
    <li>
        <img src="./src/imas/bootstrap.png" style= "width: 30px; height: auto;"/> Bootstrap
        <br>
        Documentación
        <br>
        https://getbootstrap.com/docs/4.1/getting-started/introduction/
    </li>
    <li>
        <img src="./src/imas/webpack.png" style= "width: 30px; height: auto;"/> Webpack
        <br>
        Documentación
        <br>
        https://webpack.js.org/concepts/
    </li>
    <li>
        <img src="./src/imas/babel.png" style= "width: 30px; height: auto;"/> Babel
        <br>
        Documentación
        <br>
        https://babeljs.io/docs/usage
    </li>
    <li>
        <img src="./src/imas/swiper.png" style= "width: 30px; height: auto;"/> SwiperJs
        <br>
        Documentación
        <br>
        https://swiperjs.com/get-started
    </li>
    <li>
        <img src="./src/imas/firebase.png" style= "width: 30px; height: auto;"/> Firebase
        <br>
        Documentación
        <br>
        https://firebase.google.com/docs?hl=es-419
    </li>
    <li>
        <img src="./src/imas/sass.png" style= "width: 30px; height: auto;"/> Sass, Scss
        <br>
        Documentación
        <br>
        https://sass-lang.com/documentation/
    </li>
<ul>
 <br>
    
    
   
   
## Utiliza el proyecto
1. Clona este repositorio con el siguiente enlace : 'https://github.com/Jskenpo/PROYECTO1-STW.git'
    <br>
2. Al clonar el repositorio abre una terminal en cosola y digrígete hacia la carpeta en donde colnaste el repositorio 
    <br>
3. Utiliza el comando `npm install` para instalar todas las dependencias especificadas en el package.JSON
    <br>
4. Seguidamente utiliza el comando `npm run start` para poder ver el resultado final del proyecto


## Comandos útiles
`npm run start` crea un entrono de ejecucion de webpack que se actualiza en tiempo real, creando un dist virtual y alojandolo en el servidor local configurado.
    <br>
    <br>
`npm run start-webpack` crea una parqueta dist_react en donde se alojarán los archivos comprimidos de todo el proyecto en un index.html y un main.bundle.js, para poder usar         la aplicacion tienes que abrir el index.html en un servidor local.

## Link de página web 
Si quieres ver el resultado del proyecto, puedes visitar el siguiente link:
    <br>
    <br>
https://api-stw-p1.web.app
## Estructura de proyecto
  <ul>
      <li>
          Proyecto1-STW
          <br>
          En este se alojan todas las configuraciones del proyecto, de misma manera aquí mismo se crea el dist de webpack     
      </li>
      <li>
          <a href='./src'>src</a>
          <br>
          Es la carpeta en la que se alojan todos los componentes y sus estilos, los archivos multimedia que utiliza el proyecto y el index.js en el que se renderiza la aplicación de React
      </li>
      <li>
          <a href='./src/imas'>imas</a>
          <br>
          Carpeta en donde están todos los archivos multimedia que se utilizan en el proyecto
      </li>
      <li>
          <a href='./src/components'>Components</a>
          <br>
          Carpeta en donde se alojan todos loc componentes de react
      </li>
      <li>
          <a href='./dist_react'>dist_react</a>
          <br>
          Es la compilación de entorno de ejecución webpack en donde se aloja el proyecto completo en solo dos archivos, los cuales son index.html y main.bundle.js. Adicionalmente se encuentra una carpeta 'imágenes' en donde se almacenan todos los archivos multimedia
      </li>
  </ul>


