var xmlns = "http://www.w3.org/2000/svg";

let titleEl = document.querySelector('#title')
let svgContainer = document.querySelector('#svg-container')

let title = (value) => {
    titleEl.innerHTML = value;
}

let footer = (value) => {
    document.querySelector('#footer').innerHTML = value;
}

let line = ({x1, y1, x2, y2, stroke, strokeWidth}) => {
    var svgLine = document.createElementNS(xmlns, 'line')
    svgLine.setAttributeNS(null, 'x1', x1);
    svgLine.setAttributeNS(null, 'y1', y1);
    svgLine.setAttributeNS(null, 'x2', x2);
    svgLine.setAttributeNS(null, 'y2', y2);
    svgLine.setAttributeNS(null, 'stroke', stroke);
    svgLine.setAttributeNS(null, 'stroke-width', strokeWidth);
    svgContainer.appendChild(svgLine)
}

let circle = ({cx, cy, r, stroke, strokeWidth, fill, value, width}) => {
    var svgCircle = document.createElementNS(xmlns, 'circle')
    if(value) {
        svgCircle.setAttributeNS(null, 'cx',  ((480/width) * (cx+1)));
        svgCircle.setAttributeNS(null, 'cy', cy);
        svgCircle.setAttributeNS(null, 'r', r);
        svgCircle.setAttributeNS(null, 'stroke', stroke);
        svgCircle.setAttributeNS(null, 'stroke-width', strokeWidth);
        svgCircle.setAttributeNS(null, 'fill', fill);
        svgContainer.appendChild(svgCircle);
        text({
            x: ((480/width) * (cx+1) - 5),
            y: (cy + (r/2)),
            fill: 'red',
            value: value,
            dominantBaseline: 'middle',
            textAnchor: 'central'
        });
    }
}

let text = ({ x, y, fill, value }) => {
    var svgText = document.createElementNS(xmlns, 'text')
    svgText.setAttributeNS(null, 'x', x)
    svgText.setAttributeNS(null, 'y', y)
    svgText.setAttributeNS(null, 'fill', fill)
    svgText.innerHTML = value;
    svgContainer.appendChild(svgText);
}

export const add = {
    title: title,
    footer: footer,
    line: line,
    circle: circle,
    text: text
}

