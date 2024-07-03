import './Profile.css'

export default function Profile({name, age, occupation}){
    let btnYellow = {
        color: 'green',
        border: '2px solid yellow',
        borderRadius: '10px'
    }
    return(
        <>
            <img src="./src/assets/react.svg" alt="react image" />
            <h3>name: {name}</h3>
            <h4>age: {age}</h4>
            <h4>occupation: {occupation}</h4>
            <button style={btnYellow}>Click Me</button>
        </>
    )
}