import React from 'react';
export default function Filter(props) {
    let filters = ['opacity', 'contrast', 'sepia', 'saturate', 'revert', 'invert', 'hue-rotate', 'brightness']
    let o = {};
    let p = props.child;

    for (let filter in props) {
        o[filter] = props[filter];
    }

    for (let filter of filters) {
        if (o[filter] == undefined) {
            o[filter] = false;
        }
    }

    filters.map((filter) => {
        let style = {
            filter: (filter) ? `${filter}(${o[filter]})` : `none`
        }
        p = React.createElement('div', { style: style, key: filter }, p)
    });

    return (
        <div className='Filter' id='Filter'>
            {
                p
            }
        </div>
    );
}