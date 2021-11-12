import React from "react";
import logo from "./logo.png";
import MapPlasma from "./MapPlasma";
import axios from "axios";
import "./App.css";

const Input = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <input />
    </div>
  );
};

const App = () => {
  axios
    .get("https://kebal-api.herokuapp.com/listplasma")
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

  let x = {};

  const pulldata = (data) => {
    x = data;
  };

  const formsubmit = (event) => {
    event.preventDefault();
    let userinput = document.getElementById("form").elements;
    let hamil = 0;
    if (userinput[4].value === "sudah") {
      hamil = 1;
    }
    let useranswer = {
      id: `${userinput[0].value[0].toUpperCase()}${userinput[0].value
        .substring(userinput[0].value.length - 2, userinput[0].value.length)
        .toUpperCase()}${
        userinput[2].value[0]
      }${userinput[3].value[0].toUpperCase()}`,
      nama: userinput[0].value,
      usia: userinput[1].value,
      berat: userinput[2].value,
      jk: userinput[3].value,
      hamil: hamil,
      goldar: userinput[5].value,
      rhesus: userinput[6].value,
      "pernah-covid": userinput[7].value,
      "sembuh-covid": userinput[8].value,
      transfusi: userinput[9].value,
      latitude: x.lat,
      longitude: x.lng,
    };
    console.log(useranswer);
    axios
      .post("https://kebal-api.herokuapp.com/listplasma", useranswer)
      .then((response) => {
        window.confirm(
          "Data sudah ditambahkan. Terimakasih sudah berpartisipasi."
        );
        window.location.reload();
      });
  };

  return (
    <div className="main-container">
      <img src={logo} className="logoheader"></img>
      <div className="title">
        <h1>Formulir Pengisian</h1>
        <h1>Sentra Plasma Darah</h1>
      </div>
      <form onSubmit={formsubmit} id="form">
        <Input title="Nama Lengkap sesuai KTP" />
        <Input title="Usia (tahun)" />
        <Input title="Berat Badan (kg)" />
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
        <h3>Silahkan tempatkan titik pada lokasi Anda</h3>
        <MapPlasma func={pulldata} />
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
