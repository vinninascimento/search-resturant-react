import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0% {
        opacity: 0.5;

    }
    100% {
        opatity:1;

    }
`;

const LoadingSkeleton = styled.div`
    background-color: gray;
    border-radius: 6px;
    margin-bootom: 10px;
    min-width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
