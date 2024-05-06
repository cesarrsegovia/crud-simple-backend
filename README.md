pasos de la aplicacion:
1- inicializo paquete npm init -y
2- en json agrego el script de serve: "node index.js"
3- intalar npm i express
4- instalar npm nodemon -D
5- en json agregar el script dev: "nodemon index.js" para que el servidor trabaje automaticamente.
6- se inicializa express en index.js y se envian peticiones para probar que funciona
7- una vez que este funcionando el servidor, conectar con mongo db, instalar npm install mongodb
8- instalar mongoose npm i mongoose
9- conectamos con la base de datos de mongodb a través de mongoose y los datos de conexión que nos da mongo. verificamos a traves de then y catch si efectivamente esta conectado.