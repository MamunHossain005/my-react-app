export default function Task({task, isDone}){
    let taskContent = task;
    if(isDone){
        taskContent = task + '<';
    }
    return(
        <li>{taskContent}</li>
    );
}