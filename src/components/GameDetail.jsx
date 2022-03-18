import React from 'react';
// Get State
import {useSelector} from "react-redux";
// Styles
import styled from "styled-components";
// Anime Motion Framer
import {motion} from "framer-motion";
// Uuid
import {v4 as uuidv4} from 'uuid';
// useHistory but useNavigate is in V6
import { useNavigate  } from "react-router-dom";
// Resize Image
import {smallImage} from "../utils/mediaResize";
// React Icons
import {FaXbox, FaSteamSymbol, FaAppStore} from "react-icons/fa";
import {SiNintendoswitch, SiPlaystation4, SiPlaystation5} from "react-icons/si";
import {IoStarOutline, IoStarSharp} from "react-icons/io5";

const GameDetail = ({ pathId }) => {
    const navigate = useNavigate();

    const {game, screenShots, isLoading} = useSelector(state => state.detail);

    // Scroll exit
    const exitDetailHandler = (e) => {
        // Close Modal
        const element =e.target;
        if ( element.classList.contains('shadow') ) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    };

    // Get Platform Icons
    const getPlatform = (platform) => {

        switch (platform) {
            case "PlayStation 4":
                return <SiPlaystation4 />;
            case "PlayStation 5":
                return <SiPlaystation5 />;
            case "Xbox Series S/X":
                return <FaXbox />;
            case "Nintendo Switch":
                return <SiNintendoswitch />;
            case "PC":
                return <FaSteamSymbol />;
            case "iOS":
                return <FaAppStore />;
            default:
                return;
        }

    };

    // Get Stars
    const getStars = () => {

        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i = 1; i <= 5; i++ ) {
            if ( i <= rating ) {
                stars.push(<IoStarSharp key={i} />)
            } else {
                stars.push(<IoStarOutline key={i} />)
            }
        }

        return stars;

    };

    return (
        <>
            {
                isLoading
                    ? (
                    <></>
                    )
                    : (
                        <CardShadow
                            className={'shadow'}
                            onClick={(e) => exitDetailHandler(e)}
                        >
                            <Detail layoutId={pathId}>
                                <Stats>
                                    <Rating>
                                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                                        <p>Rating: {game.rating}</p>
                                        {getStars()}
                                    </Rating>

                                    <Info>
                                        <h3>Platforms</h3>
                                        <Platforms>
                                            {
                                                game.platforms.map((data) => (
                                                    <div key={uuidv4()}>
                                                        {getPlatform(data.platform.name)}
                                                    </div>
                                                ))
                                            }
                                        </Platforms>
                                    </Info>
                                </Stats>

                                <Media>
                                    <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={'game-pic'}/>
                                </Media>

                                <Description>
                                    <p>{game.description_raw}</p>
                                </Description>


                                <Gallery>
                                    {
                                        screenShots.map((screen) => (
                                            <img key={uuidv4()} src={smallImage(screen.image, 600)} alt="screen-img"/>
                                        ))
                                    }
                                </Gallery>


                            </Detail>
                        </CardShadow>
                    )
            }
        </>

    );
};

// Styles
const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: dodgerblue;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  text-align: start;

  img {
    width: 100%;
  }
`;

const Rating = styled.div`
  h3 {
    padding: 0!important;
  }
  
  svg {
    display: inline;
    font-size: 2.5rem;
  }
`

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  text-align: center;
`;

const Platforms = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  img {
    margin-left: 3rem;
  }
  
  svg {
    margin-left: 3rem;
    font-size: 2.5rem;
  }
`;

const Media = styled.div`
  margin-top: 5rem;
  
  img {
    width: 100%;
  }
`;

const Description = styled.div`
  margin: 5rem 0;
`;

const Gallery = styled.div`
  img {
    margin: .5rem 0;
  }
`

export default GameDetail;
