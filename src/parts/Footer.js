import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              Bersama kami liburanmu akan tenang dan nyaman.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beinners</h6>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item">
                <Button type="link" href="#">
                  Buat akun baru
                </Button>
              </li> */}
              <li className="list-group-item">
                <Button type="link" href="#">
                  Pesan Ruangan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="#">
                  Pembayaran
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Tentang Kami</h6>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item">
                <Button type="link" href="#">
                  Karir Kita
                </Button>
              </li> */}
              <li className="list-group-item">
                <Button type="link" href="#">
                  Privasi
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="#">
                  Peraturan Terkait
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Kontak Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:rahadirafsanjani@gmail.com"
                >
                  rahadirafsanjani@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622135526352">
                  0821 - 3552 - 6352
                </Button>
              </li>
              <li className="list-group-item">
                <span>Sleman, Yogyakarta Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 • All rights reserved • RelaxAja
          </div>
        </div>
      </div>
    </footer>
  );
}
