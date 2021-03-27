import React from 'react';
import QRCode from 'react-native-qrcode-svg'

import { Container, Code } from './styles';


function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://github.com/henriquerochars"
          size={80}
          backgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>
    </Container>
  );
};

export default Menu;
