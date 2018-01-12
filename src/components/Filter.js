import React, {Component} from 'react';

class Filter extends Component{
	handleClick(val){
		this.props.actions.selectFilter(val);
	}

	render(){
		const navItems = [
			{value:'All', key:'ALL'},
			{value:'Social', key:'SOCIAL'},
			{value:'News', key:'NEWS'}
		]

		return(
			<nav>
				<ul className="nav-items">
					{navItems.map((navItem) => 
							<li 
								className={this.props.filter===navItem.key ? 'nav-item active' : 'nav-item'} 
								onClick={this.handleClick.bind(this,navItem.key)}
								key={navItem.key}
							>
								{navItem.value}
							</li>
					)}
				</ul>
			</nav>
		)
	}
}

export default Filter;