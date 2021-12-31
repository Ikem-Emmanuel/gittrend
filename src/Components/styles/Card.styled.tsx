import styled from 'styled-components';

export const StyledCard = styled.div`
	background-color: #0d1117;
	border-color: #30363d;
	border-style: solid;
	border-width: 1px;
	border-radius: 6px;
	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px;
		margin: -1px -1px 0;
		background-color: #161b22;
		border: 1px solid #30363d;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		.btn-group {
			display: inline-flex;
			border: 1px solid #30363d;
			border-radius: 6px;
			.btn {
				padding: 6px 20px;
				outline: none;
				cursor: pointer;
				color: #c9d1d9;
				font-weight: 500;
				line-height: 20px;
				text-decoration: none;
				z-index: 2;
			}
			.btn-active {
				z-index: 2;
				color: #f0f6fc;
				background-color: #1f6feb;
				border-color: #1f6feb;
			}
			.btn:first-child {
				border-top-left-radius: 6px;
				border-bottom-left-radius: 6px;
			}
			.btn:last-child {
				border-top-right-radius: 6px;
				border-bottom-right-radius: 6px;
			}
		}
	}
	.bread-container-subHeader {
		font-size: 16px;
		font-weight: 400;
		color: #8b949e;
		margin: 0 0 10px 0;
	}
`;

export const StyledCardFilters = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	.dropdown-container {
		position: relative;
		padding: 0px 15px;
		.dropdown-text::after {
			display: inline-block;
			width: 0;
			height: 0;
			vertical-align: -2px;
			content: '';
			border: 4px solid;
			border-right-color: transparent;
			border-bottom-color: transparent;
			border-left-color: transparent;
		}
		.dropdown-btn-link {
			color: #8b949e;
			display: inline-block;
			padding: 0;
			font-size: inherit;
			text-decoration: none;
			white-space: nowrap;
			cursor: pointer;
			user-select: none;
			background-color: transparent;
			border: 0;
			appearance: none;
			span {
				font-weight: 600;
			}
		}
		.dropdown-modal {
			z-index: 99;
			position: absolute;
			right: 0;
			width: 300px;
			margin-top: 4px;
			margin-bottom: 20px;
			overflow: hidden;
			font-size: 12px;
			color: #c9d1d9;
			background-color: #161b22;
			background-clip: padding-box;
			border-color: #30363d;
			box-shadow: 0 8px 24px #010409;
			border: 1px solid #30363d;
			border-radius: 6px;
			.dropdown-modal-header {
				padding: 8px 10px;
				line-height: 16px;
				background: #161b22;
				border-bottom: 1px solid #21262d;
				.dropdown-modal-header-title {
					font-weight: 600;
					color: #c9d1d9;
				}
				.dropdown-modal-close-button {
					display: block;
					float: right;
					color: #8b949e;
					cursor: pointer;
					padding: 0;
					background: transparent;
					border: 0;
					outline: none;
					margin-left: 8px;
				}
				.btn-link {
					display: inline-block;
					padding: 0;
					font-size: inherit;
					color: #8b949e;
					text-decoration: none;
					white-space: nowrap;
					cursor: pointer;
					user-select: none;
					background-color: transparent;
					border: 0;
					appearance: none;
					.octicon {
						margin-right: 4px;
					}
				}
			}
			.dropdown-modal-filter {
				background-color: #161b22;
				.dropdown-modal-filter-text {
					padding: 10px 10px 0;
					input {
						display: block;
						padding: 5px 12px;
						width: 100%;
						max-width: 100%;
						/* padding: 5px; */
						border: 1px solid #21262d;
						border-radius: 6px;
						::placeholder {
							color: #474e57;
						}
					}
				}
				.dropdown-modal-filter-text:first-child:last-child {
					padding-bottom: 10px;
					border-bottom: 1px solid #21262d;
				}
			}
			.form-control {
				padding: 5px 12px;
				font-size: 14px;
				line-height: 20px;
				color: #c9d1d9;
				vertical-align: middle;
				background-color: #0d1117;
				background-repeat: no-repeat;
				background-position: right 8px center;
				border: 1px solid #30363d;
				border-radius: 6px;
				outline: none;
				box-shadow: 0 0 transparent;
			}
			.dropdown-modal-list {
				position: relative;
				max-height: 400px;
				overflow: auto;
			}
			.dropdown-modal-list-item {
				display: block;
				text-align: left;
				background-color: #161b22;
				border-top: 0;
				border-right: 0;
				border-left: 0;
				padding: 10px 10px 10px 30px;
				overflow: hidden;
				color: inherit;
				cursor: pointer;
				border-bottom: 1px solid #21262d;
			}
			.dropdown-modal-list-item:hover {
				color: #f0f6fc;
				background-color: #1f6feb;
			}
			.dropdown-modal-list-item-icon {
				float: left;
				margin-left: -20px;
			}
			.dropdown-modal-list-item-text {
				color: inherit;
				text-decoration: none;
				display: block;
				text-align: left;
			}
			.dropdown-modal-loading-overlay {
			}
		}
	}
`;
