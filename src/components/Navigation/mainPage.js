import React, {Component} from 'react';
import './mainPage.css';
import Carousel  from 'react-elastic-carousel';
import Item from './items';

import couple from '../../img/images.png';
import couple2 from '../../img/images2.png';
import img1 from '../../img/babydance.jpg';
import img2 from '../../img/allex.jpg';
import img3 from '../../img/bookST.jpg';
import img4 from '../../img/masha.jpg';
import img5 from '../../img/Taras Shit.jpg';
import img6 from '../../img/titleCha.png';
import img7 from '../../img/titleRumba.png';
import img8 from '../../img/Viktoria Step.jpg';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

class MainPage extends Component {
    render() {
        return (
            <div id={'main-flex'}>
                {/*<header>*/}
                {/*    <div className={'leftSide'}>*/}
                {/*        <a className={'leftSide_logo'}>*/}
                {/*            LeftSideLogo*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <div className={'centerSide'}>*/}
                {/*        <a href={'#'}>Books</a>*/}
                {/*        <a href={'#'}>Ballroom Figure</a>*/}
                {/*        <a href={'#'}>History</a>*/}
                {/*        <a href={'#'}>History in the frame</a>*/}
                {/*        <a href={'#'}>Our team</a>*/}
                {/*    </div>*/}
                {/*    <div className={'rightSide'}>*/}
                {/*        <p>*/}
                {/*            Language*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            UserLogo*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</header>*/}

                <main>
                    <div className={'mainTextTop'}>
                        <p className={'topTextBig'}>Dance Education <br/>like a life style </p>
                        <img src={couple} alt={'dance couple'} id={'imgCouple1'}/>
                        <img src={couple2} alt={'dance couple'} id={'imgCouple2'}/>
                    </div>

                    <div className={'centerText'}>
                        <div className={'centerText_LeftSide'}>
                            <p className={'centerTextBig'}>How can we help you??</p>
                            <p className={'centerTextSmall'}>This portal is designed for dancers of all levels from ballroom
                                lovers to professionals. It will outline information that will help both coaches,
                                judges and dancers. Through this site we want to expand our knowledge of ballroom
                                dance history and teaching techniques. The purpose of this portal is to create a
                                space in which we collect and cover information from the world of ballroom
                                dance.</p>
                        </div>

                        <div className={'centerText_rightSide'}>
                            <p className={'centerTextBig'}>Dance Education</p>
                            <p className={'centerTextSmall'}>This portal was created by a team of Lviv teachers and professional dancers, based on
                                many years of experience. We would like to thank all the teachers and professional
                                dancers, as well as the All-Ukrainian Ballroom Dance Associations for their help in
                                developing and filling the Dance Education portal.</p>
                        </div>
                    </div>

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
                                                <p>example@example.com</p>
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
                                        <img className={'imgSize'} src={img2}/>
                                            <p className={'title'}>CEO &amp; Founder</p>
                                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                            <p>example@example.com</p>
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
                                                <p>example@example.com</p>
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
                                                <p>example@example.com</p>
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
                                                <p>example@example.com</p>
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
}

export default  MainPage;
