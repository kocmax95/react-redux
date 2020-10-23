import React from 'react';

import Element from './Element';

import { connect } from 'react-redux';

const List = ({ratesInProps}) => {
    const reatesElements = ratesInProps.map(rate => (
        <Element key={rate.id} {...rate}/>
    ));

    return (  
        <ul>
            {reatesElements}
        </ul>    
    );
};

const connectReduxStateToProps = store => ({
    ratesInProps: store.rates
}) 

const ListConsumer = connect(connectReduxStateToProps)(List);

export default ListConsumer;