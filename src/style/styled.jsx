import styled from 'styled-components';
import footerBg from '../assets/footer.svg';

const FullWidth = styled.div`
	float: left;
	width: 100%;
`;

const FullWidthSection = styled.section`
	float: left;
	width: 100%;
	padding: 50px 0px 75px 0px;
	@media only screen and (max-width: 767px) {
		padding: 25px 0px 75px 0px;
	}
`;

const LogoImage = styled.img`
	height: 65px;
`;

const BottomFooter = styled.footer`
	position: fixed;
	height: auto;
	bottom: 0;
	width: 100%;
	color: rgba(142, 142, 142, 1);
	background-color: rgb(3, 13, 23);
	z-index: 1;
	padding: 7px 0px 0px 0px;
	font-size: 0.85em;
`;

const BottomFooterSpike = styled.div`
	position: absolute;
	top: -29px;
	left: 0px;
	background-image: url(${footerBg});
	height: 50px;
	width: 100%;
	z-index: 2;
`;

const BodyTopContainer = styled(FullWidth)`
	height: 100%;
	padding-bottom: 60px;
`;

const ContentContainer = styled(FullWidth)`
	padding: 25px 0px;
`;

const MainHeading = styled.h1`
	float: left;
	width: 100%;
	font-size: 1.5em;
	font-weight: 500;
`;

const SubHeading = styled.h2`
	float: left;
	width: 100%;
	font-size: 1.15em;
	font-weight: 500;
`;

const Text = styled.p`
	float: left;
	width: 100%;
	margin-top: 0px;
	line-height: 1.5em;
`;


export {
	FullWidth,
	FullWidthSection,
	BottomFooter,
	LogoImage,
	BottomFooterSpike,
	BodyTopContainer,
	ContentContainer,
	MainHeading,
	SubHeading,
	Text
}