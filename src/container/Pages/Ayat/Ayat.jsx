import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import './Ayat.css';
import loading from '../loader.gif';


class Ayat extends Component {

    state = {
        ayat: [],
        number: 0,
        name: '',
        englishName: '',
        englishNameTranslation: '',
        revelationType: '',
        numberOfAyahs: 0,
        isLoading: true
    }

    // componentDidMount() {
    //     let id = this.props.match.params.id;
    //     Axios.get(`https://al-quran-8d642.firebaseio.com/surat/${id}.json`)
    //     .then((res) => {
    //         console.log(res.data);
    //         // let ayat = res.data;
    //         this.setState({
    //             ayat: res.data
    //         })
    //     })
    // }

    componentDidMount() {
        let id = this.props.match.params.id;
        Axios.get(`http://api.alquran.cloud/surah/${id}`)
            .then((res) => {
                console.log(res.data);
                // let ayat = res.data;
                this.setState({
                    ayat: res.data.data.ayahs,
                    number: res.data.data.number,
                    name: res.data.data.name,
                    englishName: res.data.data.englishName,
                    englishNameTranslation: res.data.data.englishNameTranslation,
                    revelationType: res.data.data.revelationType,
                    numberOfAyahs: res.data.data.numberOfAyahs,
                    isLoading: false
                })
            })
    }

    render() {
        if (this.state.isLoading) {
            return <div className="isLoading"><img src={loading} alt="logo" /></div>
        }
        return (
            <Fragment>
                <div className="header">
                    <div className="selected-surah">
                        <div className="circle-item number-of-ayah">
                            {this.state.numberOfAyahs}<span>Ayah</span>
                        </div>
                        <div className="name-of-surah">
                            <p className="title-surah">{this.state.englishName}</p>
                            <p className="title-ayah">{this.state.englishNameTranslation}</p>
                        </div>
                        <div className="circle-item surah-place">{this.state.revelationType}</div>
                    </div>
                </div>
                <div className="container" id="scrolling_div">
                    <div className="content">
                        <p className="bismillah font-uthmani hide">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                        <ul>
                            {
                                this.state.ayat.map(ayat => {      
                                    return (                              
                                        <li id="ayah1" key={ayat.numberInSurah}>
                                            <div className="content-ayah font-uthmani">
                                                { ayat.text }
                                                {/* <div className="content-translation">
                                                    { ayat.id }
                                                </div> */}
                                            </div>
                                            <div className="number-ayah">{ ayat.numberInSurah }</div>
                                        </li>     
                                    )                               
                                })
                            }
                        </ul>
                        {/* <div className="show-menu-button">
                            <div className="icon-menu"></div>
                        </div> */}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Ayat;