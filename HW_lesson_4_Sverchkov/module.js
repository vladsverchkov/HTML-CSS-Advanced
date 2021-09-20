let Module = {};

Module.buildDiagram = function (data, width, height, color) {

    let diagram = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    diagram.style.width = width;
    diagram.style.height = height;

    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0, dataLength = data.length; i < dataLength; i++) {
        if (data[i] > max) max = data[i];
    }

    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    for (let i = 0, dataLength = data.length; i < dataLength; i++) {
        let bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        
        let barHeight = data[i] * scale;
        bar.setAttribute("height", barHeight + "px");
        bar.setAttribute("width", barWidth - 4 + "px");

        bar.setAttribute("y", height - barHeight);
        bar.setAttribute("x", barWidth * i);

        bar.style.fill = color;
    
        diagram.append(bar);
    }

    return diagram;

}