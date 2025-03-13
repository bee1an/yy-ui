import { cB, cM, cVar } from '@yy-ui/utils'

export const layoutHeaderStyle = cB(
  'layout-header',
  {
    boxSizing: 'border-box',
    width: '100%',
    color: cVar('textColor'),
    transition: `
		color ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')},
		background-color ${cVar('transitionDuration')} ${cVar(
      'transitionTimingFunction'
    )},
		box-shadow ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')},
		border-color ${cVar('transitionDuration')} ${cVar('transitionTimingFunction')}
	`,
    backgroundColor: cVar('backgroundColor')
  },
  [
    cM('bordered', {
      borderBottom: `1px solid ${cVar('borderColor')}`
    })
  ]
)
