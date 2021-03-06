import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Styles.scss'
import classNames from 'classnames';

export const Footer = (props) => (
<div className="container wp-footer-container">
  <div className="row text-center">
  	<ul className="nav nav-pills wp-menu">
	  	<li><a href="https://github.com/twbs/bootstrap">GitHub</a></li>
		  <li><a href="https://twitter.com/getbootstrap">Twitter</a></li>
  		<li><a href="../getting-started/#examples">Examples</a></li>
	  	<li><a href="../about/">About</a></li>
  	</ul>
  </div>
  <div className="row text-center">
	<p>
		Designed and built with all the love in the world by <a href="https://twitter.com/mdo" target="_blank">@mdo</a> and <a href="https://twitter.com/fat" target="_blank">@fat</a>. Maintained by the <a href="https://github.com/orgs/twbs/people">core team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.
	</p>
	<p>
		Code licensed <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank" rel="license">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license">CC BY 3.0</a>.
	</p>
  </div>
</div>
)

export default Footer
