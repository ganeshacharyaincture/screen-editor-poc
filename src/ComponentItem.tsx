import React, { useState } from 'react';
import ComponentDialog from './ComponentDialog';

const ComponentItem = ({ component }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <div onClick={openDialog} style={{ border: '1px solid gray', margin: '5px', padding: '5px', cursor: 'pointer' }}>
        {component.type} Component
      </div>
      {isDialogOpen && (
        <ComponentDialog component={component} onClose={closeDialog} />
      )}
    </div>
  );
};

export default ComponentItem;