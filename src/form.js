import React, { Component } from 'react';


class City extends Component{
	render(){
		return(
			<div>
				<input type="text" placeholder="Entrez une ville" onChange={this.props.cityChange} />
			</div>
			)
	}
}

class Altitude extends Component{
	render(){
		return(
			<div>
				<input type="range" onChange={this.props.altiChange}/> 
			</div>
			)
	}
}

class Orientation extends Component{
	render(){
		return(
			<div>
			<input type="checkbox" selected="true" onClick={this.props.orientChange}/> {this.props.value}
			</div>
			)
	}
}

class Distance extends Component{
	render(){
		return(
			<div>
			<input type="range"/>
			</div>
			)
	}
}


class Form extends Component{
	constructor(){
		super();
		this.state ={
			'city': null,
			'altitude': 0,
			'orientations': new Set(),
			'distance': 20,
		};
		this.altiChange = this.altiChange.bind(this);
		this.cityChange = this.cityChange.bind(this);
		this.orientChange = this.orientChange.bind(this);
	}
	altiChange(event){
		this.setState({altitude:event.target.value});
	}
	cityChange(event){
		this.setState({city:event.target.value});
	}
	orientChange(orient){
		if(this.state.orientations.has(orient)){
			let orientCopy = this.state.orientations;
			orientCopy.delete(orient);
			this.setState({orientations:orientCopy})
		}
		else{
			let orientCopy = this.state.orientations;
			orientCopy.add(orient)
			this.setState({orientations:orientCopy})
		}
	}
	renderOrientation(orient){
		return <Orientation value={orient} orientChange={() => this.orientChange(orient)}/>
	}

	render(){
		return(
		<div>
			<City cityChange={this.cityChange}/>
			<Altitude altiChange={this.altiChange}/>
			{this.renderOrientation("E")}
			{this.renderOrientation("O")}
			{this.renderOrientation("N")}
			{this.renderOrientation("S")}

			<h3> Data from the form</h3>
			<h5> Ville: {this.state.city} </h5>
			<h5> Altitude: {this.state.altitude} </h5>
			<h5> Orientation: {this.state.orientations} </h5>
			<h5> Distance: {this.state.distance} </h5>
		</div>
		)
	};
}

export default Form;