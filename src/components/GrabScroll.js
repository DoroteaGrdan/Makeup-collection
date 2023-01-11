export default function GrabScroll(props){

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    console.log("aaa")
    pos = {
        left: document.querySelector(".container").scrollLeft,
        top: document.querySelector(".container").scrollTop,
        x: e.clientX,
        y: e.clientY,
    };

    document.querySelector(".container").addEventListener('mousemove', mouseMoveHandler);
    document.querySelector(".container").addEventListener('mouseup', mouseUpHandler);
    document.querySelector(".container").style.cursor = 'grabbing';
    document.querySelector(".container").style.userSelect = 'none';
};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    document.querySelector(".container").scrollTop = pos.top - dy;
    document.querySelector(".container").scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
    document.querySelector(".container").removeEventListener('mousemove', mouseMoveHandler);
    document.querySelector(".container").removeEventListener('mouseup', mouseUpHandler);

    document.querySelector(".container").style.cursor = 'grab';
    document.querySelector(".container").style.removeProperty('user-select');
};
    return (
        <div className="container" onMouseDown={mouseDownHandler}>
            {props.children}
        </div>
    )
}