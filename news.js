import React, { component } from 'react';
import Newsingle from './Newsingle';

class News extends Componebt {
    renderItems() {
        return this.props.items.map{(item) => {
<Newsingle key={item.id} item={item} />
        }};
    }

render() {
    return {
        <ul>
        {this.renderItems()}
        </ul>
    };
}
}

export default News;