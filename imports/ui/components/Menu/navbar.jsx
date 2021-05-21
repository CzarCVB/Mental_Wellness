import React, { useState, useEffect } from 'react';

const navbar = props => {

	return (
    	<nav class="nav flex-md-column float-left container">
			<a class="navbar-brand" href="#">
    			<img src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" loading="lazy"/>
  			</a>
			<a class="nav-link active btn btn-primary" href="#">Active</a>
			<a class="nav-link btn btn-primary" href="#">Link</a>
			<a class="nav-link btn btn-primary" href="#">Link</a>
			<a class="nav-link disabled btn btn-primary" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		</nav>
	);
}

export default navbar;
