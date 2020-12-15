import React from 'react';
import ConnectedForm from '../ConnectedForm/ConnectedForm';
import List from '../List/List';

const Articles = () => {
    return (

    <>
        <div>
            <h2>Articles</h2>
            <List />
        </div>
        <div>
            <h2>Add a new article</h2>
            <ConnectedForm />
        </div>
    </>
    );
}

export default Articles;