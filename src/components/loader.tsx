import { CSSTransition } from 'react-transition-group';
import { css } from '@emotion/react';
import { useRef } from "react";

export const Loader = () => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={true}
            timeout={400}
            classNames="my-node" css={css`
    
    `}>
            <div ref={nodeRef} css={css`
&.my-node-enter {
    opacity: 0;
  }
 &.my-node-enter-active {
    opacity: 1;
    transition: opacity 1100ms;
  }
 &.my-node-exit {
    opacity: 1;
  }
 &.my-node-exit-active {
    opacity: 0;
    transition: opacity 1100ms;
  }
            `}></div>
            <div>

                <h1>Loading...</h1>
            </div>
        </CSSTransition>
    )
}