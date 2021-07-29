import React, { useRef, useState } from 'react';
import { DropDownWrap, DownArrowWrap } from './GuestDropdown.styles';
import { MdExpandMore } from 'react-icons/md';
import { connect } from 'react-redux';
const GuestDropdown = ({ totalGuest, adult, guest, infant }) => {
  const dropdownRef = useRef(null);
  const [isActivate, setIsActivate] = useState(false);
  const btnClick = () => setIsActivate(!isActivate);
  return (
    <DropDownWrap>
      <button onClick={btnClick}>
        <div className="vertical">
          <span className="accent">Guest</span>
          <span className="text">guest {totalGuest}</span>
        </div>
        <DownArrowWrap>
          <MdExpandMore />
        </DownArrowWrap>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActivate ? 'active' : 'inactive'}`}
      >
        <ul>
          <li>
            <span className="accent">Adults</span>
            <span>{adult}</span>
          </li>
          <li>
            <span className="accent">Children</span>
            <span>{guest}</span>
          </li>
          <li>
            <span className="accent">Infants</span>
            <span>{infant}</span>
          </li>
        </ul>
      </nav>
    </DropDownWrap>
  );
};
const mapStateToProps = ({ booking: { adult, guest, infant } }) => ({
  totalGuest: adult + guest + infant,
  adult,
  guest,
  infant,
});

export default connect(mapStateToProps, null)(GuestDropdown);
