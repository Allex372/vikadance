import React, {Component} from 'react';
import Carousel from "react-elastic-carousel";
import './books.css';
import Item from "../items";
import img1 from "../../../img/book_title/bookST_Big.jpg";
import img2 from "../../../img/book_title/titleCha.png";
import img3 from "../../../img/book_title/titleSamba.png";
import img4 from "../../../img/book_title/titleRumba.png";
import img5 from "../../../img/book_title/titleJive.png";
import {NavLink} from "react-router-dom";


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]

export default function Books(){

        return (
            <div id={'main-flex'}>
                <main>
                    <div className={'bottomSlider'}>
                        <Carousel breakPoints={breakPoints}>
                            <Item>
                                <div className={'row'}>
                                    <div className={'column'}>
                                        <div className={'card'}>
                                            <div className={'container'}>
                                                <img className={'imgSize'} src={img1}/>
                                                <p className={'title'}>CEO &amp; Founder</p>
                                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                                <div className={'overlay'}>
                                                    <NavLink to={'/Ballroom_Figures'}>
                                                    <div className={'text'}>Hello World</div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                            <Item>
                                <div className={'row'}>
                                    <div className={'column'}>
                                        <div className={'card'}>
                                            <div className={'container'}>
                                                <img className={'imgSize'} src={img2}/>
                                                <p className={'title'}>CEO &amp; Founder</p>
                                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                                <div className={'overlay'}>
                                                    <div className={'text'}>Hello World</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                            <Item>
                                <div className={'row'}>
                                    <div className={'column'}>
                                        <div className={'card'}>
                                            <div className={'container'}>
                                                <img className={'imgSize'} src={img3}/>
                                                <p className={'title'}>CEO &amp; Founder</p>
                                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                                <div className={'overlay'}>
                                                    <div className={'text'}>Hello World</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                            <Item>
                                <div className={'row'}>
                                    <div className={'column'}>
                                        <div className={'card'}>
                                            <div className={'container'}>
                                                <img className={'imgSize'} src={img4}/>
                                                <p className={'title'}>CEO &amp; Founder</p>
                                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                                <div className={'overlay'}>
                                                    <div className={'text'}>Hello World</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                            <Item>
                                <div className={'row'}>
                                    <div className={'column'}>
                                        <div className={'card'}>
                                            <div className={'container'}>
                                                <img className={'imgSize'} src={img5}/>
                                                <p className={'title'}>CEO &amp; Founder</p>
                                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                                <div className={'overlay'}>
                                                    <div className={'text'}><a href={'#'}>Read book</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                        </Carousel>
                    </div>
                </main>

                <footer>
                    FOOTER
                </footer>
            </div>
        );
}

