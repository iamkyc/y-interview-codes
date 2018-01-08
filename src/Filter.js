import React, {Component} from 'react';

class Filter extends Component{
	constructor(){
		super();
		this.state={
			active:'ALL'
		}
	}

	handleClick(val){
		if(this.props.onClick){
			this.props.onClick(val);
		}
		this.setState({active:val});
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
								className={this.state.active===navItem.key ? 'nav-item active' : 'nav-item'} 
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