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
		}
	}
`;

export const StyledCardBody = styled.div`
	.repositry-card {
		padding: 16px;
		margin-top: -1px;
		list-style-type: none;
		border-top-color: #21262d;
		border-top-style: solid;
		border-top-width: 1px;
		.repo-info {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.repo-description {
			padding-right: 24px;
			margin: 4px 0;
			width: 75%;
			p {
				padding-right: 24px;
				color: #8b949e;
				margin: 4px 0;
			}
		}

		.repo-stats {
			color: #8b949e;
			margin-top: 8px;
			font-size: 12px;
			.all-stats {
				display: flex;
				align-items: center;
				.mr-1 {
					margin-right: 4px;
				}
				.mr-2 {
					margin-right: 8px;
				}
				.mr-3 {
					margin-right: 16px;
				}
				.mx-3 {
					margin: 0, 12px;
				}
				a {
					text-decoration: none;
					color: #8b949e;
				}
				a:hover {
					color: #58a6ff;
				}
				.built-by {
					display: flex;
					align-items: center;
				}
				.user-avatar {
					display: inline-block;
					overflow: hidden;
					margin: 0 1px;
					line-height: 1;
					vertical-align: middle;
					background-color: #f0f6fc1a;
					border-radius: 50%;
					flex-shrink: 0;
					box-shadow: 0 0 0 1px #f0f6fc1a;
				}
				.date-stat {
					margin-left: auto;
				}
			}
		}
	}
	.developers-card {
		padding: 16px;
		margin-top: -1px;
		list-style-type: none;
		border-top-color: #21262d;
		border-top-style: solid;
		border-top-width: 1px;
		/* display: flex; */
		align-items: flex-start;
		.serial-number-link {
			width: 16px;
		}
		.user-image {
			margin: 0px 16px;
		}
		.user-info {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			width: 77%;
			.info-width {
				width: 50%;
			}
		}
		.profile-info {
			width: 23%;
			display: flex;
			justify-content: space-between;
			margin-left: 16px !important;
			.profile-link a {
				font-weight: 400;
				font-size: 16px;
				text-decoration: none;
			}
			.profile-link:hover a {
				color: #58a6ff;
				text-decoration: underline;
			}

			/* .sponsor-follow-btn {
				display: flex;
				align-items: flex-start;
				justify-content: flex-end;
			} */
		}
		.btn {
			position: relative;
			display: inline-block;
			padding: 3px 12px;
			font-size: 12px;
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
		.color-orange {
			color: #db6d28;
		}
		.color-pink {
			color: #db61a2;
		}
		.text-uppercase {
			text-transform: uppercase !important;
		}
		.f6 {
			font-size: 12px !important;
		}
		.h4 {
			font-size: 16px !important;
			line-height: 1.25 !important;
		}
		.sponsor-icon {
			transition: transform 0.15s cubic-bezier(0.2, 0, 0.13, 2);
			transform: scale(1);
		}
		.v-align-middle {
			vertical-align: middle !important;
		}
		.pulse-in-anim {
			animation-name: pulse-in;
			animation-duration: 0.5s;
		}
	}

	.d-flex {
		display: flex;
		width: 100%;
	}
	.mx-3 {
		margin: 0 16px;
	}

	.mb-1 {
		margin-bottom: 4px !important;
	}
	.mt-1 {
		margin-top: 4px !important;
	}
	.mr-1 {
		margin-right: 4px;
	}

	h1 {
		font-size: 20px;
		font-weight: 400;
		line-height: 1.25;
		margin: 0;
	}
	a {
		color: #58a6ff;
		text-decoration: none;
	}

	.muted {
		color: #8b949e;
	}

	.rounded-border {
		border-radius: 50%;
	}

	a:hover {
		text-decoration: underline;
	}
	.btn-group {
		display: inline-flex;
		border: 1px solid #30363d;
		border-radius: 6px;
		background-color: #21262d;
		.btn {
			padding: 4px 12px;
			outline: none;
			cursor: pointer;
			color: #c9d1d9;
			font-size: 12px;
			line-height: 20px;
			text-decoration: none;
			z-index: 2;
		}
		.starred-btn-icon {
			color: #e3b341;
		}
		.btn:first-child {
			border-top-left-radius: 6px;
			border-bottom-left-radius: 6px;
			border-right: 1px solid #30363d;
		}
		.btn:last-child {
			padding: 4px 8px;
			border-top-right-radius: 6px;
			border-bottom-right-radius: 6px;
		}
		.btn:last-child:active {
			background-color: #282e33;
			transition: none;
			z-index: 1;
		}
	}

	.link-icon {
		margin-right: 8px;
		color: #8b949e !important;
	}
	.card-body:first-of-type {
		border-top-color: transparent;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}
`;
