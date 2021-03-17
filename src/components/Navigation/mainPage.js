import React, {Fragment} from 'react';
import './mainPage.css';
import Carousel from 'react-elastic-carousel';
import Item from './items';
import couple from '../../img/images.png';
import couple2 from '../../img/images2.png';
import img1 from '../../img/babydance.jpg';
import img2 from '../../img/people/allex.jpg';
import img3 from '../../img/people/allex.jpg';
import img4 from '../../img/people/Viktoria Step.jpg';
import img5 from '../../img/people/masha.jpg';

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]

export default function MainPage() {
    return (
        <div id={'main-flex'}>
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
                        <p className={'centerTextSmall'}>This portal was created by a team of Lviv teachers and
                            professional dancers, based on
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
                                            <img className={'imgSize_MP'} src={img1}/>
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
                                            <img className={'imgSize_MP'} src={img2}/>
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
                                            <img className={'imgSize_MP'} src={img3}/>
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
                                            <img className={'imgSize_MP'} src={img4}/>
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
                                            <img className={'imgSize_MP'} src={img5}/>
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

                <div className={'anyInfo'}>
                    <p className={'centerTextBig'}>Breaking News:</p>
                    <div className={'anyInfo_Inside'}>
                        <div className={'anyInfo_Inside_flex_ul'}>
                            <ul className={'centerTextSmall'}>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                            </ul>
                        </div>
                        <div className={'anyInfo_Inside_flex_ul'}>
                            <ul className={'centerTextSmall'}>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                            </ul>
                        </div>
                        <div className={'anyInfo_Inside_flex_ul'}>
                            <ul className={'centerTextSmall'}>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Lorem ipsum dolor sit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                DANCE EDUCATION
            </footer>
        </div>
    );
}
