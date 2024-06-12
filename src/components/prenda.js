import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ProductList() {
  return (
        <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Categorías</h1>
          <ul className="list-unstyled templatemo-accordion">
            <li className="pb-3">
              <a className="collapsed d-flex justify-content-between h3 text-decoration-none" data-bs-toggle="collapse" href="#generoCollapse">
                Género
                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
              </a>
              <ul id="generoCollapse" className="collapse list-unstyled pl-3">
                <li><a className="text-decoration-none" href="#">Hombre</a></li>
                <li><a className="text-decoration-none" href="#">Mujer</a></li>
              </ul>
            </li>
            <li className="pb-3">
              <a className="collapsed d-flex justify-content-between h3 text-decoration-none" data-bs-toggle="collapse" href="#tipoCollapse">
                Tipo
                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
              </a>
              <ul id="tipoCollapse" className="collapse list-unstyled pl-3">
                <li><a className="text-decoration-none" href="#">Deportivo</a></li>
                <li><a className="text-decoration-none" href="#">Casual</a></li>
              </ul>
            </li>
            <li className="pb-3">
              <a className="collapsed d-flex justify-content-between h3 text-decoration-none" data-bs-toggle="collapse" href="#prendaCollapse">
                Prenda
                <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
              </a>
              <ul id="prendaCollapse" className="collapse list-unstyled pl-3">
                <li><a className="text-decoration-none" href="#">Polo</a></li>
                <li><a className="text-decoration-none" href="#">Pantalón</a></li>
                <li><a className="text-decoration-none" href="#">Polera</a></li>
              </ul>
            </li>
          </ul>
        </div>


        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-inline shop-top-menu pb-3 pt-1">
                <li className="list-inline-item">
                  <a className="h3 text-dark text-decoration-none mr-3" href="#">Ropa para Hombre y Mujer</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image className="card-img rounded-0 img-fluid" src="img/pantalones.png" alt="Pantalones Antimanchas" />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="h3 text-decoration-none">Pantalones Antimanchas</a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">S/. 24,00</p>
                </div>
                
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image className="card-img rounded-0 img-fluid" src="img/polodecolor.png" alt="Producto Nuevo" />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="producto" className="h3 text-decoration-none">Polo con Cuello Camisero</a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">S/. 30,00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <Image className="card-img rounded-0 img-fluid" src="img/poleratecsup.png" alt="Producto Nuevo" />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="h3 text-decoration-none">Polera TECSUP</a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">S/. 45,00</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductList;
