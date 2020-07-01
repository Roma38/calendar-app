import React, { useState, Fragment } from 'react';

function EventColumn({events}) {
  return (
    <div className="events-layer__col">
      {JSON.stringify(events)}
    </div>
  );
}

export default EventColumn;