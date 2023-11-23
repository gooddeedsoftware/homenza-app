import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'
import Navigation from '../route/route';

function Header() {
	const [isExploreModalOpen, setExploreModalOpen] = useState(true);

	const openExploreModal = () => {
		setExploreModalOpen(true);
	};

	const closeExploreModal = () => {
		setExploreModalOpen(false);
	};
	return (
		<header class="sticky">
			<nav class="navbar navbar-expand-lg main-nav" style={{ zIndex: 99 }}>
				<div class="container-fluid px-lg-5">
					<a class="navbar-brand" href="index.php">
						<img src={logo} alt="logo" width="130" />
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<i class="fa fa-bars "></i>
					</button>
					{/* <div class="search-slider mx-5">
					<form action="">
						<div class="row">
							<div class="col-lg-5 col-md-5 pe-md-4">
								<label>Choose Property Type</label>
								<select class="search-input">
									<option value="">Type 1</option>
									<option value="">Type 2</option>
									<option value="">Type 3</option>
								</select>
							</div>
							<div class="col-lg-7 col-md-7 ps-4 d-flex align-items-center justify-content-between has-border">
								<div>
									<label>Find in and arround...</label>
									<input type="text" class="search-input" placeholder="Enter Collage/Office/local.." />
								</div>
								<a href="" class="location-selector">
									<i class="fa fa-crosshairs"></i>
								</a>
								<input type="submit" value="Search" class="search-btn" />
							</div>
						</div>
					</form>
				</div> */}
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						<Navigation />
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
