import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import {TweetContext} from './TweetContext'

import { STYLE } from '../misc/constant'

const Wrapper = styled.span`
  color: ${STYLE.neutral};
  font-size: 16px;
  margin-left: 6px;
`;

const Timestamp = () => {
    const { timestamp } = React.useContext(
        TweetContext
      );
      return <Wrapper>{moment(timestamp).format('MMM Do')}</Wrapper>
}

export default Timestamp