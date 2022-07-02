import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import Container from '.';
import { Button } from '..';

function OptionModal() {
  return (
    <Container>
      <Button
        data-testid="profileButton"
        className="menuProfilePic"
        type="button"
      >
        <VscAccount size="2.8em" />
        Lucas Maieski - (WINE MEMBER)
      </Button>
    </Container>
  );
}

export default OptionModal;
