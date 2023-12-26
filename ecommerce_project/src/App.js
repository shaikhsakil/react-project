
import Heading from './components/Header.js';
import Banner from './components/Banner.js';

function App() {
  return (

    <>
      <Heading />
      <Banner />

      
      <div className="main_content">
        <div className="section pb_20 class">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single_banner">
                  <img src="assets/images/shop_banner_img1.jpg" alt="shop_banner_img1" />
                  <div className="single_banner_info">
                    <h5 className="single_bn_title1">Super Sale</h5>
                    <h3 className="single_bn_title">New Collection</h3>
                    <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single_banner">
                  <img src="assets/images/shop_banner_img2.jpg" alt="shop_banner_img2" />
                  <div className="single_banner_info">
                    <h3 className="single_bn_title">New Season</h3>
                    <h4 className="single_bn_title1">Sale 40% Off</h4>
                    <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section small_pt pb_70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="heading_s1 text-center">
                  <h2>Exclusive Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tab-style1">
                  <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="arrival-tab" data-bs-toggle="tab" href="#arrival" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="sellers-tab" data-bs-toggle="tab" href="#sellers" role="tab" aria-controls="sellers" aria-selected="false">Best Sellers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="featured-tab" data-bs-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="special-tab" data-bs-toggle="tab" href="#special" role="tab" aria-controls="special" aria-selected="false">Special Offer
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                    <div className="row shop_container">
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img1.jpg" alt="product_img1" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#DA323F"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img2.jpg" alt="product_img2" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6>
                            <div className="product_price">
                              <span className="price">$55.00</span>
                              <del>$95.00</del>
                              <div className="on_sale">
                                <span>25% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#847764"></span>
                                <span data-color="#0393B5"></span>
                                <span data-color="#DA323F"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash">New</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img3.jpg" alt="product_img3" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#7C502F"></span>
                                <span data-color="#2F366C"></span>
                                <span data-color="#874A3D"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img4.jpg" alt="product_img4" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#A92534"></span>
                                <span data-color="#B9C2DF"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img5.jpg" alt="product_img5" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#5FB7D4"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-danger">Hot</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img6.jpg" alt="product_img6" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$55.00</span>
                              <del>$95.00</del>
                              <div className="on_sale">
                                <span>25% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-success">Sale</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img7.jpg" alt="product_img7" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#7C502F"></span>
                                <span data-color="#2F366C"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img8.jpg" alt="product_img8" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#444653"></span>
                                <span data-color="#B9C2DF"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="sellers" role="tabpanel" aria-labelledby="sellers-tab">
                    <div className="row shop_container">
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img9.jpg" alt="product_img9" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#B5B6BB"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#DA323F"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-danger">Hot</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img6.jpg" alt="product_img6" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$55.00</span>
                              <del>$95.00</del>
                              <div className="on_sale">
                                <span>25% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img11.jpg" alt="product_img11" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#090909"></span>
                                <span data-color="#AC644D"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-success">Sale</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img7.jpg" alt="product_img7" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#7C502F"></span>
                                <span data-color="#2F366C"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img8.jpg" alt="product_img8" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#444653"></span>
                                <span data-color="#B9C2DF"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img5.jpg" alt="product_img5" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#5FB7D4"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img12.jpg" alt="product_img12" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <span className="pr_flash">New</span>
                            <h6 className="product_title"><a href="shop-product-detail.html">Black T-shirt for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#1B1B25"></span>
                                <span data-color="#444653"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-danger">Hot</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img10.jpg" alt="product_img10" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Red & Black check shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$55.00</span>
                              <del>$95.00</del>
                              <div className="on_sale">
                                <span>25% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#E8ADA9"></span>
                                <span data-color="#C38F77"></span>
                                <span data-color="#BE7154"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                    <div className="row shop_container">
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img5.jpg" alt="product_img5" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#5FB7D4"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img12.jpg" alt="product_img12" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <span className="pr_flash">New</span>
                            <h6 className="product_title"><a href="shop-product-detail.html">Black T-shirt for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#1B1B25"></span>
                                <span data-color="#444653"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img9.jpg" alt="product_img9" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#B5B6BB"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#DA323F"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-success">Sale</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img10.jpg" alt="product_img10" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Red & Black check shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$55.00</span>
                              <del>$95.00</del>
                              <div className="on_sale">
                                <span>25% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#E8ADA9"></span>
                                <span data-color="#C38F77"></span>
                                <span data-color="#BE7154"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-danger">Hot</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img7.jpg" alt="product_img7" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#7C502F"></span>
                                <span data-color="#2F366C"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img11.jpg" alt="product_img11" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#090909"></span>
                                <span data-color="#AC644D"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img8.jpg" alt="product_img8" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#444653"></span>
                                <span data-color="#B9C2DF"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash">Sale</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img6.jpg" alt="product_img6" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$55.00</span>
                              <del>$95.00</del>
                              <div className="on_sale">
                                <span>25% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="special" role="tabpanel" aria-labelledby="special-tab">
                    <div className="row shop_container">
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img4.jpg" alt="product_img4" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#A92534"></span>
                                <span data-color="#B9C2DF"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img9.jpg" alt="product_img9" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#B5B6BB"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#DA323F"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img8.jpg" alt="product_img8" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Men Checks Casual Shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#444653"></span>
                                <span data-color="#B9C2DF"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash">New</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img1.jpg" alt="product_img1" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                            <div className="product_price">
                              <span className="price">$45.00</span>
                              <del>$55.25</del>
                              <div className="on_sale">
                                <span>35% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                                <span data-color="#DA323F"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img12.jpg" alt="product_img12" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <span className="pr_flash bg-danger">Hot</span>
                            <h6 className="product_title"><a href="shop-product-detail.html">Black T-shirt for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$69.00</span>
                              <del>$89.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#1B1B25"></span>
                                <span data-color="#444653"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img6.jpg" alt="product_img6" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                            <div className="product_price">
                              <span className="price">$55.00</span>
                              <del>$95.00</del>
                              <div className="on_sale">
                                <span>25% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#87554B"></span>
                                <span data-color="#333333"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <span className="pr_flash bg-success">Sale</span>
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img7.jpg" alt="product_img7" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#333333"></span>
                                <span data-color="#7C502F"></span>
                                <span data-color="#2F366C"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="product">
                          <div className="product_img">
                            <a href="shop-product-detail.html">
                              <img src="assets/images/product_img11.jpg" alt="product_img11" />
                            </a>
                            <div className="product_action_box">
                              <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i className="icon-heart"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="product_info">
                            <h6 className="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
                            <div className="product_price">
                              <span className="price">$68.00</span>
                              <del>$99.00</del>
                              <div className="on_sale">
                                <span>20% Off</span>
                              </div>
                            </div>
                            <div className="pr_desc">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div className="pr_switch_wrap">
                              <div className="product_color_switch">
                                <span className="active" data-color="#090909"></span>
                                <span data-color="#AC644D"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg_light_blue2 pb-0 pt-md-0">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-md-6 offset-md-1">
                <div className="medium_divider d-none d-md-block clearfix"></div>
                <div className="trand_banner_text text-center text-md-start">
                  <div className="heading_s1 mb-3">
                    <span className="sub_heading">New season trends!</span>
                    <h2>Best Summer Collection</h2>
                  </div>
                  <h5 className="mb-4">Sale Get up to 50% Off</h5>
                  <a href="shop-left-sidebar.html" className="btn btn-fill-out rounded-0">Shop Now</a>
                </div>
                <div className="medium_divider clearfix"></div>
              </div>
              <div className="col-md-5">
                <div className="text-center trading_img">
                  <img src="assets//images/tranding_img.png" alt="tranding_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="heading_s1 text-center">
                  <h2>Featured Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <a href="shop-product-detail.html">
                          <img src="assets/images/product_img1.jpg" alt="product_img1" />
                        </a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i className="icon-heart"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                        <div className="product_price">
                          <span className="price">$45.00</span>
                          <del>$55.25</del>
                          <div className="on_sale">
                            <span>35% Off</span>
                          </div>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span className="active" data-color="#87554B"></span>
                            <span data-color="#333333"></span>
                            <span data-color="#DA323F"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <a href="shop-product-detail.html">
                          <img src="assets/images/product_img2.jpg" alt="product_img2" />
                        </a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i className="icon-heart"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6>
                        <div className="product_price">
                          <span className="price">$55.00</span>
                          <del>$95.00</del>
                          <div className="on_sale">
                            <span>25% Off</span>
                          </div>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span className="active" data-color="#847764"></span>
                            <span data-color="#0393B5"></span>
                            <span data-color="#DA323F"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <span className="pr_flash">New</span>
                      <div className="product_img">
                        <a href="shop-product-detail.html">
                          <img src="assets/images/product_img3.jpg" alt="product_img3" />
                        </a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i className="icon-heart"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6>
                        <div className="product_price">
                          <span className="price">$68.00</span>
                          <del>$99.00</del>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span className="active" data-color="#333333"></span>
                            <span data-color="#7C502F"></span>
                            <span data-color="#2F366C"></span>
                            <span data-color="#874A3D"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <a href="shop-product-detail.html">
                          <img src="assets/images/product_img4.jpg" alt="product_img4" />
                        </a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i className="icon-heart"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                        <div className="product_price">
                          <span className="price">$69.00</span>
                          <del>$89.00</del>
                          <div className="on_sale">
                            <span>20% Off</span>
                          </div>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span className="active" data-color="#333333"></span>
                            <span data-color="#A92534"></span>
                            <span data-color="#B9C2DF"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <a href="shop-product-detail.html">
                          <img src="assets/images/product_img5.jpg" alt="product_img5" />
                        </a>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i className="icon-heart"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                        <div className="product_price">
                          <span className="price">$45.00</span>
                          <del>$55.25</del>
                          <div className="on_sale">
                            <span>35% Off</span>
                          </div>
                        </div>
                        <div className="pr_desc">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span className="active" data-color="#87554B"></span>
                            <span data-color="#333333"></span>
                            <span data-color="#5FB7D4"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg_redon">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="heading_s1 text-center">
                  <h2>Our Client Say!</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="testimonial_wrap testimonial_style1 carousel_slider owl-carousel owl-theme nav_style2" data-nav="true" data-dots="false" data-center="true" data-loop="true" data-autoplay="true" data-items='1'>
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img src="assets/images/user_img1.jpg" alt="user_img1" />
                      </div>
                      <div className="author_name">
                        <h6>Lissa Castro</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img src="assets/images/user_img2.jpg" alt="user_img2" />
                      </div>
                      <div className="author_name">
                        <h6>Alden Smith</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img src="assets/images/user_img3.jpg" alt="user_img3" />
                      </div>
                      <div className="author_name">
                        <h6>Daisy Lana</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_box">
                    <div className="testimonial_desc">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                    </div>
                    <div className="author_wrap">
                      <div className="author_img">
                        <img src="assets/images/user_img4.jpg" alt="user_img4" />
                      </div>
                      <div className="author_name">
                        <h6>John Becker</h6>
                        <span>Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section pb_70">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-4">
                <div className="icon_box icon_box_style1">
                  <div className="icon">
                    <i className="flaticon-shipped"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>Free Delivery</h5>
                    <p>If you are going to use of Lorem, you need to be sure there anything</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon_box icon_box_style1">
                  <div className="icon">
                    <i className="flaticon-money-back"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>30 Day Return</h5>
                    <p>If you are going to use of Lorem, you need to be sure there anything</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon_box icon_box_style1">
                  <div className="icon">
                    <i className="flaticon-support"></i>
                  </div>
                  <div className="icon_box_content">
                    <h5>27/4 Support</h5>
                    <p>If you are going to use of Lorem, you need to be sure there anything</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg_default small_pt small_pb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="heading_s1 mb-md-0 heading_light">
                  <h3>Subscribe Our Newsletter</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="newsletter_form">
                  <form>
                    <input type="text" required="" className="form-control rounded-0" placeholder="Enter Email Address" />
                    <button type="submit" className="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <footer className="footer_dark">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget">
                  <div className="footer_logo">
                    <a href="#"><img src="assets/images/logo_light.png" alt="logo" /></a>
                  </div>
                  <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                </div>
                <div className="widget">
                  <ul className="social_icons social_white">
                    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                    <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                    <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                    <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">Useful Links</h6>
                  <ul className="widget_links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">Category</h6>
                  <ul className="widget_links">
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Woman</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Best Saller</a></li>
                    <li><a href="#">New Arrivals</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">My Account</h6>
                  <ul className="widget_links">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Discount</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Orders History</a></li>
                    <li><a href="#">Order Tracking</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">Contact Info</h6>
                  <ul className="contact_info contact_info_light">
                    <li>
                      <i className="ti-location-pin"></i>
                      <p>123 Street, Old Trafford, New South London , UK</p>
                    </li>
                    <li>
                      <i className="ti-email"></i>
                      <a href="mailto:info@sitename.com">info@sitename.com</a>
                    </li>
                    <li>
                      <i className="ti-mobile"></i>
                      <p>+ 457 789 789 65</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer border-top-tran">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-md-0 text-center text-md-start">© 2020 All Rights Reserved by Bestwebcreator</p>
              </div>
              <div className="col-md-6">
                <ul className="footer_payment text-center text-lg-end">
                  <li><a href="#"><img src="assets/images/visa.png" alt="visa" /></a></li>
                  <li><a href="#"><img src="assets/images/discover.png" alt="discover" /></a></li>
                  <li><a href="#"><img src="assets/images/master_card.png" alt="master_card" /></a></li>
                  <li><a href="#"><img src="assets/images/paypal.png" alt="paypal" /></a></li>
                  <li><a href="#"><img src="assets/images/amarican_express.png" alt="amarican_express" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};

export default App;
