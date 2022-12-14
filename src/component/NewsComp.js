import './NewsComp.css';
import React from 'react'


function NewsComp(props) {

console.log("userdata:"+props)
    return (
        <div className="all-cards">
            {props.userData.articale.map((value, index) => {
                return (
                    <a href={value.url} target="_blank" >
                        <div className='newscard' key={index}>
                            <img src={value.urlToImage} className='news-img' />
                            <div>
                                <p><b>Content: </b>{value.content}</p>
                                <p><b>description: </b> {value.description}</p>
                            </div>
                            <div className='news-info'>
                                <div><b>publishedAt:  </b>{value.publishedAt}</div>
                                <div>
                                    <p><b>author:  </b>{value.author}</p>
                                    <p><b>source:  </b>{value.source.name} </p>
                                </div>
                            </div>

                        </div>
                    </a>
                )
            })}
        </div>
    )
}
export default NewsComp;