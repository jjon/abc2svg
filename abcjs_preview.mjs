#!/usr/bin/env node
// This is a BBEdit text filter for transforming abc music notation into a block
// of SVG that renders standard music engraving so that BBEdit may display a
// preview. To use it you have to have nodejs present on your system, and you
// have to install Daniel Narey's scoped ES module abc-render-svg like this: npm
// install @folkdb/abc-render-svg. That module, in turn relies on Paul Rosen's
// abcjs module, and the jsdom module. Everything you need is in
// @folkdb/abc-render-svg.
//
// This ES module will not support require() so the node script needs the file
// extension .mjs in order to import the module. That .mjs file needs to live at
// ~/Library/Application Support/BBEdit/Text Filters/abcjs_preview.mjs. Use it
// by selecting some ABC text, and invoking the abcjs_preview Text Filter. The
// selected text will be replaced by an SVG element which BBEdit can preview.

import abcRenderSvg from '@folkdb/abc-render-svg'

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", data => {
    (async () => {
        const svg = await abcRenderSvg(data);
        process.stdout.write(svg);
    })();
})

