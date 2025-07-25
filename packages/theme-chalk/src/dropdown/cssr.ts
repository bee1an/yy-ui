import { c, cB, cE, cM, cNotM, cVar } from '@yy-craft/utils'

const popoverWrapperStyle = {
	boxShadow: cVar('boxShadow'),
	borderRadius: cVar('borderRadius'),
	fontSize: cVar('fontSize'),
	color: cVar('textColor'),
	transition: `
	box-shadow ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')},
	background-color ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')},
	color ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')}`
}

export const dropdownStyle = cB('dropdown', { ...popoverWrapperStyle, position: 'relative' }, [
	[
		cB('dropdown-submenu', popoverWrapperStyle),

		cB('popover-arrow', {
			width: '10px',
			height: '10px',
			backgroundColor: cVar('backgroundColor'),
			boxShadow: cVar('boxShadow')
		}),

		cB('popover-content', {
			position: 'relative',
			padding: cVar('padding'),
			boxSizing: 'border-box',
			backgroundColor: cVar('backgroundColor'),
			borderRadius: cVar('borderRadius')
		}),

		cB(
			'dropdown-item',
			{
				display: 'flex',
				alignItems: 'center',
				width: '100%',
				height: cVar('itemHeight'),
				backgroundColor: cVar('backgroundColor'),
				borderRadius: cVar('borderRadius'),
				color: cVar('textColor'),
				transition: `
					background-color ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')},
					color ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')}`,
				boxSizing: 'border-box',
				cursor: 'pointer'
			},
			[
				cNotM('group-title', [
					c('&:hover', {
						backgroundColor: cVar('backgroundColorHover')
					}),

					cM('selected', {
						backgroundColor: cVar('backgroundColorSelected')
					}),

					cM('active', {
						color: cVar('textColorSelected')
					})
				]),

				cM('group-title', {
					fontSize: '.93em',
					color: cVar('groupTextColor'),
					cursor: 'default'
				}),

				cE('content-icon', {
					fontSize: cVar('iconSize'),
					padding: cVar('iconPadding'),
					boxSizing: 'content-box',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					transition: `font-size ${cVar('transitionDuration')} ${cVar(
						'transitionTimingFunction'
					)},margin-right ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')}`
				}),
				cE(
					'content-main',
					{
						flex: '1',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						lineHeight: '1.75',
						transition: `opacity ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')}`
					},
					[
						c(
							'a',
							{
								outline: 'none',
								textDecoration: 'none',
								transition: `color ${cVar('transitionDuration')} ${cVar(
									'transitionTimingFunction'
								)}`,
								color: cVar('textColor')
							},
							[
								c('&::before', {
									content: '""',
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0
								})
							]
						)
					]
				),
				cE('content-expand', {
					transition: `transform ${cVar('transitionDuration')} ${cVar(
						'transitionTimingFunction'
					)},opacity ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')}`,
					fontSize: cVar('iconSize'),
					padding: cVar('expandIconPadding'),
					paddingRight: 0,
					boxSizing: 'content-box',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				})
			]
		)
	]
])
