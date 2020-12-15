import React from 'react';
import { connect } from 'react-redux';

const mapstateToProps = state => {
    return {
        articles: state.articles
    };
}

const ConnectedList = ({ articles }) => {
    let i = 0;
    return (
        <ul>
            {
                articles.map(element => (<li key={ ++i }>{ element.title }</li>))
            }
        </ul>
    );
}

const List = connect(mapstateToProps)(ConnectedList);

export default List;