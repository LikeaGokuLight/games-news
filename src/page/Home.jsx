import React, {useEffect} from 'react';
// Fetch Data
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";
// Component
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Styled
import styled from "styled-components";
// Location
import {useLocation} from "react-router-dom";
// Motion
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import {fadeIn} from "../utils/animations";


const Home = () => {
    // Get Current Location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    // Get Data from State
    const {popularGames, newGames, upcomingGames, searched} = useSelector(state => state.games);
    // Fetch Data
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    return (
        <GameList
            variants={fadeIn}
            initial={'hidden'}
            animate={'show'}
        >
            <AnimateSharedLayout type={'crossfade'}>
                <AnimatePresence>
                    {
                        pathId && <GameDetail pathId={pathId}/>
                    }
                </AnimatePresence>

                {
                    searched.length ?
                    (<>
                        <h2>Searched Games</h2>
                        <Games>
                            {
                                searched.map((game) => (
                                    <Game
                                        name={game.name}
                                        released={game.released}
                                        id={game.id}
                                        image={game.background_image}
                                        key={game.id}
                                    />
                                ))
                            }
                        </Games>
                    </>)
                        :
                        ''

                }

                {/*Upcoming Games*/}
                <h2>Upcoming Games</h2>
                <Games>
                    {upcomingGames.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>

                {/*Popular Games*/}
                <h2>Popular Games</h2>
                <Games>
                    {popularGames.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>

                {/*New Games*/}
                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

// Styles
const GameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
