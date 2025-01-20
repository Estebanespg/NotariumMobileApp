<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1 align="center">
    <picture>
      <source srcset="./assets/ic_notarium_light_white.png" media="(prefers-color-scheme: dark)">
      <img src="./assets/ic_notarium_light_black.png" alt="Notarium Mobile App" width="30">
    </picture>
    Notarium
  </h1>
  <p><b>Notarium</b> es un sistema de gestión de notas académicas diseñado para simplificar el seguimiento y análisis del rendimiento estudiantil. Este software permite registrar estudiantes, asignaturas y configurar sus calificaciones, como sus parámetros, notas y porcentajes, permite calcular promedios y generar reportes en PDF detallados.</p>
  <img src="./assets/Notarium.png" alt="Notarium Mobile App">

  <hr>

  <!-- Características principales -->
  <h2>🚀 Características principales</h2>
  <ul>
    <li><strong>📚 Gestión de estudiantes</strong>: Registra, actualiza y elimina estudiantes fácilmente.</li>
    <li><strong>📝 Evaluaciones personalizadas</strong>: Define evaluaciones con diferentes pesos para cada asignatura.</li>
    <li><strong>📊 Informes y Estadísticas</strong>: Análisis de rendimiento y progreso académico.</li>
    <li><strong>📂 Reportes dinámicos</strong>: Crea reportes en PDF para cada estudiante.</li>
    <li><strong>✨ Interfaz intuitiva</strong>: Sistema simple y fácil de usar para docentes y estudiantes.</li>
    <li><strong>🔒 Seguridad y Encriptación</strong>: Protección con datos encriptados.</li>
  </ul>

  <hr>
  
  <!-- Uso -->
  <h2>✨ Beneficios Clave</h2>
  <h3>1. Ahorro de Tiempo</h3>
  <p>Procesos automatizados y eficientes.</p>
  <h3>2. Análisis de Datos</h3>
  <p>Informes detallados en PDF</p>
  <h3>3. Flexibilidad de Parámetros</h3>
  <p>Parámetros de porcentajes personalizables.</p>

  <hr>

  <!-- Instalación -->
  <h2>📦 Instalación</h2>
  <ol>
    <li>
      <p><strong>Clonar el repositorio:</strong></p>
      <pre><code>git clone https://github.com/Estebanespg/NotariumMobileApp.git</code></pre>
    </li>
    <li>
      <p><strong>Acceder al proyecto:</strong></p>
      <pre><code>cd NotariumMobileApp</code></pre>
    </li>
    <li>
      <p><strong>Instalar dependencias:</strong></p>
      <pre><code>npm install</code></pre>
    </li>
    <li>
      <p><strong>Configurar variables de entorno:</strong></p>
        <ul>
          <li>
            <p>Duplicar el archivo llamado <em>".env.example"</em></p>
          </li>
          <li>
            <p>Cambia el nombre del archivo duplicado por <em>".env"</em></p>
          </li>
          <li>
            <p>Pega la configuración de tu app de Firebase en el archivo <em>".env"</em> sin cambiar el nombre de las variables, por ejemplo:</p>
            <pre><code>
FIREBASE_API_KEY=tu-api-key
FIREBASE_AUTH_DOMAIN=tu-auth-domain
FIREBASE_PROJECT_ID=tu-project-id
FIREBASE_STORAGE_BUCKET=tu-storage-bucket
FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
FIREBASE_APP_ID=tu-app-id</code></pre>
          </li>
        </ul>
      <br>
    </li>
    <li>
      <p><strong>Ejecutar el proyecto:</strong></p>
      <pre><code>npm start</code></pre>
    </li>
    <li>
      <p><strong>Escanea el código QR y pruébala con Expo Go</strong></p>
      <br>
    </li>
    <li>
      <p><strong>Generar build:</strong></p>
      <p>En caso de generar un build de la app será necesario añadir las variables de entorno pero esta vez para producción. esto se puede realizar de dos formas, ingresando las variables y valores por medio de la consola o creando las variables dirigiendonos a la pagina web de Expo.</p>
      <p>Es importante que independientemente de la forma de crear las variables de entorno estas deben llamarse de la misma manera que como vimos anteriormente en el archivo <em>".env"</em>:</p>
      <ul>
        <li>
          <p>Por consola:</p>
          <pre><code>eas secret:create</code></pre>
        </li>
        <li>
          <p>Por página web:</p>
          <p>Para ello debes tener una cuenta de Expo y dirigirte al siguiente enlace: <em>https://expo.dev/accounts/TU-USUARIO/projects/TU-PROYECTO/environment-variables</em>.</p>
          <p>Ten en cuenta cambiar "TU-USUARIO" y "TU-PROYECTO" en el enlace por tu información correspondiente.</p>
        </li>
        <br>
      </ul>
      <p>Luego de configurar las variables de entorno ingresa el siguiente código en la consola para hacer build:</p>
      <pre><code>eas build -p android --profile preview</code></pre>
      <p>Finalmente podrás ver el build en la página de Expo.</p>
    </li>
  </ol>

  <hr>

  <!-- Uso -->
  <h2>📝 Uso</h2>
  <h3>1. Registro de estudiantes</h3>
  <p>Agrega estudiantes al sistema con sus datos básicos y asignaturas.</p>
  <h3>2. Gestión de evaluaciones</h3>
  <p>Configura evaluaciones, define pesos y añade calificaciones.</p>
  <h3>3. Generación de reportes</h3>
  <p>Exporta reportes detallados en formato PDF con las calificaciones por asignatura. <a href="assets/ReporteEstudiantes.pdf">Ver PDF de ejemplo</a></p>

  <hr>

  <!-- Tecnologías utilizadas -->
  <h2>🛠️ Tecnologías utilizadas</h2>
  <ul>
    <li><strong>Lenguaje:</strong> Javascript</li>
    <li><strong>Librerías:</strong>
      <ul>
        <li>React Native: Framework para apps móviles con JavaScript.</li>
        <li>Expo: Plataforma para simplificar React Native.</li>
        <li>Native Wind: Estilos Tailwind CSS en React Native.</li>
        <li>Firebase: Base de datos y Autenticación de Google.</li>
      </ul>
    </li>
  </ul>

  <hr>

  <!-- Autor -->
  <h2>👥 Autor</h2>
  <ul>
    <li><strong><a href="https://github.com/Estebanespg">Esteban Pérez:</a></strong> Desarrollador y creador de Notarium.</li>
  </ul>
</body>
</html>