import React from 'react';

function Article(props) {
    const {article} = props
    console.log('---', props)
    const body = <section>{article.text}</section>
    return (
        <div className='hello'>
            <h2>
                {article.title}
                <button onClick={handleClick}>close</button>
            </h2>
            {body}
            <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
    )
}

function handleClick() {
    console.log('---', 'clicked')
}

export default Article