import React from 'react';

const Result = (props) => {
    return (
        <div class="result">
            <a
                href={`https://en.wikipedia.org/?curid=${props.curid}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>{props.title}</h2>
                <p>{props.extract}</p>
            </a>
        </div>
    )
};

export default Result;