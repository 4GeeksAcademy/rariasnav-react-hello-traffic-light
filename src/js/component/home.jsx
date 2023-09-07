import React, {useState} from "react";

//create your first component
const Home = () => {
	let [redborderColorLight, setRedBorderColor ] = useState('black');
	let [orangeborderColorLight, setOrangeBorderColor ] = useState('black');
	let [greenborderColorLight, setGreenBorderColor ] = useState('black');
	function redBorderColor(){
		if(redborderColorLight == "yellow") {
			setRedBorderColor('black')
		}else{
			setRedBorderColor('yellow')
			setOrangeBorderColor('black')
			setGreenBorderColor('black')
		};
	};
	function orangeBorderColor(){
		if(orangeborderColorLight == "yellow") {
			setOrangeBorderColor('black')
		}else{
			setOrangeBorderColor('yellow')
			setRedBorderColor('black')
			setGreenBorderColor('black')
		};
	};
	function greenBorderColor(){
		if(greenborderColorLight == "yellow") {
			setGreenBorderColor('black')
		}else{
			setGreenBorderColor('yellow')
			setRedBorderColor('black')
			setOrangeBorderColor('black')
		};
	};


	return (
		<div>
			<div className="col bg-dark mx-auto mt-5 p-1 text-center" style={{width: "1rem", height: "3rem"}}></div>
			<div className="col bg-dark mx-auto p-1 text-center" style={{width: "6rem", height: "13rem", borderRadius: "5%"}}>
				<button className="d-block mx-auto text-center" style={{backgroundColor: "red", borderColor: redborderColorLight, width: "4rem", height: "4rem", borderRadius: "50%" }} onClick={redBorderColor} ></button>
				<button className="d-block mx-auto text-center" style={{backgroundColor: "orange", borderColor: orangeborderColorLight, width: "4rem", height: "4rem", borderRadius: "50%" }} onClick={orangeBorderColor} ></button>
				<button className="d-block mx-auto text-center" style={{backgroundColor: "green", borderColor: greenborderColorLight, width: "4rem", height: "4rem", borderRadius: "50%" }} onClick={greenBorderColor} ></button>
			</div>
		</div>
	);
};

export default Home;
