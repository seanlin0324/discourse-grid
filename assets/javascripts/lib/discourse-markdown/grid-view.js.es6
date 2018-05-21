import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
    opts.features['grid-view'] = true;
});

export function setup(helper) {
    helper.whiteList([ 
        'div.grid-row',
        'div.half'
    ]);
}