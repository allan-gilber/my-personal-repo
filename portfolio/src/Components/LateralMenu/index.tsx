/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';

import {
	Container,
	MenuItem,
	LogoImage,
	ArrowContainer} from './styles';

// Icons

import RightArrowIcon from '../../Assets/RightArrowIcon.svg';
import LeftArrowIcon from '../../Assets/LeftArrowIcon.svg';
import DefaultLogo from '../../Assets/DefaultLogo.svg';
import HomeIconRed from '../../Assets/HomeIconRed.svg';
import HomeIcon from '../../Assets/HomeIcon.svg';


const Menu = () => {
	const [closeMenu, setCloseMenu] = useState(false);

	const showMyCompanyName = () => {
		const companyName = 'My Company';
		if (closeMenu) {
			const splittedName = companyName.split(' ');
			return splittedName.map((string) => {
				return string[0].toUpperCase() + '.';
			});
		} else {
			return companyName;
		}
	};

	return (
		<Container closeMenu={closeMenu }>
			<ArrowContainer
				closeMenu={closeMenu}
				onClick={() => {
					setCloseMenu(!closeMenu);
				}}
			>
				{closeMenu ? <img src={RightArrowIcon} /> : <img src={LeftArrowIcon} />}
			</ArrowContainer>
			<LogoImage closeMenu={closeMenu}>
				<img src={DefaultLogo} />
				<h4>{showMyCompanyName()}</h4>
			</LogoImage>
			<ul key="1">
				<MenuItem
					closeMenu={closeMenu}
					menucolor={'green'}
					textcolor={'red'}
					onClick={() => null}
				>
					<img src={closeMenu ? HomeIconRed : HomeIcon} />
					<span>Inicio</span>
				</MenuItem>
			</ul>
		</Container>
	);
};

export default Menu;