import React from 'react'
import QRCode from 'react-native-qrcode-svg'

import { Container, Code } from './styles'

const Menu = () => (
  <Container>
    <Code>
      <QRCode value="https://github.com/henriquerochars" size={80} backgroundColor="#8B10AE" color="#FFF" />
    </Code>
  </Container>
)

export default Menu
