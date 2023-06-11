import './Restart.css'
export function Restart(){
    return(

        <button id="restart" onClick={()=>{
            location.reload();
        }}>Restart</button>
    )
}