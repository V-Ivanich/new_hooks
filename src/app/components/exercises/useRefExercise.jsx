import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const widthRef = useRef();
    const textRef = useRef();

    const handleClick = () => {
        widthRef.current.style.width = "150px";
        widthRef.current.style.height = "80px";
        textRef.current.textContent = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={widthRef}
            >
                <small ref={textRef}>Блок</small>
            </div>
            <button className="btn btn-secondary m-2" onClick={handleClick}>
                Changes styles
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
