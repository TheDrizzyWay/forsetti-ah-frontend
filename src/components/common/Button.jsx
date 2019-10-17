import React from 'react';
import { Button } from 'reactstrap';

const ButtonComponent = ({
  role, onClick, type, disabled, className, children, block, outline
}) => ((
  <Button
    type={type}
    role={role}
    disabled={disabled}
    onClick={onClick}
    className={className}
    block={block}
    outline={outline}
  >
    {children}
  </Button>
));

export default ButtonComponent;
