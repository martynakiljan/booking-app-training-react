import withClass from '../../hoc/withClass'

function Layout(props) {
	const { header, menu, content, footer } = props
	return (
		<div>
			{' '}
			<div className='container'>{header}</div>
			<div className='container'>{menu}</div>
			<div className='container'>{content}</div>
			<div className='container'>{footer}</div>
		</div>
	)
}

export default withClass(Layout, 'layout')
