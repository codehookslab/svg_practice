var xmlns = "http://www.w3.org/2000/svg";

let titleEl = document.querySelector('#title')
let svgContainer = document.querySelector('#svg-container')

let title = (value) => {
    titleEl.innerHTML = value;
}

let footer = (value) => {
    document.querySelector('#footer').innerHTML = value;
}

let line = () => {
    var svgLine = document.createElementNS(xmlns, 'line')
    svgLine.setAttributeNS(null, 'x1', 50);
    svgLine.setAttributeNS(null, 'y1', 50);
    svgLine.setAttributeNS(null, 'x2', 750);
    svgLine.setAttributeNS(null, 'y2', 50);
    svgLine.setAttributeNS(null, 'stroke', 'red');
    svgLine.setAttributeNS(null, 'stroke-width', 3);

    svgContainer.appendChild(svgLine)
}
let index = 0;
let circle = (value) => {
    ++index
    var svgCircle = document.createElementNS(xmlns, 'circle')
    svgCircle.setAttributeNS(null, 'cx', (value + (50 * index)));
    svgCircle.setAttributeNS(null, 'cy', 50);
    svgCircle.setAttributeNS(null, 'r', 15);
    svgCircle.setAttributeNS(null, 'stroke', 'black');
    svgCircle.setAttributeNS(null, 'stroke-width', 2);
    svgCircle.setAttributeNS(null, 'fill', 'white');

    svgContainer.appendChild(svgCircle);
    text({
        x: (value + (49 * index)),
        y: 55,
        fill: 'red',
        value: index
    });
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

