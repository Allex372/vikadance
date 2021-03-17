import React, {Component} from 'react';
import './video_lessons.css'
import ReactPlayer from "react-player";
import couple from "../../../img/images.png";
import couple2 from "../../../img/images2.png";
import img4 from "../../../img/Video_lessons/photo_2019-12-20_14-33-07.jpg";
import img5 from "../../../img/Video_lessons/ProAM.jpg";
import img6 from "../../../img/Video_lessons/masha.jpg";



class VideoLessons extends Component {
    render() {
        return (
            <div id={'main-flex'}>
                <main>
                    <div className={'mainTextTop'}>
                        <p className={'topTextBig'}>What about <br/>video lessons? </p>
                        <img src={couple} alt={'dance couple'} id={'imgCouple1'}/>
                        <img src={couple2} alt={'dance couple'} id={'imgCouple2'}/>
                    </div>

                    <div className={'centerTextVL'}>
                        <div className={'centerText_LeftSideVL'}>
                            <p className={'centerTextBig'}>How we can help you??</p>
                            <div className={'youtubeVideo'}>
                                <ReactPlayer
                                    controls
                                    height = '280px'
                                    width = '380px'
                                    url = 'https://www.youtube.com/watch?v=EtyNnuPLhPk'/>
                                <ReactPlayer
                                    controls
                                    height = '280px'
                                    width = '380px'
                                    url = 'https://www.youtube.com/watch?v=maPN9PkGwCk'/>
                            </div>
                        </div>

                        <div className={'centerText_rightSideVL'}>
                            <p className={'centerTextBig'}>Dance Education</p>
                            <ReactPlayer
                                controls
                                height = '280px'
                                width = '380px'
                                url = 'https://www.youtube.com/watch?v=-HwoeYk0eOw'/>
                            <ReactPlayer
                                controls
                                height = '280px'
                                width = '380px'
                                url = 'https://www.youtube.com/watch?v=EtyNnuPLhPk'/>
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

export default VideoLessons;
