export default function Friend({friend}){
    const {userId, id, title, body} = friend;

    return(
        <div className="box">
            <h3>Id: {id}</h3>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
        </div>
    )
}