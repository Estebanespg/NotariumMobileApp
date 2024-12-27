export default function HtmlReport() {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reporte Académico</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }

          h1 {
            text-align: center;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          th,
          td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
          }

          th {
            background-color: #f4f4f4;
          }

          .subtable {
            width: 90%;
            margin: auto;
            border-collapse: collapse;
          }

          .subtable th,
          .subtable td {
            border: 1px solid #aaa;
            padding: 5px;
            text-align: left;
          }

          .subtable th {
            background-color: #e0e0e0;
          }

          .subtable th:nth-child(1),
          .subtable td:nth-child(1) {
            width: 60%;
          }

          .subtable th:nth-child(2),
          .subtable td:nth-child(2) {
            width: 20%;
          }

          .subtable th:nth-child(3),
          .subtable td:nth-child(3) {
            width: 20%;
          }
        </style>
      </head>
      <body>
        <h1>Reporte Académico</h1>
        <div>
          <p><strong>Nombre del Estudiante:</strong> Juan Pérez</p>
          <table>
            <thead>
              <tr>
                <th>Materia</th>
                <th>Porcentaje Evaluado</th>
                <th>Nota Definitiva</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matemáticas</td>
                <td>%</td>
                <td>Nota</td>
                <td>
                  <table class="subtable">
                    <thead>
                      <tr>
                        <th>Parámetro</th>
                        <th>Nota</th>
                        <th>Porcentaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Examen Parcial</td>
                        <td>4.5</td>
                        <td>40%</td>
                      </tr>
                      <tr>
                        <td>Tareas</td>
                        <td>4.0</td>
                        <td>30%</td>
                      </tr>
                      <tr>
                        <td>Examen Final</td>
                        <td>4.8</td>
                        <td>30%</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>Historia</td>
                <td>%</td>
                <td>Nota</td>
                <td>
                  <table class="subtable">
                    <thead>
                      <tr>
                        <th>Parámetro</th>
                        <th>Nota</th>
                        <th>Porcentaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ensayo</td>
                        <td>3.8</td>
                        <td>50%</td>
                      </tr>
                      <tr>
                        <td>Exposición</td>
                        <td>4.0</td>
                        <td>50%</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>Ciencias</td>
                <td>%</td>
                <td>Nota</td>
                <td>
                  <table class="subtable">
                    <thead>
                      <tr>
                        <th>Parámetro</th>
                        <th>Nota</th>
                        <th>Porcentaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Proyecto</td>
                        <td>4.7</td>
                        <td>60%</td>
                      </tr>
                      <tr>
                        <td>Prácticas</td>
                        <td>4.3</td>
                        <td>40%</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  `;
}