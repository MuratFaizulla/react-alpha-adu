import './App.css';

function App() {
  return (
    <div>
      <table cellPadding="20">
        <tr>
          <td>
          <img src="./src/photo.jpg" alt="Faizulla Murat" width="100" style={{ borderRadius: '50%' }} />
          </td>
          <td>
            <h1>Faizulla Murat</h1>
            <p><em>A Student at <a href="https://enu.kz/ru/" target="_blank" rel="noopener noreferrer">L.N. Gumilyov Eurasian National University</a></em></p>
            <p>I'm a Front-End Developer and a passionate student interested in web development and learning.</p>
          </td>
        </tr>
      </table>
      <ul>
        <strong>Eurasian National University, Bachelor, 2020-2024</strong>
        <li>Computer Engineering and Software, GPA-3.17</li>
      </ul>
    </div>
  );
}

export default App;
