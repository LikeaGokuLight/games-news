import React, {useEffect} from 'react';
// Styled
import styled from "styled-components";
// Frame Motion (Animation)
import {motion} from "framer-motion";
import {popUp} from "../utils/animations";
// Fetch Data
import {useDispatch, useSelector} from "react-redux";
import {loadGameDetailById} from "../actions/detailAction";
// Link
import {Link} from "react-router-dom";
// Resize image
import {smallImage} from "../utils/mediaResize";

const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString();

    const detail = useSelector(state => state.detail)

    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadGameDetailById(id));
    };

    return (
        <StyledGame
            layoutId={stringPathId}
            onClick={loadDetailHandler}
            variants={popUp}
            initial={'hidden'}
            animate={'show'}
        >
            <Link to={`/games/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
            </Link>
        </StyledGame>
    );
};

// Styles
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

`;


export default Game;
