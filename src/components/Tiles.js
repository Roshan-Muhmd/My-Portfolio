import classes from "./Tiles.module.css"

const Tiles = (props) => {
    return (
<div className={classes.tiles}>
   {props.children}
   </div>
    )
}

export default Tiles;