import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="banner-content">
                                            <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                                            <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="image-holder">
                                            <img src="images/banner-image.png" alt="banner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="swiper-slide">
                                    <div className="container">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6">
                                                <div className="banner-content">
                                                    <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                                                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="image-holder">
                                                    <img src="images/banner-image.png" alt="banner" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6">
                                        <div className="banner-content">
                                            <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                                            <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="image-holder">
                                            <img src="images/banner-image.png" alt="banner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="material-symbols-outlined fs-1 text-dark">
                        arrow_back_ios
                    </span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="material-symbols-outlined fs-1 text-dark">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
            <section id="company-services" className="padding-large">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">Free delivery</h3>
                                    <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <span className="material-symbols-outlined">
                                        new_releases
                                    </span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">Quality guarantee</h3>
                                    <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <span className="material-symbols-outlined">
                                        sell
                                    </span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">Daily offers</h3>
                                    <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box d-flex">
                                <div className="icon-box-icon pe-3 pb-3">
                                    <span className="material-symbols-outlined">
                                        shield
                                    </span>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title text-uppercase text-dark">100% secure payment</h3>
                                    <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
                            <div className="btn-right">
                                <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={4}
                            loop="true"
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                480: {
                                    width: 576,
                                    slidesPerView: 2,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1080: {
                                    width: 1080,
                                    slidesPerView: 4,
                                },

                            }}

                        >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item1.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">Iphone 10</a>
                                            </h3>
                                            <span className="item-price text-primary">$980</span>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item2.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">Iphone 10 pro</a>
                                            </h3>
                                            <span className="item-price text-primary">$1000</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item3.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">Iphone 11</a>
                                            </h3>
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item4.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">Iphone 12</a>
                                            </h3>
                                            <span className="item-price text-primary">$1300</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item5.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">Iphone 13</a>
                                            </h3>
                                            <span className="item-price text-primary">$1500</span>
                                        </div>
                                    </div>
                                </div>/
                            </SwiperSlide >

                        </Swiper>
                    </div>
                </div>
                <div className="swiper-pagination position-absolute text-center"></div>
            </section>
            <section id="smart-watches" className="product-store padding-large position-relative">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
                            <div className="btn-right">
                                <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={4}
                            loop="true"
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 1,
                                },
                                480: {
                                    width: 576,
                                    slidesPerView: 2,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1080: {
                                    width: 1080,
                                    slidesPerView: 4,
                                },

                            }}

                        >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item6.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">Pink watch</a>
                                            </h3>
                                            <span className="item-price text-primary">$870</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item7.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">Heavy watch</a>
                                            </h3>
                                            <span className="item-price text-primary">$680</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item8.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">spotted watch</a>
                                            </h3>
                                            <span className="item-price text-primary">$750</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item9.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">black watch</a>
                                            </h3>
                                            <span className="item-price text-primary">$650</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide >
                            <SwiperSlide >
                                <div className="swiper-slide">
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src="images/product-item10.jpg" alt="product-item" className="img-fluid" />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                <a href="#" className="btn btn-medium btn-black">Add to Cart
                                                    <span className="material-symbols-outlined">
                                                        shopping_cart
                                                    </span></a>
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">black watch</a>
                                            </h3>
                                            <span className="item-price text-primary">$750</span>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="swiper-pagination position-absolute text-center"></div>
            </section >
            <section id="yearly-sale" className="bg-light-blue overflow-hidden mt-5 padding-xlarge" style={{ backgroundImage: "url('images/single-image1.png')", backgroundPosition: "right", backgroundRepeat: "no-repeat" }}>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="text-content offset-4 padding-medium">
                            <h3>10% off</h3>
                            <h2 className="display-2 pb-5 text-uppercase text-dark">New year sale</h2>
                            <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Sale</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">

                    </div>
                </div>
            </section>
            <section id="latest-blog" className="padding-large">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">Latest Posts</h2>
                            <div className="btn-right">
                                <a href="blog.html" className="btn btn-medium btn-normal text-uppercase">Read Blog</a>
                            </div>
                        </div>
                        <div className="post-grid d-flex flex-wrap justify-content-between">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card border-none me-3">
                                    <div className="card-image">
                                        <img src="images/post-item1.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="card-body text-uppercase">
                                    <div className="card-meta text-muted">
                                        <span className="meta-date">feb 22, 2023</span>
                                        <span className="meta-category">- Gadgets</span>
                                    </div>
                                    <h3 className="card-title">
                                        <a href="#">Get some cool gadgets in 2023</a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card border-none me-3">
                                    <div className="card-image">
                                        <img src="images/post-item2.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="card-body text-uppercase">
                                    <div className="card-meta text-muted">
                                        <span className="meta-date">feb 25, 2023</span>
                                        <span className="meta-category">- Technology</span>
                                    </div>
                                    <h3 className="card-title">
                                        <a href="#">Technology Hack You Won't Get</a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card border-none me-3">
                                    <div className="card-image">
                                        <img src="images/post-item3.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="card-body text-uppercase">
                                    <div className="card-meta text-muted">
                                        <span className="meta-date">feb 22, 2023</span>
                                        <span className="meta-category">- Camera</span>
                                    </div>
                                    <h3 className="card-title">
                                        <a href="#">Top 10 Small Camera In The World</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="swiper-slide text-center d-flex justify-content-center">
                            <div className="review-item col-md-10">
                                <i className="icon icon-review"></i>
                                <blockquote>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                                <div className="rating">
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className="author-detail">
                                    <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="swiper-slide text-center d-flex justify-content-center">
                            <div className="review-item col-md-10">
                                <i className="icon icon-review"></i>
                                <blockquote>“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                                <div className="rating">
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>

                                </div>
                                <div className="author-detail">
                                    <div className="name text-dark text-uppercase pt-2">Jennie Rose</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="swiper-slide text-center d-flex justify-content-center">
                            <div className="review-item col-md-10">
                                <i className="icon icon-review"></i>
                                <blockquote>“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                                <div className="rating">
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>

                                </div>
                                <div className="author-detail">
                                    <div className="name text-dark text-uppercase pt-2">Jennie Rose</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="material-symbols-outlined fs-1 text-dark">
                        arrow_back_ios
                    </span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="material-symbols-outlined fs-1 text-dark">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
            <section id="subscribe" className="container-grid padding-large position-relative overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
                            <div className="col-md-6 col-sm-12">
                                <div className="display-header pe-3">
                                    <h2 className="display-7 text-uppercase text-light">Subscribe Us Now</h2>
                                    <p>Get latest news, updates and deals directly mailed to your inbox.</p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <form className="subscription-form validate">
                                    <div className="input-group flex-wrap">
                                        <input className="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required="" />
                                        <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}
