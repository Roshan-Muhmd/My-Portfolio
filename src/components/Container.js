import classes from "./Container.module.css";
import Tiles from "./UI/Tiles";
import { FiSmile, FiLayers, FiPhone, FiMoreHorizontal } from "react-icons/fi";
import Overlay from "./UI/Overlay";
import { Fragment, useState } from "react";

const CONTENT_DATA = {
  about: "hi my name is roshan",
  project: "lot of projects to be listed",
  contact: "roshanmuhmdnavas@gmail.com",
  more: "lots of more to be updated",
};

const Container = () => {
  const [overlayIsActive, setOverlayIsActive] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState("");

  const overlayHandler = (message) => {
    setOverlayIsActive(!overlayIsActive);
    setOverlayMessage(message);
  };

  const onCancelHandler = () => {
    setOverlayIsActive(false);
  };

  return (
    <Fragment>
      {overlayIsActive && (
        <Overlay onCancel={onCancelHandler} about={overlayMessage} />
      )}
      <div className={classes.content}>
        <Tiles
          onClick={() => {
            overlayHandler(CONTENT_DATA.about);
          }}
        >
          <div className={classes.position}>
            <FiSmile className={classes.icon}></FiSmile>About me
          </div>
        </Tiles>

        <Tiles
          about="lots of projects"
          onClick={() => {
            overlayHandler(CONTENT_DATA.project);
          }}
        >
          <div className={classes.position}>
            <FiLayers className={classes.icon}></FiLayers>My Projects
          </div>
        </Tiles>

        <Tiles
          about="call me"
          onClick={() => {
            overlayHandler(CONTENT_DATA.contact);
          }}
        >
          <div className={classes.position}>
            <FiPhone className={classes.icon}></FiPhone>
            <div>Contact</div>
          </div>
        </Tiles>
        <Tiles
          about="nothing more"
          onClick={() => {
            overlayHandler(CONTENT_DATA.more);
          }}
        >
          <div className={classes.position}>
            <FiMoreHorizontal className={classes.icon}></FiMoreHorizontal>More
          </div>
        </Tiles>
      </div>
    </Fragment>
  );
};

export default Container;
