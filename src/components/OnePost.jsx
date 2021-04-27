import React from 'react';

export class OnePost extends React.Component{
    render(){
        return(
            <section className="top-category-widget-area pt-90 pb-90 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-cat-widget">
                                <div className="content relative">
                                    <div className="overlay overlay-bg"></div>
                                    <a href="#" target="_blank">
                                        <div className="thumb">
                                            <img className="content-image img-fluid d-block mx-auto"
                                                 src="img/blog/cat-widget1.jpg" alt=""/>
                                        </div>
                                        <div className="content-details">
                                            <h4 className="content-title mx-auto text-uppercase">Social life</h4>
                                            <span></span>
                                            <p>Enjoy your social life together</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-cat-widget">
                                <div className="content relative">
                                    <div className="overlay overlay-bg"></div>
                                    <a href="#" target="_blank">
                                        <div className="thumb">
                                            <img className="content-image img-fluid d-block mx-auto"
                                                 src="img/blog/cat-widget2.jpg" alt=""/>
                                        </div>
                                        <div className="content-details">
                                            <h4 className="content-title mx-auto text-uppercase">Politics</h4>
                                            <span></span>
                                            <p>Be a part of politics</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-cat-widget">
                                <div className="content relative">
                                    <div className="overlay overlay-bg"></div>
                                    <a href="#" target="_blank">
                                        <div className="thumb">
                                            <img className="content-image img-fluid d-block mx-auto"
                                                 src="img/blog/cat-widget3.jpg" alt=""/>
                                        </div>
                                        <div className="content-details">
                                            <h4 className="content-title mx-auto text-uppercase">Food</h4>
                                            <span></span>
                                            <p>Let the food be finished</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}