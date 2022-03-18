import React, {useState} from 'react';
// styled
import styled from "styled-components";
// Motion
import {motion} from "framer-motion";
import {fadeIn} from "../utils/animations";
// React Icons
import {CgGames} from "react-icons/cg";
// Get State
import {fetchSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";

const SearchNav = () => {
    const [textInput, setTextInput] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }

    const cleanSearch = () => {
        dispatch({ type: 'CLEAN_SEARCH' });
    }

    return (
        <StyledSearch
            variants={fadeIn}
            initial={'hidden'}
            animate={'show'}
        >
            <Logo onClick={cleanSearch}>
                <CgGames />
                <h1>Games | News</h1>
            </Logo>
            <form className={'search'}>
                <input value={textInput} onChange={inputHandler} type="search"/>
                <CustomBtn onClick={(e) => submitSearch(e)} type={'submit'}>Search</CustomBtn>
            </form>
        </StyledSearch>
    );
};

// Styles
const StyledSearch = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
    outline: none;

    &:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  svg {
    font-size: 3.5rem;
    padding-right: .5rem;
  }
`

const CustomBtn = styled.button`
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 20px;
  transform: translateY(-2px);


  &:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-4px);
  }

  &:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
  }
`

export default SearchNav;






