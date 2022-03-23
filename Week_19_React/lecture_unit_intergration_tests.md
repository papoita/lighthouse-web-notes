https://www.youtube.com/watch?v=3GD6oZNtjEs

https://vimeo.com/690088601/d6f5c0bdbc

React front-end

npm i react-router-dom
npm start

# Routes
if you need several links in components you cna use route parameters (:productId)
react ruter: conditionally showing
if URL = something then we can share directly a link

# useNavigate

tell user to navigate exactly where to go
navigate(1) => forward one
navigate (-2) => before 2 steps in memory

# custom hooks 
## useParams

axios GET
Front end communicates with back end (http or ajax)


# Styled components

npm i styled-components

import styled from 'styled-components';

styled.domeleement`
color: tomato;
border: 2px solid lightgrey;
`;
ie. 
styled.h1()

such as console.log`hello`;

no leaking

also conditionally styled

                             
cosnt custom = styled.h2`
color: ${props => props.electric ? 'yellow' : 'darkgrey'}
`;

input required="true";


tailwind as a bootstrap for style components

# useContext
import state to avoid props (almost replacing Redux)

import {useContext} from 'react';
import functionContext from "./functionContext "

export default functionContext();


# useRef

way of referencing the DOM

reference
gaining focus - cursor and line- then blurring (leaving focus)

setFocus 
const Focus = () =>{
  <input 
    ref={inputRef} 
    value={serachTerm}
    onChange={(event)=>getSearchTerm(event.target.value) }/>
  <button>  </button>
}

import {useRef} from 'react';

# StaleState
with asynchoronous code
ie. another botton 

import {useState, useEffect, useRef} from 'react';

const [count, setCount] = useState(0);
const countRef = useRef();
countRef.current = count;

expor default StaleState;

# MAterial Ui to bring in cmponents already designed

# ant design 
2nd best design components 