import React, { useState, useEffect } from "react";

function FlagApp() {
  const [ulkeler, setUlkeler] = useState([]);
  const [hata, setHata] = useState(false);
  const [status, setStatus] = useState(200);

  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setHata(true);
          setStatus(res.status);
        }
      })
      .then((data) => setUlkeler(data))
      .catch((error) => console.log(error));
  }, [hata]);

  if (!hata) {
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">ULKELER</h1>
        {ulkeler.map((ulke) => {
          const { name, capital, flags } = ulke;
          return (
            <div key={name.common}>
              <img src={flags[0]} alt={name.common} width="30%" />
              <div>
                <h2>{name.common}</h2>
                <h4>Capital:{capital}</h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <>
        <h1 className="bg-danger text-center text-light mt-5">
          !!HATA VERİLER ÇEKİLEMEDİ-Code:{status}
        </h1>
        <button
          className="btn btn-outline-warning"
          onClick={() => setHata(false)}
        >
          Güncelle
        </button>
      </>
    );
  }
}

export default FlagApp;
