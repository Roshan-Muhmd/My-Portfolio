import classes from "./Tiles.module.css"

const Tiles = (props) => {
    return (
<div onClick={props.onClick} className={classes.tiles}>
   {props.children}
   </div>
    )
}

export default Tiles;