import React from 'react' 

const ColorText = (WrappedComponent) => {

    const colors = ['red', 'blue', 'yellow', 'green', 'orang', 'brown'];
    const randomColor = colors [Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }


}

export default ColorText;