import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import loading from '../loader.gif';
import './Surah.css';

class home extends Component {

    state = {
        surah: [],
        isLoading: true
        // formBlogPost: {
        //     userId: 1,
        //     id: 1,
        //     title: '',
        //     body: ''
        // },
        // isUpdate: false
    }

    // getPostApi = () => {
    //     axios.get('https://al-quran-8d642.firebaseio.com/data.json')
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({
    //                 surah: res.data
    //             })
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    getPostApi = () => {
        axios.get('http://api.alquran.cloud/surah')
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    surah: res.data.data,
                    isLoading: false
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getPostApi()
    }

    handleSubmit = (id) => {
        // alert('test '+id);
        this.props.history.push(`/Ayat/${id}`)
    }

    render() {
        if (this.state.isLoading) {
            return <div className="isLoading"><img src={loading} alt="logo" /></div>
        }
        return (
            <Fragment>
                <div className="header">
                    <div className="title"><p>Qur'an App</p></div>
                </div>
                <div className="card-first">

                    {
                        this.state.surah.map(surah => {
                            return (
                                <div className="card" key={surah.number} onClick={() => this.handleSubmit(surah.number) }>
                                    <div className="number-surah">{surah.number}</div>
                                    <div className="detail-surah">
                                        <p>{surah.englishName}</p>
                                        <p>{surah.numberOfAyahs} Ayah - {surah.revelationType}</p>
                                    </div>
                                </div>
                                // return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default home;
