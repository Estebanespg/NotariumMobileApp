export default function HtmlReport(students) {
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

          .title {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            margin-bottom: -50px;
          }

          .content {
            margin-top: 100px;
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

          .header th:nth-child(1) {
            width: 26%;
          }

          .header th:nth-child(2) {
            width: 12%;
          }

          .header th:nth-child(3) {
            width: 12%;
          }

          .header th:nth-child(4) {
            width: 50%;
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

          .subtable th:nth-child(1) {
            width: 60%;
          }

          .subtable th:nth-child(2) {
            width: 20%;
          }

          .subtable th:nth-child(3) {
            width: 20%;
          }

          .footer {
            display: flex;
            align-items: end;
            justify-content: center;
            height: 50px;
          }
        </style>
      </head>
      <body>
        <h1 class="title">Reporte Académico</h1>
        ${students.map((student) => `
          <div class="content">
            <p><strong>Nombre del Estudiante:</strong> ${student.student}</p>
            <table>
              <thead class="header">
                <tr>
                  <th>Materia</th>
                  <th>Porcentaje Evaluado</th>
                  <th>Nota Definitiva</th>
                  <th>Detalles</th>
                </tr>
              </thead>
              <tbody>
                ${student.subjects.map((subject) => `
                  <tr>
                    <td>${subject.subject}</td>
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
                          ${subject.grades.map((grade) => `
                            <tr>
                              <td>${grade.parameter}</td>
                              <td>${parseFloat(grade.grade).toFixed(1)}</td>
                              <td>${grade.percentage}%</td>
                            </tr>
                          `).join("")}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `).join("")}
        <h4 class="footer">Notarium</h4>
      </body>
    </html>
  `;
}