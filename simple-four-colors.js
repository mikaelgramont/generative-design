const width = 400;
const height = 400;
const canvasEl = document.getElementById('my-canvas');
const positionEl = document.getElementById('position');
const iterationsEl = document.getElementById('iterations');
const angleEl = document.getElementById('angle');
const sizeEl = document.getElementById('size');

const {offsetTop, offsetLeft} = canvasEl;
const ctx = canvasEl.getContext('2d');

const init = (ctx, width, height) => {
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);

    ctx.fillStyle = '#f00';
    ctx.strokeStyle = '#000';
};

const run = () => {
    render(ctx, iterationsEl.value, angleEl.value, sizeEl.value, width, height);
};

const render = (ctx, iterations, angle, size, width, height) => {
    init(ctx, width, height);
    const angleStep = angle / iterations;
    for (let i = 0; i <= iterations; i++) {
        step(ctx, i, iterations, angleStep, size);
    }
    ctx.restore();
};

const step = (ctx, i, nb, angleStep, size) => {
    drawContent(ctx, i, nb, size);
    ctx.rotate(angleStep * Math.PI / 180);
};

const drawContent = (ctx, i, nb, size) => {
    const side = size * (1  - i / nb);
    const colors = [
        '#61a4ff',
        '#b49452',
        '#897931',
        '#61a4ff'
    ];


    offset = 0;
    ctx.strokeStyle = colors[0];
    ctx.beginPath();
    ctx.moveTo((-0.5 + offset) * side, -0.5 * side);
    ctx.lineTo(0.5 * side, -0.5 * side);
    ctx.lineTo(0.5 * side, (-0.5 + offset) * side);
    ctx.stroke();

    ctx.strokeStyle = colors[1];
    ctx.beginPath();
    ctx.moveTo(0.5 * side, (-0.5 + offset) * side);
    ctx.lineTo(0.5 * side, 0.5 * side);
    ctx.lineTo((0.5 - offset) * side , 0.5 * side);
    ctx.stroke();

    ctx.strokeStyle = colors[2];
    ctx.beginPath();
    ctx.moveTo((0.5 - offset) * side , 0.5 * side);
    ctx.lineTo(-0.5 * side, 0.5 * side);
    ctx.lineTo(-0.5 * side, (0.5 - offset) * side);
    ctx.stroke();

    ctx.strokeStyle = colors[3];
    ctx.beginPath();
    ctx.moveTo(-0.5 * side, (0.5 - offset) * side);
    ctx.lineTo(-0.5 * side, -0.5 * side);
    ctx.lineTo((-0.5 + offset) * side, -0.5 * side);
    ctx.stroke();
};

run();


iterationsEl.addEventListener('input', run);
angleEl.addEventListener('input', run);
sizeEl.addEventListener('input', run);
