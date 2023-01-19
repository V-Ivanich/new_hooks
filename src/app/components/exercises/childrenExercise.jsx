import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const WrapperChildren = ({ children }) => {
    let count = 0;
    return React.Children.map(children, (child) => {
        count += 1;
        const config = {
            text: `${child.props.text} ${count}`
        };

        return React.cloneElement(child, config);
    });
};

WrapperChildren.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <WrapperChildren>
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
                <Component text="Компонент списка" />
            </WrapperChildren>
        </CollapseWrapper>
    );
};

const Component = ({ text }) => {
    return <div>{text}</div>;
};
Component.propTypes = {
    text: PropTypes.string
};

export default ChildrenExercise;
