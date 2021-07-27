import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
  FooterWrap,
  MainFooter,
  CountrySetting,
  SnSInfo,
  FooterBox,
  Text,
} from './footer.styles';
const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap>
        <MainFooter>
          <Text>© 2021 Carebnb, Inc.</Text>
          <Text>Privacy·Terms·Sitemap</Text>
        </MainFooter>
        <CountrySetting>
          <Text>English (US) </Text>
          <Text>$ USD</Text>
        </CountrySetting>
        <SnSInfo>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </SnSInfo>
      </FooterWrap>
    </FooterBox>
  );
};

export default Footer;
