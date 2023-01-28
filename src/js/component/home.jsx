import React from "react";
import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Footer } from "./footer.jsx";
import { Card } from "./card.jsx";

//create your first component
export const cardData = [
	{
		cardImage:"https://picsum.photos/id/233/500/325", 
		cardTitle:"Card Title 1", 
		cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ornare velit vel pharetra.", 
		cardButton:"Find Out More 1!",
	}, {
		cardImage:"https://picsum.photos/id/127/500/325", 
		cardTitle:"Card Title 2", 
		cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ornare velit vel pharetra.", 
		cardButton:"Find Out More 2!",
	}, {
		cardImage:"https://picsum.photos/id/94/500/325", 
		cardTitle:"Card Title 3", 
		cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ornare velit vel pharetra.", 
		cardButton:"Find Out More 3!",
	}, {
		cardImage:"https://picsum.photos/id/83/500/325", 
		cardTitle:"Card Title 4", 
		cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ornare velit vel pharetra.", 
		cardButton:"Find Out More 4!",
	}]


const Home = () => {
	return (
		<React.Fragment>
			<NavBar/>
			<Jumbotron/>
			<div className="d-flex align-items-center justify-content-evenly mb-4">
				{cardData.map((item, index) => {
					return (
						<Card data={item}/>
					)
				})}
			</div>
			<Footer/>
		</React.Fragment>
	);
};

export default Home;
