
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function ButtonHamza(props) {
  return (
    <StyledWrapper>

<button className="button-confirm">{props.text}</button>


    </StyledWrapper>
  )
}

ButtonHamza.propTypes = {
  text: PropTypes.string
}


const StyledWrapper = styled.div`
 
  .button-confirm {

    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;

    margin: 50px auto 0 auto;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }`;

export default ButtonHamza
