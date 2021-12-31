import {useState} from 'react';
import {StyledCardFilters} from '../../../styles/Card.styled';
import {Link} from 'react-router-dom';

export const Filters = () => {

	const [SpokenLanguageToggle, setSpokenLanguageToggle] = useState(false);
	const [LanguageToggle, setLanguageToggle] = useState(false);
	const [DateRangeToggle, setDateRangeToggle] = useState(false);

	return (
		<StyledCardFilters>
			<div className='dropdown-container'>
				<div
					className='dropdown-text dropdown-btn-link'
					onClick={() => {
						setLanguageToggle(false);
						setDateRangeToggle(false);
						setSpokenLanguageToggle(!SpokenLanguageToggle);
					}}>
					Spoken Languages:{' '}
					<span data-menu-button='' data-view-component='true' className='text-bold'>
						English{' '}
					</span>
				</div>
				{SpokenLanguageToggle ? (
					<div className='dropdown-modal'>
						<div className='dropdown-modal-header'>
							<span className='dropdown-modal-header-title'>
								Select a spoken language
							</span>
							<button
								data-toggle-for='select-menu-spoken-language'
								aria-label='Close menu'
								type='button'
								data-view-component='true'
								className='dropdown-modal-close-button hx_rsm-close-button btn-link ml-2'>
								<svg
									aria-hidden='true'
									height='16'
									viewBox='0 0 16 16'
									version='1.1'
									width='16'
									data-view-component='true'
									className='octicon octicon-x'>
									<path d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'></path>
								</svg>
							</button>
						</div>
						<div className='dropdown-modal-filter'>
							<div className='dropdown-modal-filter-text'>
								<input
									name='text'
									className='form-control'
									placeholder='Filter spoken languages'
								/>
							</div>
						</div>
						<div className='dropdown-modal-list'>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<svg
									aria-hidden='true'
									height='16'
									viewBox='0 0 16 16'
									version='1.1'
									width='16'
									data-view-component='true'
									className='octicon octicon-x dropdown-modal-list-item-icon'>
									<path d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'></path>
								</svg>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Clear spoken language
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									English
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Arabic
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Polish
								</Link>{' '}
							</div>
						</div>
						<div className='dropdown-modal-loading-overlay'></div>
					</div>
				) : null}
			</div>
			<div className='dropdown-container'>
				<div
					className='dropdown-text dropdown-btn-link'
					onClick={() => {
						setSpokenLanguageToggle(false);
						setDateRangeToggle(false);
						setLanguageToggle(!LanguageToggle);
					}}>
					Languages:{' '}
					<span data-menu-button='' data-view-component='true' className='text-bold'>
						English{' '}
					</span>
				</div>
				{LanguageToggle ? (
					<div className='dropdown-modal'>
						<div className='dropdown-modal-header'>
							<span className='dropdown-modal-header-title'>Select a language</span>
							<button
								data-toggle-for='select-menu-spoken-language'
								aria-label='Close menu'
								type='button'
								data-view-component='true'
								className='dropdown-modal-close-button hx_rsm-close-button btn-link ml-2'>
								<svg
									aria-hidden='true'
									height='16'
									viewBox='0 0 16 16'
									version='1.1'
									width='16'
									data-view-component='true'
									className='octicon octicon-x'>
									<path d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'></path>
								</svg>
							</button>
						</div>
						<div className='dropdown-modal-filter'>
							<div className='dropdown-modal-filter-text'>
								<input
									name='text'
									className='form-control'
									placeholder='Filter languages'
								/>
							</div>
						</div>
						<div className='dropdown-modal-list'>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<svg
									aria-hidden='true'
									height='16'
									viewBox='0 0 16 16'
									version='1.1'
									width='16'
									data-view-component='true'
									className='octicon octicon-x dropdown-modal-list-item-icon'>
									<path d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'></path>
								</svg>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Clear language
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<svg
									aria-hidden='true'
									height='16'
									viewBox='0 0 16 16'
									version='1.1'
									width='16'
									data-view-component='true'
									className='octicon octicon-check dropdown-modal-list-item-icon'>
									<path d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'></path>
								</svg>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Python
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Javascript
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Html
								</Link>{' '}
							</div>
						</div>
						<div className='dropdown-modal-loading-overlay'></div>
					</div>
				) : null}
			</div>
			<div className='dropdown-container'>
				<div
					className='dropdown-text dropdown-btn-link'
					onClick={() => {
						setSpokenLanguageToggle(false);
						setLanguageToggle(false);
						setDateRangeToggle(!DateRangeToggle);
					}}>
					Date Range :{' '}
					<span data-menu-button='' data-view-component='true' className='text-bold'>
						Today{' '}
					</span>
				</div>
				{DateRangeToggle ? (
					<div className='dropdown-modal'>
						<div className='dropdown-modal-header'>
							<span className='dropdown-modal-header-title'>Adjust time span</span>
							<button
								data-toggle-for='select-menu-spoken-language'
								aria-label='Close menu'
								type='button'
								data-view-component='true'
								className='dropdown-modal-close-button hx_rsm-close-button btn-link ml-2'>
								<svg
									aria-hidden='true'
									height='16'
									viewBox='0 0 16 16'
									version='1.1'
									width='16'
									data-view-component='true'
									className='octicon octicon-x'>
									<path d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'></path>
								</svg>
							</button>
						</div>
						<div className='dropdown-modal-list'>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<svg
									aria-hidden='true'
									height='16'
									viewBox='0 0 16 16'
									version='1.1'
									width='16'
									data-view-component='true'
									className='octicon octicon-check dropdown-modal-list-item-icon'>
									<path d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'></path>
								</svg>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									Today
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									This Week
								</Link>{' '}
							</div>
							<div className='dropdown-modal-list-item-clear dropdown-modal-list-item'>
								<Link
									to='/trending?spoken_language_code=${}'
									className='dropdown-modal-list-item-text'
									data-view-component='true'>
									This Month
								</Link>{' '}
							</div>
						</div>
						<div className='dropdown-modal-loading-overlay'></div>
					</div>
				) : null}
			</div>
		</StyledCardFilters>
	);
};
