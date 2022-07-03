import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import Container from '.';
import { Button } from '..';

function OptionModal() {
  return (
    <Container>
      <div className="HeaderContainer">
        <Button
          data-testid="profileButton"
          className="menuProfilePic"
          type="button"
          page="main"
        >
          <VscAccount size="2.8em" />
          Lucas Maieski - (WINE MEMBER)
        </Button>
      </div>
    </Container>
  );
}

export default OptionModal;
