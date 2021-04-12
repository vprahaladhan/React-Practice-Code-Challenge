import React, { Fragment } from 'react';

import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton';

const SushiContainer = ({ sushis, showMoreSushis, onClick }) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} onClick={onClick}/>)}
        <MoreButton showMoreSushis={showMoreSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer