import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	background-color: #161b22;
	margin: auto;
	color: #e8e9e9;
	padding: 8px 0;
`;

export const StyledSubHeader = styled.header`
	display: flex;
	justify-content: center;
	margin: auto;
	color: #e8e9e9;
	padding: 6px 0;
`;

export const StyledLink = styled.div`
	width: 1012px;
	margin: auto;
	padding: 8px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		color: #fff;
		font-size: 16px;
		text-decoration: none;
	}
`;

export const StyledSubLink = styled.div`
	width: 1012px;
	display: flex;
	align-items: center;
	margin: auto;
	padding: 8px 0px;
	justify-content: space-between;
	.sub-links {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			color: #8b949e;
			font-size: 14px;
			cursor: pointer;
			text-decoration: none;
		}
	}
	.sub-links-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.btn {
			position: relative;
			display: inline-block;
			padding: 8px 16px;
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			white-space: nowrap;
			vertical-align: middle;
			cursor: pointer;
			user-select: none;
			border: 1px solid;
			border-radius: 6px;
			appearance: none;
			color: #c9d1d9;
			background-color: #21262d;
			border-color: #f0f6fc1a;
			transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
			transition-property: color, background-color, border-color;
		}
	}
`;

export const StyledSearch = styled.div`
	label {
		display: flex !important;
		align-items: center !important;
		width: 100%;
		vertical-align: middle;
		background-color: #0d1117;
		border: 1px solid #30363d;
		border-radius: 6px;
		box-shadow: none;
	}

	input {
		padding: 10px 14px;
		font-size: 14px;
		outline: none;
		border-radius: 6px;
		background-color: #0d1117;
		border: none;
		box-shadow: none;
		::placeholder {
			color: #c3c3c5;
		}
	}
	svg {
		overflow: hidden;
		margin-right: 8px;
	}
`;
