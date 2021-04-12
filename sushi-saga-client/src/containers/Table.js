import React, { Fragment } from 'react'

const Table = ({ emptyPlates, moneyRemaining }) => {

  const renderPlates = (array) => array.map((x, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(emptyPlates)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table