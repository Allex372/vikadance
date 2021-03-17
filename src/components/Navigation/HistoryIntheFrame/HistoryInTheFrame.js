import React, {Component} from 'react';
import couple from "../../../img/images.png";
import couple2 from "../../../img/images2.png";

class HistoryInTheFrame extends Component {
    render() {
        return (
            <div id={'main-flex'}>
                <main>
                    <div className={'mainTextTop'}>
                        <p className={'topTextBig'}>What about <br/>video lessons? </p>
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

                    <div className={'bottomSlider_VS'}>

                    </div>
                </main>

                <footer>
                    DANCE EDUCATION
                </footer>
            </div>
        );
    }
}

export default HistoryInTheFrame;
