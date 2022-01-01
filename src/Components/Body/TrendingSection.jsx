import {useState} from 'react';
import {Link} from 'react-router-dom';

export const TrendingSection = () => {
	const [IsStared, setIsStared] = useState(false);
	return (
		<div>
			<div className='repositry-card'>
				<div className='repo-info'>
					<h1>
						<Link className='repo-link' to='/'>
							<svg
								aria-hidden='true'
								height='16'
								viewBox='0 0 16 16'
								version='1.1'
								width='16'
								data-view-component='true'
								className='octicon octicon-repo link-icon'>
								<path d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'></path>
							</svg>
							<span data-view-component='true'>babysor / MockingBird</span>
						</Link>
					</h1>
					<div className='btn-group'>
						<Link
							to='/#'
							className='btn'
							type='button'
							onClick={() => setIsStared(!IsStared)}>
							{IsStared ? (
								<span>
									<svg
										aria-hidden='true'
										height='16'
										viewBox='0 0 16 16'
										version='1.1'
										width='16'
										data-view-component='true'
										className='octicon octicon-star'>
										<path d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'></path>
									</svg>
									&nbsp; Star
								</span>
							) : (
								<span>
									<svg
										aria-hidden='true'
										height='16'
										viewBox='0 0 16 16'
										version='1.1'
										width='16'
										data-view-component='true'
										className='octicon octicon-star-fill starred-btn-icon'>
										<path d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z'></path>
									</svg>
									&nbsp; Starred
								</span>
							)}
						</Link>
						<Link to='/about' className='btn' type='button'>
							<svg
								aria-hidden='true'
								height='16'
								viewBox='0 0 16 16'
								version='1.1'
								width='16'
								data-view-component='true'
								className='octicon octicon-triangle-down'>
								<path d='M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z'></path>
							</svg>
							&nbsp;
						</Link>
					</div>
				</div>
				<div className='repo-description'>
					<p>
						{/* <g-emoji
								class='g-emoji'
								alias='rocket'
								fallback-src='https://github.githubassets.com/images/icons/emoji/unicode/1f680.png'>
								🚀
							</g-emoji> */}
						AI拟声: 5秒内克隆您的声音并生成任意语音内容 Clone a voice in 5 seconds to
						generate arbitrary speech in real-time
					</p>
				</div>
				<div className='repo-stats'>
					<div className='all-stats'>
						<span className='mr-3'>
							<span>Python</span>
						</span>
						<Link className='mr-3' to='/#'>
							<svg
								aria-label='star'
								role='img'
								height='16'
								viewBox='0 0 16 16'
								version='1.1'
								width='16'
								data-view-component='true'
								className='octicon octicon-star'>
								<path d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'></path>
							</svg>
							&nbsp; 156,662
						</Link>
						<Link className='mr-3' to='/#'>
							<svg
								aria-label='fork'
								role='img'
								height='16'
								viewBox='0 0 16 16'
								version='1.1'
								width='16'
								data-view-component='true'
								className='octicon octicon-repo-forked'>
								<path d='M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z'></path>
							</svg>
							&nbsp; 28,989
						</Link>
						<span className='built-by mr-3'>
							<span>Built by </span>&nbsp;
							<Link to='/#'>
								<img
									className='user-avatar'
									src='https://avatars.githubusercontent.com/u/5458997?s=40&amp;v=4'
									width='20'
									height='20'
									alt='@donnemartin'
								/>
							</Link>
							<Link to='/#'>
								<img
									className='user-avatar'
									src='https://avatars.githubusercontent.com/u/171818?s=40&v=4'
									width='20'
									height='20'
									alt='@donnemartin'
								/>
							</Link>
						</span>
						<span className='date-stat'>
							<svg
								aria-hidden='true'
								height='16'
								viewBox='0 0 16 16'
								version='1.1'
								width='16'
								data-view-component='true'
								className='octicon octicon-star'>
								<path d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z'></path>
							</svg>
							&nbsp; 342 stars today
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
