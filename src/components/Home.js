import React from 'react'; 
import ColorText from '../hoc/colorText';

const Home = () => {
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo obcaecati pariatur fugit qui minus itaque natus eos aspernatur. Quidem doloribus ut inventore facilis quos quas rem esse similique sed voluptas!</p>
        </div>
    )
}

export default ColorText(Home);