const InputWithChange = ({ title, vari = null, handleVariChange }) => {
  return (
    <div>
      <h3>{title}</h3>
      <input value={vari} onChange={handleVariChange} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Selamat Datang di Formulir Pengisian Sentra Plasma Darah!</h1>
      <form>
        <InputWithChange title="Nama Lengkap sesuai KTP" />
        <InputWithChange title="Usia (tahun)" />
        <InputWithChange title="Berat Badan (kg)" />
        <h3>Jenis Kelamin</h3>
        <select>
          <option value="pria">pria</option>
          <option value="wanita">wanita</option>
        </select>
        <h3>Apakah Anda sudah pernah atau sedang hamil?</h3>
        <select>
          <option value="sudah">sudah</option>
          <option value="belum">belum</option>
        </select>

        <h3>Golongan Darah</h3>
        <select>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="AB">AB</option>
          <option value="O">O</option>
        </select>
        <h3>Rhesus</h3>
        <select>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="Tidak tahu">Tidak tahu</option>
        </select>
        <h3>
          Apakah Anda sudah pernah terkena COVID-19 dalam 3 bulan terakhir?
        </h3>
        <select>
          <option value="sudah">sudah</option>
          <option value="belum">belum</option>
        </select>
        <h3>
          Apakah Anda sudah dinyatakan sembuh dari COVID-19 lebih dari 14 hari?
        </h3>
        <select>
          <option value="sudah">sudah</option>
          <option value="belum">belum</option>
        </select>
        <h3>Apakah pernah menerima transfusi darah dalam 6 bulan terakhir?</h3>
        <select>
          <option value="sudah">sudah</option>
          <option value="belum">belum</option>
        </select>
        <div style={{ marginTop: 35 }}>
          <button type="submit" style={{ marginRight: 30 }}>
            tambahkan
          </button>
          <button type="reset">reset</button>
        </div>
      </form>
    </div>
  );
};

export default App;
