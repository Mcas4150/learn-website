import glob from 'glob';
import path from 'path';
import fs from 'fs';
import frontmatter from 'front-matter';
import { urlFromRoute } from './util.js';

let db = {
    docs : []
};

glob('src/routes/**/*.svx', (err, routes) => {
	routes = routes.filter((p) => path.basename(p) !== 'index.svx');

	routes.forEach((route) => {
		let section = route.split('/')[2];

		let url = urlFromRoute(route);
		// Read the page in as a string
		let data = fs.readFileSync(route, 'utf8');
		
		// Get frontmatter
		let fm = frontmatter(data).attributes;
        fm.url = url;
		
        db.docs.push(fm);
	});

	// Write out results
	fs.writeFile('static/db.json', JSON.stringify(db), 'utf8', () => {});
});
