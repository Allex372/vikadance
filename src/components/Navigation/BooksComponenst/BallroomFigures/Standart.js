import React, {Component} from 'react';
import './Standart.css'
import couple from "../../../../img/images.png";
import couple2 from "../../../../img/images2.png";

class Standart extends Component {
    render() {
        return (
            <div id={'main-flex'}>
                <main>
                    <div className={'mainTextTop'}>
                        <p className={'topTextBig'}>Ballroom <br/>figures </p>
                        <img src={couple} alt={'dance couple'} id={'imgCouple1'}/>
                        <img src={couple2} alt={'dance couple'} id={'imgCouple2'}/>
                    </div>

                    <div className={'centerTextST'}>
                        <div className={'topCenterDiv'}>
                            <p className={'centerTextSmall'}>Sorry but it's only a test variant... ^_^</p>
                        </div>
                        <div className={'bottomCenterDiv'}>

                            <div className={'leftSide_button'}>
                                <div className={"dws"}>
                                    <a href="#" className="butt">Slow Waltz</a>
                                </div>
                                <div className={"dws"}>
                                    <a href="#" className="butt">Tango</a>
                                </div>

                            </div>

                            <div className={'rightSide_button'}>
                                <div className={"dws"}>
                                    <a href="#" className="butt">Vienese Waltz</a>
                                </div>
                                <div className={"dws"}>
                                    <a href="#" className="butt">Slow Foxtrot</a>
                                </div>
                                <div className={"dws"}>
                                    <a href="#" className="butt">Quick Step</a>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className={'bottomSlider_ST'}>

                    </div>
                </main>

                <footer>
                    DANCE EDUCATION
                </footer>
            </div>
        );
    }
}

export default Standart;
